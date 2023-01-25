import express from "express";
import jwt from "jsonwebtoken";

export default function accountRouterInit() {
  const accountRouter = express.Router();

  accountRouter.post("/login", (req, res) => {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET;

    if (!secret) {
      return;
    }

    const accessToken = jwt.sign({}, secret);

    res.send(accessToken);
  });

  accountRouter.post("/register", (req, res) => {
    res.send("logins");
  });

  return accountRouter;
}
