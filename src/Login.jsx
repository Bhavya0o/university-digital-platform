// import React, { useState } from "react";
// import axios from "axios";


// function Login() {

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await axios.post("http://localhost:5000/login",{
//       email,
//       password
//     });

//     if(res.data.success){
//       alert("Login Successful");
//       window.location.href="/Home";
//     }else{
//       alert("Wrong username & password");
//     }
//   };

//   return (

//     <div className="auth-container">

//       <div className="auth-card">

//         <h2>Welcome Back</h2>
//         <p className="subtitle">Login to your account</p>

//         <form onSubmit={handleLogin}>

//           <div className="input-group">
//             <input
//               type="Email"
//               placeholder="Email"
//               onChange={(e)=>setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <input
//               type="Password"
//               placeholder="Password"
//               onChange={(e)=>setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button className="auth-btn">Login</button>

//           <p className="switch-text">
//             Don't have an account?
//             <a href="/register"> Register</a>
//           </p>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default Login;







import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/login", { email, password });
    
    // Save data to localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    
    alert("Login Successful!");
    navigate("/Home");
  }  catch (error) {
    // Check your terminal/command prompt to see what this prints!
    console.error("Login Error Details:", error); 

    res.status(500).json({
      message: "Login failed",
      error: error.message // Sending this to the frontend helps you debug faster
    });
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
              type="Password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button className="auth-btn">Login</button>

          <p className="switch-text">
            Don't have an account?
            <a href="/register"> Register</a>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;