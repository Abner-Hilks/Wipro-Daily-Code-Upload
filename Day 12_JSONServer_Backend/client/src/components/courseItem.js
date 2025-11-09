import React from "react";

export default function CourseItem({ course, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "8px",
        borderRadius: "5px",
      }}
    >
      <strong>{course.title}</strong> — {course.level} ({course.duration} hrs)
      <div style={{ marginTop: "5px" }}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete} style={{ marginLeft: "8px" }}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
