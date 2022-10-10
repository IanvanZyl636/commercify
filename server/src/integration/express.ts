import express from "express";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default function apiServerUp(port: number) {
  app.get("/", (req, res) => {
    debugger;
    res.send("Pinsg");
  });

  app.listen(port, () => console.log(`Server running on ${port}`));
}
