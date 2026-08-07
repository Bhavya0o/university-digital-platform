import React from "react";

function Results() {
  const results = [
    { course: "CS101", grade: "A", status: "Passed" },
    { course: "MATH201", grade: "B+", status: "Passed" },
    { course: "ENG101", grade: "A-", status: "Passed" },
  ];

  return (
    <div className="results-page">
      <h1>Results</h1>
      <p>Review your latest semester grades and academic performance.</p>
      <table className="results-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.grade}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
