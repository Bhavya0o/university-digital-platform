import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate = useNavigate();
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("student");

const handleRegister = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
        role
      }
    );

    alert(res.data.message || "Registration successful");
    navigate("/login");
  } catch (error) {
    console.error("Registration Error:", error);
    const msg = error.response?.data?.message || error.message || "Registration failed";
    alert(msg);
  }

};

return(

<div className="auth-container">

<div className="auth-card">

<h2>Create Account</h2>
<p className="subtitle">Register to get started</p>

<form onSubmit={handleRegister}>

<div className="input-group">
<input
type="text"
placeholder="Full Name"
onChange={(e)=>setName(e.target.value)}
required
/>
</div>

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
type="Password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>
</div>

{/* Role Selection */}

<div className="input-group">
<select value={role} onChange={(e)=>setRole(e.target.value)}>

<option value="student">Student</option>
<option value="teacher">Teacher</option>

</select>
</div>

<button className="auth-btn">Register</button>

<p className="switch-text">
Already have an account?
<Link to="/login"> Login</Link>
</p>

</form>

</div>

</div>

)

}

export default Register;