import { PasswordStrengthRegex } from "@common/regex/password-strength.regex";
import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email().max(30),
    password: z
      .string()
      .regex(
        new RegExp(PasswordStrengthRegex.lowerCaseCharacters),
        "Password requires atleast 1 lowercase letters"
      )
      .regex(
        new RegExp(PasswordStrengthRegex.upperCaseCharacters),
        "Password requires atleast 1 uppercase letters"
      )
      .regex(
        new RegExp(PasswordStrengthRegex.numberCharacters),
        "Password requires atleast 2 number"
      )
      .regex(
        new RegExp(PasswordStrengthRegex.specialCharacters),
        'Password requires 1 of these special characters "#$@!%&*?"'
      )
      .regex(
        new RegExp(PasswordStrengthRegex.limitAmountCharacter),
        "Password requires 8 or more characters"
      ),
    firstName: z.string().trim().min(2).max(30),
    middleName: z.string().trim().min(2).max(30).optional(),
    surname: z.string().trim().min(2).max(30),
  })
  .strict();

export type registerModel = z.infer<typeof registerSchema>;

export default registerSchema;
