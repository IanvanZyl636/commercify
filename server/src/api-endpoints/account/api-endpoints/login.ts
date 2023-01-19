import { Router } from "express";

export default function loginApiEndPoints(router: Router) {
  router.get("/login", (req, res) => {
    res.send("login");
  });
}
