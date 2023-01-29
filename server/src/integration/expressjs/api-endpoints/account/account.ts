import { RouterModel } from "@common/models/router.model";
import express from "express";
import jwt from "jsonwebtoken";
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
