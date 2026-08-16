import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Unable to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contactSection" id="contact">

      <div className="contactGlow glowLeft"></div>
      <div className="contactGlow glowRight"></div>

      <div className="contactContainer">

        {/* LEFT SIDE */}
        <div className="contactInfo">

          <div className="contactBadge">
            ✦ GET IN TOUCH
          </div>

          <h2>
            Let's build a
            <span> smarter university.</span>
          </h2>

          <p>
            Have questions about UniPortal? Want to see how it can
            transform your university? Send us a message and our team
            will get back to you.
          </p>

          <div className="contactDetails">

            <div className="contactItem">
              <div className="contactIcon">📧</div>

              <div>
                <small>Email us</small>
                <strong>hello@UdpPortal.com</strong>
              </div>
            </div>

            <div className="contactItem">
              <div className="contactIcon">📞</div>

              <div>
                <small>Call us</small>
                <strong>+91 98765 43***</strong>
              </div>
            </div>

            <div className="contactItem">
              <div className="contactIcon">📍</div>

              <div>
                <small>Visit us</small>
                <strong>Ahmedabad, Gujarat, India</strong>
              </div>
            </div>

          </div>

          <div className="contactTrust">
            <div className="trustAvatars">
              <span>👨🏻</span>
              <span>👩🏻</span>
              <span>👨🏽</span>
              <span>👩🏽</span>
            </div>

            <div>
              <strong>25,000+ students</strong>
              <p>Trust UniPortal worldwide</p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="contactCard">

          <div className="formHeader">
            <h3>Send us a message</h3>

            <p>
              Fill out the form and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="formRow">

              <div className="inputGroup">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Carter"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="inputGroup">
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="formRow">

              <div className="inputGroup">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="inputGroup">
                <label>University / Organization</label>

                <input
                  type="text"
                  name="university"
                  placeholder="Your University"
                  value={formData.university}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="inputGroup">

              <label>Subject *</label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">
                  General Inquiry
                </option>
                <option value="Demo Request">
                  Request a Demo
                </option>
                <option value="Pricing">
                  Pricing
                </option>
                <option value="Technical Support">
                  Technical Support
                </option>
                <option value="Partnership">
                  Partnership
                </option>
                <option value="Other">
                  Other
                </option>
              </select>

            </div>

            <div className="inputGroup">

              <label>Message *</label>

              <textarea
                name="message"
                placeholder="Tell us how we can help..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>

            <button
              className="sendButton"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="successMessage">
                ✓ Your message has been sent successfully!
              </div>
            )}

            {status && status !== "success" && (
              <div className="errorMessage">
                {status}
              </div>
            )}

            <p className="privacyText">
              🔒 Your information is secure and will never be shared.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;