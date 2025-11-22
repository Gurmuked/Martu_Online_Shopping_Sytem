import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regUserType, setRegUserType] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regUsername,
          email: regEmail,
          password: regPassword,
          confirm_password: regConfirmPassword,
          user_type: regUserType,
        }),
      });
      const data = await res.json();
      alert(data.message);
      if (res.ok) {
        setRegUsername("");
        setRegEmail("");
        setRegPassword("");
        setRegConfirmPassword("");
        setRegUserType("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center pt-16 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed font-[Poppins]" style={{ backgroundImage: "url('.././src/assets/bg.jpg')" }}>
      <div className="w-[420px] text-white border border-gray-400 shadow-md backdrop-blur-sm rounded-xl p-10">
        <form onSubmit={handleRegister}>
          <h1 className="text-3xl text-center font-semibold mb-2 py-2">REGISTER</h1>

          <div className="relative w-full h-[50px] mb-4">
            <input type="text" placeholder="Username" required value={regUsername} onChange={(e) => setRegUsername(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"/>
            <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-lg"/>
          </div>

          <div className="relative w-full h-[50px] mb-4">
            <input type="email" placeholder="Email" required value={regEmail} onChange={(e) => setRegEmail(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"/>
            <MdEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-lg"/>
          </div>

          <div className="relative w-full h-[50px] mb-2">
            <input type="password" placeholder="Password" required value={regPassword} onChange={(e) => setRegPassword(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"/>
            <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg"/>
          </div>

          <div className="relative w-full h-[50px] mb-2">
            <input type="password" placeholder="Confirm Password" required value={regConfirmPassword} onChange={(e) => setRegConfirmPassword(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"/>
            <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg"/>
          </div>

          <div className="relative w-full h-[50px] mb-2">
            <select required value={regUserType} onChange={(e) => setRegUserType(e.target.value)}
              className="w-full h-full bg-black/20 outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white text-base">
              <option value="" disabled className="text-black">Select User Type</option>
              <option value="Farmer" className="text-black">Farmer</option>
              <option value="Trader" className="text-black">Trader</option>
            </select>
          </div>

          <button type="submit" className="w-full h-[40px] bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition">
            Register
          </button>

          <div className="text-sm text-center mt-4 mb-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="ml-2 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
