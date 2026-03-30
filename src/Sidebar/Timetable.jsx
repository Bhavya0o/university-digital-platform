import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Timetable({ schedule, setSchedule }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("Monday");
  const navigate = useNavigate();

  const handleAddClass = () => {
    if (!code || !name || !time) return;

    const newClass = {
      id: Date.now(),
      code,
      name,
      time,
      day,
    };

    setSchedule([...schedule, newClass]);
    // Reset form
    setCode("");
    setName("");
    setTime("");
  };

  return (
    <div className="timetable-container">
      <div className="form-card">
        <h2 className="form-title">📅 Add New Class</h2>
        <div className="input-row">
          <input type="text" placeholder="Course Code (CS101)" value={code} onChange={(e) => setCode(e.target.value)} />
          <input type="text" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-row">
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>
        <button className="post-btn" onClick={handleAddClass}>Add to Schedule</button>
      </div>

      <div className="table-section">
        <h2 className="form-title">Weekly Schedule</h2>
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Code</th>
              <th>Course Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.id}>
                <td><strong>{item.day}</strong></td>
                <td><span className="An">{item.code}</span></td>
                <td>{item.name}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Timetable;