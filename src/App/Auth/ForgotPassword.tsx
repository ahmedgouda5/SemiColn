import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/Features/auth/services";
import type { IForgotPassword } from "@/Features/auth/type";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register,handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data:IForgotPassword ) => {
    console.log(data);
  };
  return (
    <>
      <section className="flex-1 flex flex-col bg-white h-screen items-center justify-center ">
        <header className="flex justify-end md:hidden p-6">
          <button
            onClick={() => navigate("/Auth/Signup")}
            className="px-8 py-2.5 border-2 border-[#4A5FE8] text-[#4A5FE8] rounded-lg font-semibold bg-white hover:bg-[#4A5FE8] hover:text-white transition-colors"
          >
            Create Account
          </button>
        </header>

        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password
            </h1>
            <p className="text-gray-500 mb-8">
              We are sorry to hear that happen. Don’t be sad we could help you
              get back to productivity in no time.
            </p>

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
                placeholder="ahmed@gmail.com"
                className="w-full px-4 py-3 border border-primary-Blue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754DB] focus:border-transparent"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <button
              type="submit"
              className="w-fit bg-primary-Blue text-white py-3.5 px-10 rounded-lg font-semibold hover:bg-[#3754DB] transition-colors shadow-lg shadow-blue-500/30"
            >
              Next{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
