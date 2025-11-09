import React, { useState } from "react";
import CourseForm from "./courseForm";
import CourseItem from "./courseItem";

export default function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", level: "Beginner", duration: 4 },
    { id: 2, title: "Advanced React", level: "Advanced", duration: 6 },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Create or Update
  const handleSave = (courseData) => {
    if (editingCourse) {
      // Update existing
      setCourses((prev) =>
        prev.map((c) => (c.id === editingCourse.id ? courseData : c))
      );
      setEditingCourse(null);
    } else {
      // Add new
      setCourses((prev) => [...prev, { ...courseData, id: Date.now() }]);
    }
    setShowForm(false);
  };

  // Delete
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // Edit
  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  // Cancel
  const handleCancel = () => {
    setEditingCourse(null);
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <CourseForm
          onSubmit={handleSave}
          onCancel={handleCancel}
          initialData={editingCourse}
        />
      ) : (
        <>
          <button
            onClick={() => setShowForm(true)}
            style={{ marginBottom: "10px" }}
          >
              Add Course
          </button>

          {courses.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            courses.map((course) => (
              <CourseItem
                key={course.id}
                course={course}
                onEdit={() => handleEdit(course)}
                onDelete={() => handleDelete(course.id)}
              />
            ))
          )}
        </>
      )}
    </div>
  );
}
