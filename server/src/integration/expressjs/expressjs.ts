import express from "express";
import accountRouterInit from "./api-endpoints/account/account";
import { RouterModel } from "../../common/models/router.model";
import errorLogger from "./middleware/error-logger.middleware";
import rootRouterInit from "./api-endpoints/root";

const routers: RouterModel[] = [rootRouterInit(), accountRouterInit()];

export default async function apiServerUp(port: number) {
  return new Promise<void>((resolve, reject) => {
    try {
      const app = express();

      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      routers.forEach((router) => app.use(router.path, router.router));

      app.use(errorLogger);

      app.listen(port, () => {
        console.log(`Server running on ${port}`);
        resolve();
      });
    } catch (error) {
      reject();
      throw error;
    }
  });
}
