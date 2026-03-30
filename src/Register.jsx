import React, { useState } from "react";
import axios from "axios";


function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/register", {
      name,
      email,
      password
    });
    alert(res.data.message);
    // Optional: redirect to login after success
    // navigate("/Login"); 
  } catch (error) {
    // This will alert "User already exists" or whatever the backend sends
    alert(error.response?.data?.message || "Registration failed");
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

<button className="auth-btn">Register</button>

<p className="switch-text">
Already have an account?
<a href="/Login"> Login</a>
</p>

</form>

</div>

</div>

)

}

export default Register;




