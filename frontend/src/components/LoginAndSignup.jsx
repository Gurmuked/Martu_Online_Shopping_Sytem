import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => setAction("active");
  const loginLink = () => setAction("");

  return (
    <div
      className="flex justify-center items-center pt-16 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed font-[Poppins]"
      style={{ backgroundImage: "url('.././src/assets/bg.jpg')" }} // 👈 adjust path if needed
    >
      <div
        className={`relative flex items-center w-[420px] text-white border border-gray-400 shadow-md backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-200 ease-in-out ${
          action === "active" ? "h-[350px]" : "h-[350px]"
        }`}
      >
        {/* LOGIN FORM */}
        <div
          className={`w-full px-10 absolute transition-transform duration-200 ease-in-out ${
            action === "active" ? "-translate-x-[400px]" : "translate-x-0"
          }`}
        >
          <form>
            <h1 className="text-3xl text-center font-semibold mb-4 py-2">LOGIN</h1>

            <div className="relative w-full h-[50px] mb-4">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

            <div className="relative w-full h-[50px] mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

            <div className="flex justify-between text-sm mb-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-white" /> Remember Me
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-[35px] bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Login
            </button>

            <div className="text-sm text-center mt-4">
              <p>
                Don’t have an account?
                <a
                  href="#"
                  onClick={registerLink}
                  className="ml-2 font-semibold hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* REGISTER FORM */}
        <div
          className={`w-full p-10 absolute transition-transform duration-200 ease-in-out ${
            action === "active"
              ? "translate-x-0"
              : "translate-x-[400px] pointer-events-none"
          }`}
        >
          <form>
            <h1 className="text-3xl text-center font-semibold mb-2 py-2">
              REGISTER
            </h1>

            <div className="relative w-full h-[50px] mb-4">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

            <div className="relative w-full h-[50px] mb-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <MdEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

            <div className="relative w-full h-[50px] mb-2">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

            <div className="relative w-full h-[50px] mb-2">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
            </div>

              <Selection className="relative w-full h-[50px] mb-2">
                <option value="Framer">Framer</option>
                <option value="Trader">Trader</option>
              </Selection>
            

            <div className="flex justify-between text-sm mb-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-white" /> Agree Terms &
                Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[35px] bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Register
            </button>

            <div className="text-sm text-center mt-4 mb-4">
              <p>
                Already have an account?
                <a
                  href="#"
                  onClick={loginLink}
                  className="ml-2 font-semibold hover:underline"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
