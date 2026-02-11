import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="p-2 grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      <section className="h-full hidden md:flex">
        <img
          src="/src/assets/images/FrameAuth.png"
          alt=""
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
        />
      </section>

      <section className="flex-1 flex flex-col bg-white h-full">
        <header className="flex justify-end p-6 ">
          <button
            onClick={() => navigate("/Auth/Login")}
            className="px-8 py-2.5 border-2 border-[#4A5FE8] text-[#4A5FE8] rounded-lg font-semibold hover:bg-[#4A5FE8] hover:text-white transition-colors"
          >
            Log in
          </button>
        </header>

        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <form className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create an Account
            </h1>
            <p className="text-gray-500 mb-8">It's Simple and Easy!!</p>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Fullname
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Emmanuel Adebisi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent"
                required
              />
            </div>

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
                name="email"
                placeholder="emmanuelbamidele@gmail.com"
                className="w-full px-4 py-3 border border-[#4A5FE8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
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
                  name="password"
                  placeholder="• • • • • • •"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent"
                  required
                />
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
              className="w-full bg-[#4A5FE8] text-white py-3.5 rounded-lg font-semibold hover:bg-[#3B4DD4] transition-colors shadow-lg shadow-blue-500/30"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
