import express from "express";
import jwt from "jsonwebtoken";
import validEmail from "../../../../common/helpers/email.helper";
import { RouterModel } from "../../models/router.model";
import registerRoute from "./register/register";

export default function accountRouterInit(): RouterModel {
  const accountRouter = express.Router();

  accountRouter.post("/login", (req, res) => {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET;

    if (!secret) {
      return;
    }

    const accessToken = jwt.sign({}, secret);

    res.send(accessToken);
  });

  registerRoute(accountRouter);

  return {
    path: "/account",
    router: accountRouter,
  };
}
