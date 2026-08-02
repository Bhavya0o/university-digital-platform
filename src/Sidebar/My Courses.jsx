import React from "react";

function MyCourses() {
  const courses = [
    {
      title: "Introduction to Computer Science",
      code: "CS101",
      instructor: "Dr. Amina Cole",
      progress: 82,
      nextClass: "Tomorrow � 09:00 AM",
      badge: "In Progress",
    },
    {
      title: "Calculus II",
      code: "MATH201",
      instructor: "Prof. Daniel Reed",
      progress: 68,
      nextClass: "Wednesday � 11:30 AM",
      badge: "Trending",
    },
    {
      title: "Digital Communication",
      code: "COMM310",
      instructor: "Ms. Sara Malik",
      progress: 91,
      nextClass: "Friday � 02:00 PM",
      badge: "Excellent",
    },
  ];

  return (
    <div className="courses-page">
      <header className="courses-hero">
        <div>
          <p className="courses-eyebrow">Academic Overview</p>
          <h1>My Courses</h1>
          <p className="courses-description">
            Stay updated with your current classes, progress, and upcoming lessons.
          </p>
        </div>
        <div className="courses-summary-card">
          <p>Enrolled</p>
          <h2>3</h2>
          <span>Active this semester</span>
        </div>
      </header>

      <section className="courses-stats">
        <div className="stat-pill">
          <strong>82%</strong>
          <span>Average Progress</span>
        </div>
        <div className="stat-pill">
          <strong>2</strong>
          <span>Assignments Due</span>
        </div>
        <div className="stat-pill">
          <strong>3</strong>
          <span>Classes This Week</span>
        </div>
      </section>

      <section className="courses-grid">
        {courses.map((course, index) => (
          <article key={index} className="course-card">
            <div className="course-card__top">
              <span className="course-badge">{course.badge}</span>
              <span className="course-code">{course.code}</span>
            </div>
            <h3>{course.title}</h3>
            <p className="course-instructor">{course.instructor}</p>

            <div className="progress-row">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span>{course.progress}%</span>
            </div>

            <div className="course-meta">
              <p>Next: {course.nextClass}</p>
              <button className="course-btn">View Details</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default MyCourses;
