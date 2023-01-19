import loginApiEndPoints from "./api-endpoints/login";
import express from "express";

export default function accountRouterInit() {
  const accountRouter = express.Router();

  loginApiEndPoints(accountRouter);

  return accountRouter;
}
