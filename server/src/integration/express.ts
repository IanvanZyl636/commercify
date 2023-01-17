import express from "express";
import accountApiEndpoints from "../api-endpoints/account/account";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default function apiServerUp(port: number) {
  accountApiEndpoints();

  app.get("/", (req, res) => {
    debugger;
    res.send("Pinsg");
  });

  app.listen(port, () => console.log(`Server running on ${port}`));
}
