const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      university,
      subject,
      message,
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `UniPortal Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

          <div style="
            background: linear-gradient(135deg, #172554, #4c1d95);
            padding: 30px;
            color: white;
            border-radius: 12px 12px 0 0;
          ">
            <h1 style="margin: 0;">
              🎓 UniPortal
            </h1>

            <p style="opacity: 0.8;">
              New contact form submission
            </p>
          </div>

          <div style="
            padding: 30px;
            background: #f8f9ff;
          ">

            <h2>Contact Details</h2>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>

            <p>
              <strong>University:</strong>
              ${university || "Not provided"}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <hr />

            <h3>Message</h3>

            <p style="
              line-height: 1.7;
              color: #444;
            ">
              ${message}
            </p>

          </div>

        </div>
      `,
    });

    res.status(200).json({
      message: "Message sent successfully!",
    });

  } catch (error) {

    console.error("Email error:", error);

    res.status(500).json({
      message: "Failed to send message.",
    });
  }
});

module.exports = router;