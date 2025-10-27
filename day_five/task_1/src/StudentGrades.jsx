import React, { useState } from "react";
import "./index.css";

const StudentGrades = () => {
  const students = [
    { name: "Chidi Okafor", subject: "Math", score: 75 },
    { name: "Amaka Johnson", subject: "Math", score: 45 },
    { name: "Tunde Adeyemi", subject: "Math", score: 88 },
    { name: "Bisi Olayemi", subject: "Math", score: 32 },
    { name: "Ngozi Nwosu", subject: "Math", score: 61 },
  ];

  const [filter, setFilter] = useState("all");

  // Function to compute grade based on score
  const getGrade = (score) => {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";
    return "F";
  };

  const filteredStudents = students.filter((student) => {
    if (filter === "passed") return student.score >= 50;
    if (filter === "failed") return student.score < 50;
    return true;
  });

  const total = students.length;
  const passed = students.filter((s) => s.score >= 50).length;
  const failed = total - passed;

  return (
    <div className="grade-container">
      <h2>📚 Student Grades</h2>

      
      <div className="button-group">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >

        </button>
        <button
          className={filter === "passed" ? "active pass" : "pass"}
          onClick={() => setFilter("passed")}
        >
          
        </button>
        <button
          className={filter === "failed" ? "active fail" : "fail"}
          onClick={() => setFilter("failed")}
        >
          
        </button>
      </div>

      {/* Student List */}
      <ul className="student-list">
        {filteredStudents.map((student, index) => {
          const grade = getGrade(student.score);
          return (
            <li key={index}>
              <div className="student-info">
                <span className="student-name">{student.name}</span>
                <span className="student-grade">Grade: {grade}</span>
              </div>
              <div className="student-details">
                <span>
                  {student.subject}: {student.score}
                </span>
                <span
                  className={student.score >= 50 ? "status pass" : "status fail"}
                >
                  {student.score >= 50 ? "✅ PASS" : "❌ FAIL"}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Summary */}
      <div className="summary">
        Total Students: {total} | Passed: {passed} | Failed: {failed}
      </div>
    </div>
  );
};

export default StudentGrades;
