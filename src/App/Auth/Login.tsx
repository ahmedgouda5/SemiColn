import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ILogin } from "@/Features/auth/type";
import { login } from "@/Features/auth/services";
import { LoginSchema } from "@/lib/Schema/AuthSchema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (data: ILogin) => {
    try {
      setIsPending(true);
      setErrorMessage(null);
      await login(data);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong while logging you in.");
      }
    } finally {
      setIsPending(false);
    }
  };
  return (
    <main className="p-2 grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      <section className="flex-1 flex flex-col bg-white h-full">
         <header className="flex justify-end md:hidden p-6">
          <button
            onClick={() => navigate("/Auth/Signup")}
            className="px-8 py-2.5 border-2 border-[#4A5FE8] text-[#4A5FE8] rounded-lg font-semibold bg-white hover:bg-[#4A5FE8] hover:text-white transition-colors"
          >
            Sign up
          </button>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
          <form onSubmit={handleSubmit(onsubmit)} className="w-full max-w-md" noValidate>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>

            {errorMessage && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="emmanuelbamidele@gmail.com"
                className="w-full px-4 py-3 border border-[#4A5FE8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent"
                required
                disabled={isPending}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Create A Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                  placeholder="• • • • • • •"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent"
                  required
                  disabled={isPending}
                  
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Use 8+ characters with uppercase, symbols and numbers
              </p>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full  bg-[#4A5FE8] text-white py-3.5 rounded-lg font-semibold hover:bg-[#3B4DD4] transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
          </form>

          <Link to="/Auth/ForgotPassword" className="mt-4 text-[#4A5FE8] ">
            Forgot Password?
          </Link>
        </div>
      </section>
      <section className="h-full relative hidden md:flex">
        <img
          src="/src/assets/images/FrameAuth.png"
          alt=""
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
        />
         <header className="md:flex justify-start hidden   absolute top-7 left-[75%]  w-full">
          <button
            onClick={() => navigate("/Auth/Signup")}
            className="px-8 py-2.5 border-2 border-[#4A5FE8] text-[#4A5FE8] rounded-lg font-semibold bg-white hover:bg-[#4A5FE8] hover:text-white transition-colors"
          >
            Sign up
          </button>
        </header>
      </section>
     
    </main>
  );
};

export default Login;
