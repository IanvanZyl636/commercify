import { RouterModel } from "@common/models/router.model";
import { Controllers } from "@common/types/controller.type";
import validateSchema from "@expressjs/middleware/zod-schema-validation.middleware";
import registerSchema from "@zod/schemas/register.schema";
import express, { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export default function accountRouterInit(): RouterModel {
  const accountRouter = express.Router();

  accountRouter.post("/login", controllers.login);
  accountRouter.post("/register", validateSchema(registerSchema), controllers.register);

  return {
    path: "/account",
    router: accountRouter,
  };
}

const controllers: Controllers<{
  login: RequestHandler<any>;
  register: RequestHandler<any>;
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

    res.send(firstName);
  },
};
