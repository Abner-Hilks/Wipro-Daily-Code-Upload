import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

// Lazy-loaded components
const CourseDetails = React.lazy(() => import("./components/CourseDetails"));
const InstructorProfile = React.lazy(() =>
  import("./components/instructorProfile")
);

function App() {
  const [view, setView] = useState(null);

  return (
    <div
      className="container py-4"
      style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px" }}
    >
      <h2 className="mb-3 text-primary text-center">Lazy Loading Demo</h2>
      <p className="text-muted text-center">
        Loads the selected component.
      </p>

      <div className="text-center mb-3">
        <button className="btn btn-primary me-2" onClick={() => setView("course")}>
          View Course Details
        </button>
        <button className="btn btn-success" onClick={() => setView("instructor")}>
          View Instructor
        </button>
      </div>

      {/* Suspense fallback with Bootstrap spinner */}
      <Suspense
        fallback={
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="spinner-border text-primary" role="status"></div>
            <span className="mt-2 text-primary fw-semibold">
              Loading component...
            </span>
          </div>
        }
      >
        {view === "course" && <CourseDetails />}
        {view === "instructor" && <InstructorProfile />}
      </Suspense>
    </div>
  );
}

export default App;
