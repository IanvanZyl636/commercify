import express from "express";
import accountRouterInit from "../../api-endpoints/account/account";

const app = express();

export default async function apiServerUp(port: number) {
  return new Promise<void>((resolve) => {
    try {
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      setupRoutes();

      app.listen(port, () => {
        console.log(`Server running on ${port}`);
      });
    } catch (error) {
      throw error;
    }
  });
}

const setupRoutes = () => {
  app.use("/account", accountRouterInit());

  app.get("/ping", (req, res) => {
    debugger;
    res.send("Ping");
  });
};
