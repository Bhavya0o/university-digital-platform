import React from "react";
import { useNavigate, Link } from "react-router-dom";

function StudentHome({ announcements, schedule }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (

    <div className="dashboard student-dashboard">

      <header className="topbar">
        <h2 className="university">University Digital Platform</h2>

        <div className="user-info">
          <span>Welcome Student 🎓</span>
        </div>
      </header>

      <div className="main-container">

        {/* Sidebar */}

        <aside className="sidebar">

          <h3 className="menu-title">Student Panel</h3>

          <ul className="menu">

            <li><Link to="/student-home">🏠 <span className="text">Home</span></Link></li>

            <li><Link to="/courses">📚 <span className="text">My Courses</span></Link></li>

            <li><Link to="/results">📊 <span className="text">Results</span></Link></li>

            <li><Link to="/assignments">📝 <span className="text">Assignments</span></Link></li>

            <li><Link to="/timetable">📅 <span className="text">Timetable</span></Link></li>

            <li><Link to="/library">📖 <span className="text">Digital Library</span></Link></li>

            <li><Link to="/profile">👤 <span className="text">Profile</span></Link></li>

            <li><Link to="/settings">⚙ <span className="text">Settings</span></Link></li>

            <button className="button-88" onClick={handleLogout}>
              Logout
            </button>

          </ul>

        </aside>

        {/* Main Content */}

        <main className="content">

          <div className="header-row">

            <div className="header-text">
              <h2>Student Dashboard</h2>
              <p>Track your courses, assignments and academic progress.</p>
            </div>

            <div className="button-group">

              <button
                className="btn secondary"
                onClick={() => navigate("/timetable")}
              >
                📅 Full Schedule
              </button>

              <button className="btn primary">
                📈 Academic Progress
              </button>

            </div>

          </div>

          {/* Featured Section */}

          <div className="announcements">

            <button className="button-10">Featured</button>

            <br />

            <h3 className="new">University Innovation Week</h3>

            <br />

            <b className="new">
              Join workshops, tech talks and competitions during
              Innovation Week starting Monday!
            </b>

          </div>

          {/* Dashboard Cards */}

          <div className="cards">

            <div className="card" onClick={() => navigate("/courses")}>
              <h3>📚 My Courses</h3>
              <p>View enrolled subjects and materials</p>
            </div>

            <div className="card" onClick={() => navigate("/results")}>
              <h3>📊 Results</h3>
              <p>Check semester results</p>
            </div>

            <div className="card" onClick={() => navigate("/assignments")}>
              <h3>📝 Assignments</h3>
              <p>View and submit assignments</p>
            </div>

            <div className="card" onClick={() => navigate("/library")}>
              <h3>📖 Digital Library</h3>
              <p>Access ebooks and study materials</p>
            </div>

          </div>

          <br />

          {/* Announcements */}

          <div className="announcement-header">

            <h2>🔔 Latest Announcements</h2>

            <button
              className="view-btn"
              onClick={() => navigate("/announcements")}
            >
              View All
            </button>

          </div>

          {announcements && announcements.map((item) => (

            <div key={item.id} className="announcements">

              <div className="An">{item.category || "General"}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

          <br />

          {/* Today's Classes */}

          <div className="announcement-header">

            <h2>📅 Today's Classes</h2>

            <button
              className="view-btn"
              onClick={() => navigate("/timetable")}
            >
              View All
            </button>

          </div>

          <div className="announcements">

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

              <>
                <div className="An">CS101</div>
                <p>Introduction to Computer Science</p>
                <hr />

                <div className="An">MATH201</div>
                <p>Calculus II</p>
                <hr />

                <div className="An">ENG101</div>
                <p>English Communication</p>
              </>

            )}

          </div>

        </main>

      </div>

    </div>

  );

}

export default StudentHome;