import React, { useState, useEffect } from "react";

export default function CourseForm({ onSubmit, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    duration: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.level || !formData.duration) {
      alert("Please fill all fields!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h3>{initialData ? "Edit Course" : "Add New Course"}</h3>

      <label>Title:</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Course Title"
      />
      <br />

      <label>Level:</label>
      <input
        name="level"
        value={formData.level}
        onChange={handleChange}
        placeholder="Beginner / Intermediate / Advanced"
      />
      <br />

      <label>Duration (hrs):</label>
      <input
        name="duration"
        type="number"
        value={formData.duration}
        onChange={handleChange}
      />
      <br />

      <div style={{ marginTop: "10px" }}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
           Cancel
        </button>
      </div>
    </form>
  );
}
