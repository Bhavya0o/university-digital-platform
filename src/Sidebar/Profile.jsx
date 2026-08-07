import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Calendar,
  Briefcase,
  Phone,
  MapPin,
  Edit3,
  Save,
  Check,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
}

function Profile() {
  const navigate = useNavigate();
  const stored = useMemo(() => getStoredUser(), []);
  const role = stored?.role || "teacher";
  const isTeacher = role === "teacher";

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: stored?.name || "Guest User",
    email: stored?.email || "guest@uninexus.edu",
    title: isTeacher ? "Faculty Member" : "Undergraduate Student",
    department: isTeacher ? "Computer Science" : "Computer Science",
    phone: "",
    location: "Campus Main",
    bio: isTeacher
      ? "Helping students learn through clear lectures, practical labs, and timely feedback."
      : "Focused on coursework, campus life, and building strong academic habits.",
    joined: "March 2026",
  });

  const initials = form.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  const handleLogout = () => navigate("/");

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    const nextUser = {
      ...(stored || {}),
      id: stored?.id,
      name: form.name,
      email: form.email,
      role,
    };
    localStorage.setItem("user", JSON.stringify(nextUser));
    setEditing(false);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  const stats = isTeacher
    ? [
        { icon: BookOpen, label: "Courses", value: "6" },
        { icon: Users, label: "Students", value: "148" },
        { icon: GraduationCap, label: "Dept.", value: "CS" },
      ]
    : [
        { icon: BookOpen, label: "Courses", value: "5" },
        { icon: GraduationCap, label: "Credits", value: "62" },
        { icon: Users, label: "Clubs", value: "2" },
      ];

  return (
    <div className="dashboard">
      <header className="topbar">
        <h2 className="university">University Digital Platform</h2>
        <div className="user-info">
          <span>
            Welcome {isTeacher ? "Teacher 👩‍🏫" : "Student 🎓"}
          </span>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <h3 className="menu-title">Dashboard</h3>
          <ul className="menu">
            <li>
              <Link to={isTeacher ? "/Home" : "/StudentHome"}>
                🏠 <span className="text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Gen">
                ✨ <span className="text">AI-Assistant</span>
              </Link>
            </li>
            <li>
              <Link to="/My Courses">
                📚 <span className="text">My Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/Timetable">
                📅 <span className="text">Timetable</span>
              </Link>
            </li>
            <li>
              <Link to="/Announcements">
                📖 <span className="text">Announcements</span>
              </Link>
            </li>
            <li>
              <Link to="/Profile" className="settings-nav-active">
                👤 <span className="text">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/Settings">
                ⚙ <span className="text">Settings</span>
              </Link>
            </li>
            <button className="button-88" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </aside>

        <main className="content profile-page">
          <div className="settings-hero">
            <div>
              <p className="settings-eyebrow">Account</p>
              <h1 className="settings-title">Profile</h1>
              <p className="settings-subtitle">
                Your public UniNexus identity — keep details current for
                {isTeacher ? " students and colleagues." : " faculty and classmates."}
              </p>
            </div>
            <div className="profile-hero-actions">
              {!editing ? (
                <button
                  type="button"
                  className="settings-ghost-btn"
                  onClick={() => setEditing(true)}
                >
                  <Edit3 size={16} />
                  Edit profile
                </button>
              ) : (
                <button
                  type="button"
                  className="settings-ghost-btn"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              )}
              <button
                type="button"
                className={`settings-save ${saved ? "is-saved" : ""}`}
                onClick={handleSave}
                disabled={!editing && !saved}
              >
                {saved ? <Check size={18} /> : <Save size={18} />}
                {saved ? "Saved" : "Save changes"}
              </button>
            </div>
          </div>

          <section className="profile-banner">
            <div className="profile-banner__identity">
              <div className="profile-avatar" aria-hidden="true">
                {initials || "U"}
              </div>
              <div>
                <h2 className="profile-banner__name">{form.name}</h2>
                <p className="profile-banner__role">
                  <span className={`profile-role-pill ${role}`}>{role}</span>
                  <span>{form.title}</span>
                </p>
                <p className="profile-banner__meta">
                  <Mail size={15} />
                  {form.email}
                </p>
              </div>
            </div>

            <div className="profile-stats">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="profile-stat">
                  <Icon size={18} />
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="profile-grid">
            <section className="profile-panel">
              <header className="settings-section__head">
                <h2>Personal details</h2>
                <p>Information shown across the university platform.</p>
              </header>

              <div className="profile-fields">
                <label className="settings-input-block">
                  <span>Full name</span>
                  <input
                    type="text"
                    value={form.name}
                    disabled={!editing}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </label>

                <label className="settings-input-block">
                  <span>Email</span>
                  <input type="email" value={form.email} disabled />
                </label>

                <label className="settings-input-block">
                  <span>{isTeacher ? "Title" : "Program"}</span>
                  <input
                    type="text"
                    value={form.title}
                    disabled={!editing}
                    onChange={(e) => update("title", e.target.value)}
                  />
                </label>

                <label className="settings-input-block">
                  <span>Department</span>
                  <input
                    type="text"
                    value={form.department}
                    disabled={!editing}
                    onChange={(e) => update("department", e.target.value)}
                  />
                </label>

                <label className="settings-input-block">
                  <span>Phone</span>
                  <input
                    type="tel"
                    placeholder="Optional"
                    value={form.phone}
                    disabled={!editing}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>

                <label className="settings-input-block">
                  <span>Campus location</span>
                  <input
                    type="text"
                    value={form.location}
                    disabled={!editing}
                    onChange={(e) => update("location", e.target.value)}
                  />
                </label>
              </div>

              <label className="settings-input-block">
                <span>Bio</span>
                <textarea
                  rows={4}
                  value={form.bio}
                  disabled={!editing}
                  onChange={(e) => update("bio", e.target.value)}
                />
              </label>
            </section>

            <aside className="profile-side">
              <section className="profile-panel profile-panel--compact">
                <header className="settings-section__head">
                  <h2>Quick info</h2>
                  <p>At-a-glance account facts.</p>
                </header>

                <ul className="profile-info-list">
                  <li>
                    <Briefcase size={17} />
                    <div>
                      <span>Department</span>
                      <strong>{form.department}</strong>
                    </div>
                  </li>
                  <li>
                    <MapPin size={17} />
                    <div>
                      <span>Location</span>
                      <strong>{form.location}</strong>
                    </div>
                  </li>
                  <li>
                    <Phone size={17} />
                    <div>
                      <span>Phone</span>
                      <strong>{form.phone || "Not set"}</strong>
                    </div>
                  </li>
                  <li>
                    <Calendar size={17} />
                    <div>
                      <span>Joined</span>
                      <strong>{form.joined}</strong>
                    </div>
                  </li>
                </ul>
              </section>

              <section className="profile-panel profile-panel--compact profile-tip">
                <h3>Tip</h3>
                <p>
                  {isTeacher
                    ? "A clear title and department help students find the right instructor faster."
                    : "Keep your program and bio updated so advisors can support you better."}
                </p>
                <Link to="/Settings" className="profile-tip-link">
                  Open settings →
                </Link>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
