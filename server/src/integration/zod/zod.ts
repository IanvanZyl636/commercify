import { z } from "zod";

export default function initializeZod() {
  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    switch (issue.code) {
      case z.ZodIssueCode.invalid_type:
      default:
        return { message: ctx.defaultError };
    }
  };

  z.setErrorMap(customErrorMap);
}
