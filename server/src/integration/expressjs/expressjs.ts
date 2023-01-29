import express from "express";
import accountRouterInit from "./api-endpoints/account/account";
import { RouterModel } from "../../common/models/router.model";

const app = express();

const routers: RouterModel[] = [accountRouterInit()];

const setupRoutes = () => {
  routers.forEach((router) => app.use(router.path, router.router));
};

export default async function apiServerUp(port: number) {
  return new Promise<void>((resolve) => {
    try {
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      setupRoutes();

      app.get("/ping", (req, res) => {
        res.send("Ping");
      });

      app.listen(port, () => {
        console.log(`Server running on ${port}`);
        resolve();
      });
    } catch (error) {
      throw error;
    }
  });
}
