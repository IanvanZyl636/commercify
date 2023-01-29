import registerSchema from "@zod/schemas/register.schema";
import { Router } from "express";

export default function registerRoute(router: Router) {
  router.post("/register", (req, res) => {
    const account = registerSchema.parse(req.body);
    const err = "test";
    res.send(account);
  });
}
