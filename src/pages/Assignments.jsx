import React from "react";

function Assignments() {
  const assignments = [
    { title: "Project Proposal", course: "CS101", due: "2026-08-10" },
    { title: "Problem Set 4", course: "MATH201", due: "2026-08-12" },
    { title: "Research Summary", course: "ENG101", due: "2026-08-15" },
  ];

  return (
    <div className="assignments-page">
      <h1>Assignments</h1>
      <p>Keep track of your upcoming coursework and deadlines.</p>
      <ul className="assignment-list">
        {assignments.map((item, index) => (
          <li key={index} className="assignment-card">
            <h3>{item.title}</h3>
            <p>{item.course}</p>
            <span>Due: {item.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
