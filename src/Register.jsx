import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Register button clicked");

    // Basic validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      console.log("Sending registration data:", {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role: role
      });

      const res = await axios.post(
        `${API_URL}/api/auth/register`,
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password,
          role: role
        }
      );

      console.log("Registration response:", res.data);

      if (res.data.success) {
        alert(res.data.message || "Registration successful");

        // Clear form
        setName("");
        setEmail("");
        setPassword("");
        setRole("student");

        // Go to login
        navigate("/login");
      } else {
        alert(res.data.message || "Registration failed");
      }

    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log("Backend response:", error.response.data);

        alert(
          error.response.data.message ||
          "Registration failed"
        );
      } else if (error.request) {
        alert("Cannot connect to backend server");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Register to get started
        </p>

        <form onSubmit={handleRegister}>

          {/* Name */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role */}
          <div className="input-group">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">
                Student
              </option>

              <option value="teacher">
                Teacher
              </option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="auth-btn"
          >
            Register
          </button>

          {/* Login */}
          <p className="switch-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;