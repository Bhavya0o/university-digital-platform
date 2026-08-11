const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey";


// ======================================================
// Wait for MongoDB connection (handles serverless cold starts)
// ======================================================

const ensureMongoConnected = async (timeoutMs = 8000) => {
  if (mongoose.connection.readyState === 1) {
    return true;
  }

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(false);
    }, timeoutMs);

    mongoose.connection.once("connected", () => {
      clearTimeout(timer);
      resolve(true);
    });
  });
};


// ======================================================
// REGISTER
// ======================================================

router.post("/register", async (req, res) => {

  console.log("=================================");
  console.log("📝 REGISTER REQUEST");
  console.log("Body:", req.body);
  console.log("MongoDB state:", mongoose.connection.readyState);
  console.log("=================================");

  try {

    const { name, email, password, role } = req.body;

    // -----------------------------
    // Validate fields
    // -----------------------------

    if (!name || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      });

    }


    // -----------------------------
    // Clean email
    // -----------------------------

    const normalizedEmail = email.trim().toLowerCase();


    // -----------------------------
    // Check MongoDB (waits for cold-start connections)
    // -----------------------------

    const ready = await ensureMongoConnected();

    if (!ready) {

      console.log("❌ MongoDB is NOT connected");

      return res.status(503).json({
        success: false,
        message: "Database is not connected"
      });

    }


    // -----------------------------
    // Check if email already exists
    // -----------------------------

    console.log("🔍 Checking email:", normalizedEmail);

    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    console.log("🔍 Existing user:", existingUser);


    if (existingUser) {

      console.log("❌ Email already exists");

      return res.status(400).json({
        success: false,
        message: "User already exists"
      });

    }


    // -----------------------------
    // Hash password
    // -----------------------------

    const hashedPassword = await bcrypt.hash(password, 10);


    // -----------------------------
    // Create user
    // -----------------------------

    const newUser = new User({

      name: name.trim(),

      email: normalizedEmail,

      password: hashedPassword,

      role: role || "student"

    });


    // -----------------------------
    // Save user
    // -----------------------------

    const savedUser = await newUser.save();


    console.log("=================================");
    console.log("✅ USER SAVED TO MONGODB");
    console.log(savedUser);
    console.log("=================================");


    // -----------------------------
    // Response
    // -----------------------------

    return res.status(201).json({

      success: true,

      message: "User registered successfully",

      user: {

        id: savedUser._id,

        name: savedUser.name,

        email: savedUser.email,

        role: savedUser.role

      }

    });


  } catch (error) {

    console.error("❌ REGISTER ERROR:", error);

    return res.status(500).json({

      success: false,

      message: error.message || "Registration failed"

    });

  }

});


// ======================================================
// LOGIN
// ======================================================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const normalizedEmail = (email || "")
      .trim()
      .toLowerCase();


    // -----------------------------
    // Check MongoDB (waits for cold-start connections)
    // -----------------------------

    const ready = await ensureMongoConnected();

    if (!ready) {

      return res.status(503).json({
        success: false,
        message: "Database is not connected"
      });

    }


    // -----------------------------
    // Find user
    // -----------------------------

    const user = await User.findOne({
      email: normalizedEmail
    });


    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User not found"

      });

    }


    // -----------------------------
    // Check password
    // -----------------------------

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!isMatch) {

      return res.status(401).json({

        success: false,

        message: "Invalid password"

      });

    }


    // -----------------------------
    // Create JWT
    // -----------------------------

    const token = jwt.sign(

      {
        id: user._id,
        role: user.role
      },

      JWT_SECRET,

      {
        expiresIn: "1d"
      }

    );


    // -----------------------------
    // Response
    // -----------------------------

    return res.json({

      success: true,

      message: "Login successful",

      token,

      user: {

        id: user._id,

        name: user.name,

        email: user.email,

        role: user.role

      }

    });


  } catch (error) {

    console.error("❌ LOGIN ERROR:", error);

    return res.status(500).json({

      success: false,

      message: error.message || "Login failed"

    });

  }

});


module.exports = router;