import { RouterModel } from "@common/models/router.model";
import { Controllers } from "@common/types/controller.type";
import express, { RequestHandler } from "express";

export default function rootRouterInit(): RouterModel {
  const rootRouter = express.Router();

  rootRouter.get("/ping", controllers.ping);

  return {
    path: "",
    router: rootRouter,
  };
}

const controllers: Controllers<{
  ping: RequestHandler<any>;
}> = {
  ping: (req, res) => {
    res.send("Pong");
  },
};
