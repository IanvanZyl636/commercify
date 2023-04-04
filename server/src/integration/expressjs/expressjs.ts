import express, { ErrorRequestHandler } from "express";
import accountRouterInit from "./api-endpoints/account/account";
import { RouterModel } from "../../common/models/router.model";

const app = express();

const routers: RouterModel[] = [accountRouterInit()];

const setupRoutes = () => {
  routers.forEach((router) => app.use(router.path, router.router));
};

const errorLogger: ErrorRequestHandler<any> = (error, request, response, next) => {
  console.error(`error ${error.message}`);

  response.header("Content-Type", "application/json");
  const status = error.statusCode || 400;
  response.status(status).send("Something Broke!");
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

      app.use(errorLogger);
    } catch (error) {
      throw error;
    }
  });
}
