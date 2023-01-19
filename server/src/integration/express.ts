import express from "express";
import accountRouterInit from "../api-endpoints/account/account";

const app = express();

export default function apiServerUp(port: number) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  setupRoutes();

  app.listen(port, () => console.log(`Server running on ${port}`));
}

const setupRoutes = () => {
  app.use("/account", accountRouterInit());

  app.get("/ping", (req, res) => {
    debugger;
    res.send("Ping");
  });
};
