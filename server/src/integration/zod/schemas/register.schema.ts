import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .regex(/^(?=(.*[a-z]){3,})$/, "Password requires 3 lowercase letters")
    .regex(/^(?=(.*[A-Z]){2,})$/, "Password requires 2 uppercase letters")
    .regex(/^(?=(.*[0-9]){2,})$/, "Password requires 2 number")
    .regex(
      /^(?=(.*[!@#$%^&*()\-__+.]){1,})$/,
      'Password requires 1 of these special characters "!@#$%^&*()-__+."'
    )
    .regex(/^.{8,}$/, "Password requires 8 or more characters"),
  firstName: z.string({
    required_error: "First name is required",
  }),
  middleName: z.string().optional(),
  surname: z.string({
    required_error: "Surname is required",
  }),
});

export type registerModel = z.infer<typeof registerSchema>;

export default registerSchema;
