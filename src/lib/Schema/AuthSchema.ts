import z from "zod";



export const ForgotPasswordSchema = z.object({
    email: z
      .string()
      .trim()
      .email("Invalid email address"),
  });
  
  export const LoginSchema = z.object({
    email: z
      .string()
      .trim()
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  });
  
  export const SignupSchema = z.object({
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters long"),
    email: z
      .string()
      .trim()
      .email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  });
  
  