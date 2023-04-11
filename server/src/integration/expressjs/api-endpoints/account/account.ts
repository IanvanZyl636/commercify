import { RouterModel } from "@common/models/router.model";
import { Controllers } from "@common/types/controller.type";
import validateSchema from "@expressjs/middleware/zod-schema-validation.middleware";
import registerSchema from "@zod/schemas/register.schema";
import express, { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import googleOAuth from "@oauth/google/google";

export default function accountRouterInit(): RouterModel {
  const accountRouter = express.Router();

  accountRouter.post("/login", controllers.login);
  accountRouter.post("/register", validateSchema(registerSchema), controllers.register);
  accountRouter.get("/google", controllers.google);

  return {
    path: "/account",
    router: accountRouter,
  };
}

const controllers: Controllers<{
  login: RequestHandler<any>;
  register: RequestHandler<any>;
  google: RequestHandler<any>;
}> = {
  login: (req, res) => {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET;

    if (!secret) {
      return;
    }

    const accessToken = jwt.sign({}, secret);

    res.send(accessToken);
  },
  register: (req, res) => {
    const registerSchemaResult = registerSchema.parse(req.body);

    const { middleName, email, password, firstName, surname } = registerSchemaResult;

    res.send(googleOAuth.getAuthUrl());
  },
  google: async (req, res, next) => {
    const code = req.query.code as string;
    try {
      const token = await googleOAuth.getToken(code);
      const userInfo = await googleOAuth.getUserInfo(token.access_token);

      await googleOAuth.verifyJWT(token.access_token);

      res.send("Successfully authenticated with Google!");
    } catch (error) {
      //res.status(500).send("Failed to authenticate with Google.");
      next(error);
    }
  },
};
