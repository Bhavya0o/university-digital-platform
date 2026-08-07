import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Mail,
  Smartphone,
  Moon,
  Globe,
  Shield,
  Lock,
  User,
  Save,
  Check,
} from "lucide-react";

const SECTIONS = [
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Moon },
  { id: "security", label: "Security", icon: Shield },
  { id: "account", label: "Account", icon: User },
];

function Settings() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("notifications");
  const [saved, setSaved] = useState(false);

  const [prefs, setPrefs] = useState({
    academicAlerts: true,
    campusNews: false,
    mobilePush: true,
    emailDigest: true,
    theme: "system",
    language: "en",
    compactMode: false,
    twoFactor: false,
    loginAlerts: true,
    displayName: "",
    timezone: "Asia/Kolkata",
  });

  const handleLogout = () => navigate("/");

  const toggle = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const update = (key, value) => {
    setPrefs((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="dashboard">
      <header className="topbar">
        <h2 className="university">University Digital Platform</h2>
        <div className="user-info">
          <span>Welcome Teacher 👩‍🏫 </span>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <h3 className="menu-title">Dashboard</h3>
          <ul className="menu">
            <li>
              <Link to="/Home">
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
              <Link to="/Profile">
                👤 <span className="text">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/Settings" className="settings-nav-active">
                ⚙ <span className="text">Settings</span>
              </Link>
            </li>
            <button className="button-88" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </aside>

        <main className="content settings-page">
          <div className="settings-hero">
            <div>
              <p className="settings-eyebrow">Preferences</p>
              <h1 className="settings-title">Settings</h1>
              <p className="settings-subtitle">
                Tune notifications, appearance, and account security for your
                UniNexus workspace.
              </p>
            </div>
            <button
              type="button"
              className={`settings-save ${saved ? "is-saved" : ""}`}
              onClick={handleSave}
            >
              {saved ? <Check size={18} /> : <Save size={18} />}
              {saved ? "Saved" : "Save changes"}
            </button>
          </div>

          <div className="settings-layout">
            <nav className="settings-rail" aria-label="Settings sections">
              {SECTIONS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`settings-rail__item ${
                    activeSection === id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveSection(id)}
                >
                  <Icon size={18} strokeWidth={2} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <div className="settings-panel">
              {activeSection === "notifications" && (
                <section className="settings-section">
                  <header className="settings-section__head">
                    <h2>Notification preferences</h2>
                    <p>Choose what reaches you and how.</p>
                  </header>

                  <ToggleRow
                    icon={<Bell size={18} />}
                    title="Academic alerts"
                    description="Course registration, grade postings, and deadline reminders."
                    checked={prefs.academicAlerts}
                    onChange={() => toggle("academicAlerts")}
                  />
                  <ToggleRow
                    icon={<Mail size={18} />}
                    title="Campus news & events"
                    description="University announcements, workshops, and campus updates."
                    checked={prefs.campusNews}
                    onChange={() => toggle("campusNews")}
                  />
                  <ToggleRow
                    icon={<Smartphone size={18} />}
                    title="Mobile push notifications"
                    description="Instant alerts on your phone for urgent academic updates."
                    checked={prefs.mobilePush}
                    onChange={() => toggle("mobilePush")}
                  />
                  <ToggleRow
                    icon={<Mail size={18} />}
                    title="Weekly email digest"
                    description="A Sunday summary of announcements and upcoming deadlines."
                    checked={prefs.emailDigest}
                    onChange={() => toggle("emailDigest")}
                  />
                </section>
              )}

              {activeSection === "appearance" && (
                <section className="settings-section">
                  <header className="settings-section__head">
                    <h2>Appearance</h2>
                    <p>Make the dashboard feel right for how you work.</p>
                  </header>

                  <div className="settings-field">
                    <div className="settings-field__copy">
                      <span className="settings-field__icon">
                        <Moon size={18} />
                      </span>
                      <div>
                        <h3>Theme</h3>
                        <p>Light, dark, or match your system preference.</p>
                      </div>
                    </div>
                    <select
                      className="settings-select"
                      value={prefs.theme}
                      onChange={(e) => update("theme", e.target.value)}
                    >
                      <option value="system">System</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>

                  <div className="settings-field">
                    <div className="settings-field__copy">
                      <span className="settings-field__icon">
                        <Globe size={18} />
                      </span>
                      <div>
                        <h3>Language</h3>
                        <p>Interface language across UniNexus.</p>
                      </div>
                    </div>
                    <select
                      className="settings-select"
                      value={prefs.language}
                      onChange={(e) => update("language", e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                    </select>
                  </div>

                  <ToggleRow
                    icon={<Moon size={18} />}
                    title="Compact density"
                    description="Tighter spacing for more content on screen."
                    checked={prefs.compactMode}
                    onChange={() => toggle("compactMode")}
                  />
                </section>
              )}

              {activeSection === "security" && (
                <section className="settings-section">
                  <header className="settings-section__head">
                    <h2>Security</h2>
                    <p>Keep your teaching account protected.</p>
                  </header>

                  <ToggleRow
                    icon={<Shield size={18} />}
                    title="Two-factor authentication"
                    description="Require a second step when signing in from a new device."
                    checked={prefs.twoFactor}
                    onChange={() => toggle("twoFactor")}
                  />
                  <ToggleRow
                    icon={<Lock size={18} />}
                    title="Login alerts"
                    description="Email me when someone signs in from an unrecognized browser."
                    checked={prefs.loginAlerts}
                    onChange={() => toggle("loginAlerts")}
                  />

                  <div className="settings-action-row">
                    <div>
                      <h3>Password</h3>
                      <p>Last changed recently. Use a unique passphrase.</p>
                    </div>
                    <button type="button" className="settings-ghost-btn">
                      Change password
                    </button>
                  </div>
                </section>
              )}

              {activeSection === "account" && (
                <section className="settings-section">
                  <header className="settings-section__head">
                    <h2>Account</h2>
                    <p>Basic profile details used across the platform.</p>
                  </header>

                  <label className="settings-input-block">
                    <span>Display name</span>
                    <input
                      type="text"
                      placeholder="How students see you"
                      value={prefs.displayName}
                      onChange={(e) => update("displayName", e.target.value)}
                    />
                  </label>

                  <label className="settings-input-block">
                    <span>Timezone</span>
                    <select
                      className="settings-select settings-select--full"
                      value={prefs.timezone}
                      onChange={(e) => update("timezone", e.target.value)}
                    >
                      <option value="Asia/Kolkata">India (IST)</option>
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">Eastern (ET)</option>
                      <option value="Europe/London">London (GMT)</option>
                    </select>
                  </label>

                  <div className="settings-danger">
                    <div>
                      <h3>Sign out everywhere</h3>
                      <p>End all active sessions on other devices.</p>
                    </div>
                    <button type="button" className="settings-danger-btn">
                      Sign out all
                    </button>
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ToggleRow({ icon, title, description, checked, onChange }) {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="settings-toggle-row">
      <div className="settings-toggle-row__copy">
        <span className="settings-field__icon">{icon}</span>
        <div>
          <label htmlFor={id}>{title}</label>
          <p>{description}</p>
        </div>
      </div>
      <label className="settings-switch">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="settings-switch__track" aria-hidden="true" />
      </label>
    </div>
  );
}

export default Settings;
