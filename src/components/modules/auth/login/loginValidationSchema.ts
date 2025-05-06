import { z } from "zod";

export const loginValidationSchema = z.object({
  identifier: z.string({ required_error: "User Email or Phone is Required!" }),
  password: z
    .string({ required_error: "User Password is Required!" })
    .min(8, "Password Must be 8 Characters"),
});
