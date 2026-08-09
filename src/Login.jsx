import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./api";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
      });

      // Save token
      localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

   
// Redirect based on role
const role = res.data.user?.role || res.data.role;

if(role === "student"){
  navigate("/StudentHome");
}
else if(role === "teacher"){
  navigate("/Home");
}
else{
  navigate("/");
}

    } catch (error) {

      console.error("Login Error:", error);

      alert("Wrong email or password");

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button className="auth-btn">Login</button>

          <p className="switch-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;




