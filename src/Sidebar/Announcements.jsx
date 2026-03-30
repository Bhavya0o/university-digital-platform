import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Announcements({ announcements, setAnnouncements }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Academic");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!title || !desc) return;

    const newAnnouncement = {
      id: Date.now(),
      category,
      title,
      desc,
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    navigate("/Home");
  };

  return (
    <div className="announcement-page-container">
      <div className="form-card">
        <h2 className="form-title">📢 Create New Announcement</h2>
        <p className="form-subtitle">Fill in the details to notify the students.</p>

        <div className="input-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Academic">Academic</option>
            <option value="Service">Service</option>
            <option value="Event">Event</option>
          </select>
        </div>

        <div className="input-group">
          <label>Announcement Title</label>
          <input
            type="text"
            placeholder="e.g. Final Exam Schedule"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Provide all the necessary details here..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button className="cancel-btn" onClick={() => navigate("/Home")}>Cancel</button>
          <button className="post-btn" onClick={handleAdd}>Post Announcement</button>
        </div>
      </div>
    </div>
  );
}

export default Announcements;