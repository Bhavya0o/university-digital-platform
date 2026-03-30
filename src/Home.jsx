import React from "react";
import { useNavigate, Link } from "react-router-dom";
import image from "../src/assets/image.png";

function Home({ announcements, schedule }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard">
      <header className="topbar">
        <h2 className="university">University Digital Platform</h2>
        <div className="user-info">
          <span>Welcome Student</span>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <h3 className="menu-title">Dashboard</h3>
          <ul className="menu">
            {/* Ensure these paths match your App.js Route paths exactly */}
            <li><Link to="/Home">🏠 <span className="text">Home</span></Link></li>

            <li><Link to="/Gen">✨ <span className="text">AI-Assistant</span></Link></li>
            <li><Link to="/My Courses">📚 <span className="text">My Courses</span></Link></li>
            {/* <li><Link to="/Assistant">📝 <span className="text">Assistant</span></Link></li> */}
            <li><Link to="/Timetable">📅 <span className="text">Timetable</span></Link></li>
            <li><Link to="/Announcements">📖 <span className="text">Announcements</span></Link></li>
            <li><Link to="/Profile">👤 <span className="text">Profile</span></Link></li>
            <li><Link to="/Settings">⚙ <span className="text">Settings</span></Link></li>

            {/* <li><Link to="/Gen">✨ <span className="text">AI-Assistant</span></Link></li> */}

            <button className="button-88" onClick={handleLogout}>
              Logout
            </button>




          </ul>
        </aside>

        <main className="content">
          <div className="header-row">
            <div className="header-text">
              <h2>Student Dashboard</h2>
              <p>Stay updated with your academic journey at UniNexus.</p>
            </div>
            <div className="button-group">
              <button className="btn secondary" onClick={() => navigate("/Timetable")}>📅 Full Schedule</button>
              <button className="btn primary">📈 Academic Progress</button>
            </div>
          </div>

          <div
            className="announcements"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button className="button-10">Featured</button>
            <br />
            <h3 className="new">New Sustainability Center Opening</h3>
            <br />
            <b className="new">
              Join us this Wednesday at 2 PM for the grand opening ceremony of
              our zero-emission <br /> research hub.
            </b>
          </div>

          <div className="cards">
            <div className="card" onClick={() => navigate("/My Courses")}>
              <h3>📚 My Courses</h3>
              <p>View enrolled courses and materials</p>
            </div>
            <div className="card">
              <h3>📝 Results</h3>
              <p>Check semester results</p>
            </div>
            <div className="card" onClick={() => navigate("/Timetable")}>
              <h3>📅 Timetable</h3>
              <p>See your class schedule</p>
            </div>
            <div className="card">
              <h3>📖 Digital Library</h3>
              <p>Access eBooks and research papers</p>
            </div>
          </div>

          <br />

          {/* Announcements Section */}
          <div className="announcement-header">
            <h2>🔔 Latest Announcements</h2>
            <button className="view-btn" onClick={() => navigate("/Announcements")}>View All</button>
          </div>
{/* 
          <div className="announcements">
            <div className="An">Academic</div>
            <h3>Spring Registration Open</h3>
            <p>Enrollment for the Spring 2024 semester is now open for all senior students.</p>
          </div> */}

          {announcements && announcements.map((item) => (
            <div key={item.id} className="announcements">
              <div className="An">{item.category || "General"}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

          <br />

          {/* Dynamic Timetable Section */}
          <div className="announcement-header">
            <h2>📅 Today's Classes</h2>
            <button className="view-btn" onClick={() => navigate("/Timetable")}>View All</button>
          </div>

          <div className="announcements">
            {/* This maps the data you added in image_efbd4a.png to the home screen */}
            {schedule && schedule.length > 0 ? (
              schedule.map((cls, index) => (
                <div key={cls.id}>
                   <div style={{ marginBottom: "10px" }}>
                    <div className="An">{cls.code}</div>
                    <h3 style={{ margin: "5px 0" }}>{cls.name}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>
                      Time: <strong>{cls.time}</strong> | Day: {cls.day}
                    </p>
                  </div>
                  {index !== schedule.length - 1 && <hr />}
                </div>
              ))
            ) : (
              // This is the fallback you see in image_efbd88.png
              <>
                <div className="An">CS101</div>
                <p>Intr. to Computer Science</p>
                <hr />
                <div className="An">MATH201</div>
                <p>Calculus II - Intr. to Mathematics</p>
                <hr />
                <div className="An">Civics</div>
                <p>Intro. to Civics</p>
              </>
            )}
          </div>
          <br />
        </main>
      </div>
    </div>
  );
}

export default Home;