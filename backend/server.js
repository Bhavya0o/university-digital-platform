// const express = require("express");
// const cors = require("cors");
// // const mongoose = require("mongoose");
// const connectDB = require("./dbconfig");
// require("dotenv").config();

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const authRoutes = require("./routes/authRoutes");

// const app = express();
// process.env.MONGO_AVAILABLE = "false";

// /* =========================
//     Middleware
// ========================= */

// app.use(cors());
// app.use(express.json());

// /* =========================
//     Auth Routes
// ========================= */

// app.use("/api/auth", authRoutes);

// /* =========================
//     MongoDB Connection
// ========================= */

// // mongoose.connect(process.env.MONGO_URI, {
// //   serverSelectionTimeoutMS: 5000,
// //   connectTimeoutMS: 5000
// // })
// // .then(() => {
// //   process.env.MONGO_AVAILABLE = "true";
// //   console.log(" MongoDB Connected");
// // })
// // .catch((err) => {
// //   process.env.MONGO_AVAILABLE = "false";
// //   console.log(" MongoDB Error:", err.message || err);
// //   console.log(" Continuing without MongoDB. Auth requests will use offline fallback mode.");
// // });

// connectDB();




// /* =========================
//     Gemini AI Setup
// ========================= */

// let model = null;

// if (process.env.GEMINI_API_KEY) {
//   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//   model = genAI.getGenerativeModel({
//     model: "gemini-2.5-flash"
//   });
// } else {
//   console.log(" GEMINI API key not found. AI chat route will be unavailable.");
// }

// /* =========================
//     AI Chat API
// ========================= */

// app.post("/api/chat", async (req, res) => {

//   try {

//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json({
//         error: "Message is required"
//       });
//     }

//     if (!model) {
//       return res.status(503).json({
//         error: "AI service is not configured"
//       });
//     }

//     const result = await model.generateContent(message);
//     const response = await result.response;

//     const reply = response.text();

//     res.json({
//       reply
//     });

//   } catch (error) {

//     console.log("AI Error:", error);

//     res.status(500).json({
//       error: "AI failed to respond"
//     });

//   }

// });

// /* =========================
//     Test Route
// ========================= */

// app.get("/", (req, res) => {
//   res.send("🚀 Server running successfully");
// });

// /* =========================
//     Start Server
// ========================= */

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(` Server running on http://localhost:${PORT}`);
// });






const express = require("express");
const cors = require("cors");
const connectDB = require("./dbconfig");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const authRoutes = require("./routes/authRoutes");

const contactRoutes = require("./routes/Contact");

const app = express();
// process.env.MONGO_AVAILABLE = "false";

/* =========================
    Middleware
========================= */

app.use(cors());
app.use(express.json());

/* =========================
    MongoDB Connection
========================= */

connectDB();

/* =========================
    Auth Routes
========================= */

app.use("/api/auth", authRoutes);

app.use("/api/Contact", contactRoutes);


/* =========================
    Gemini AI Setup
========================= */

let model = null;

if (process.env.GEMINI_API_KEY) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
} else {
  console.log(" GEMINI API key not found. AI chat route will be unavailable.");
}

/* =========================
    AI Chat API
========================= */

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    if (!model) {
      return res.status(503).json({
        error: "AI service is not configured",
      });
    }

    const result = await model.generateContent(message);
    const response = await result.response;

    const reply = response.text();

    res.json({
      reply,
    });
  } catch (error) {
    console.log("AI Error:", error);

    res.status(500).json({
      error: "AI failed to respond",
    });
  }
});

/* =========================
    Test Route
========================= */

app.get("/", (req, res) => {
  res.send("🚀 Server running successfully");
});



console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL_PASSWORD exists:",
  !!process.env.EMAIL_PASSWORD
);
console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);


/* =========================
    Export & Start Server
========================= */

// Export app module for Vercel Serverless Execution
module.exports = app;

// Listen to port only when executed directly (local development)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
}