import z from "zod";
export const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// export const SignUp = async (data: ISignup) => {
//   const { data: response, error } = await supabase.auth.signUp({
//     email: data.email,
//     password: data.password,
//     options: {
//       data: {
//         name: data.name,
//         emailRedirectTo: "http://localhost:5173/Auth/Login",
//       },
//     },
//   });

//   if (error) {
//     throw error;
//   }

//   return response;
// };

// export const Login = async (data: ILogin) => {
//   const { data: response, error } = await supabase.auth.signInWithPassword({
//     email: data.email,
//     password: data.password,
//   });

//   if (error) {
//     throw error;
//   }

//   return response;
// };

// export const Logout = async () => {
//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     throw error;
//   }
// };
