import registerSchema from "@zod/schemas/register.schema";
import { Router } from "express";
import validateSchema from "@expressjs/middleware/zod-schema-validation.middleware";

export default function registerRoute(router: Router) {
  router.post("/register", validateSchema(registerSchema), (req, res) => {
    const registerSchemaResult = registerSchema.parse(req.body);

    const { middleName, email, password, firstName, surname } =
      registerSchemaResult;

    res.send(firstName);
  });
}
