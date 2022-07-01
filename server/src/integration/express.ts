import express from "express";

export const app = express();

export default function apiServerUp(port: number) {
  app.get("/", (req, res) => {
    res.send("Message from server3");
  });

  app.listen(port, () => console.log(`Server running on ${port}`));
}
