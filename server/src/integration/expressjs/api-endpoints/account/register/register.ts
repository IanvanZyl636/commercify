import { Router } from "express";

export default function registerRoute(router: Router) {
  router.post("/register", (req, res) => {
    const { email, password } = req.body;

    res.send(email);
  });
}
