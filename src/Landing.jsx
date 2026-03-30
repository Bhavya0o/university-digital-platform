import { Link, useNavigate } from "react-router-dom";

import "./App.css"

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">University Digital Management System</h2>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a><br></br>
            <button 
              className="btn btn-small"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
        </div>
      
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart University Management System</h1>
          <p>
            Manage students, faculty, courses, attendance, exams, and reports —
            all from one powerful cloud platform.
          </p>

          <div className="button-group">
            <button 
              className="btn btn-primary"
              onClick={() => navigate("/Login")}
            >
              Get Started
            </button>

            <button className="btn btn-outline"
             onClick={() => navigate("/")}
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Student Management</h3>
            <p>Track admissions, attendance, grades, and performance analytics.</p>
          </div>

          <div className="feature-card">
            <h3>Faculty Dashboard</h3>
            <p>Upload assignments, manage lectures, and track student progress.</p>
          </div>

          <div className="feature-card">
            <h3>Admin Control</h3>
            <p>Generate reports, manage departments, and control user access.</p>
          </div>

          <div className="feature-card">
            <h3>Real-Time Analytics</h3>
            <p>Get insights with powerful dashboards and data visualization.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-box">
          <h2>250+</h2>
          <p>Universities</p>
        </div>
        <div className="stat-box">
          <h2>50K+</h2>
          <p>Students</p>
        </div>
        <div className="stat-box">
          <h2>5K+</h2>
          <p>Faculty Members</p>
        </div>
        <div className="stat-box">
          <h2>99.9%</h2>
          <p>System Uptime</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Digitize Your Institution?</h2>
        <p>Join leading universities using UniPortal today.</p>

        <button 
          className="btn btn-primary"
          onClick={() => navigate("/auth")}
        >
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 UniPortal. All rights reserved.</p><br></br>
       <Link><b>  Instagram</b></Link>  <br></br> <br></br><Link><b>Facebook</b></Link><br></br>
      </footer>
    </div>
  );
}

export default Landing;




