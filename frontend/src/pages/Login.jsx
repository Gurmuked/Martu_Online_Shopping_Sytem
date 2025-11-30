import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Logging in...');
    // preserve current inputs so we can clear them immediately
    const usernameToSend = loginUsername;
    const passwordToSend = loginPassword;
    setLoginUsername("");
    setLoginPassword("");
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameToSend, password: passwordToSend }),
      });
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        // Save token and user to localStorage
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        // already cleared, but ensure blank
        setLoginUsername("");
        setLoginPassword("");
        // redirect after login depending on user type
        let userType = data.user?.user_type || '';
        userType = userType.toLowerCase();
        if (userType === 'farmer') {
          navigate('/seller-dashboard');
         } 
         else if(userType === 'trader') {
          navigate('/buyer-dashboard');
        } 
        else{
          navigate('/admin-dashboard');
        }
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setMessage('Login failed. Try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center pt-16 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed font-[Poppins]" style={{ backgroundImage: "url('.././src/assets/bg.jpg')" }}>
      <div className="w-[420px] text-white border border-gray-400 shadow-md backdrop-blur-sm rounded-xl p-10">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl text-center font-semibold mb-4 py-2">LOGIN</h1>

          <div className="relative w-full h-[50px] mb-4">
            <input
              type="text"
              placeholder="Username"
              required
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
            />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
          </div>

          <div className="relative w-full h-[50px] mb-4">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full px-5 pr-11 text-white placeholder-white text-base"
            />
            <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-lg" />
          </div>

          <div className="flex justify-between text-sm mb-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-white" /> Remember Me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          {message && (
            <p className="text-center text-sm mb-2">{message}</p>
          )}
          <button type="submit" disabled={loading} className={`w-full h-[40px] bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition ${loading ? 'opacity-60' : ''}`}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-sm text-center mt-4">
            <p>
              Don’t have an account?{" "}
              <Link to="/register" className="ml-2 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
