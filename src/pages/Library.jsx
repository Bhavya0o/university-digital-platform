import React from "react";

function Library() {
  const resources = [
    { title: "Data Structures Handbook", type: "eBook" },
    { title: "Calculus II Reader", type: "PDF" },
    { title: "Academic Writing Guide", type: "Article" },
  ];

  return (
    <div className="library-page">
      <h1>Digital Library</h1>
      <p>Access textbooks, reference guides, and learning resources.</p>
      <div className="library-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
