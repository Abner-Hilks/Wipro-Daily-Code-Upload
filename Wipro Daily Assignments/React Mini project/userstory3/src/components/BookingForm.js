// booking form component
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useBookingSubmit from "../hooks/useBookingSubmit";
import { useLocation } from "react-router-dom";

function BookingForm() {
  const [packages, setPackages] = useState([]);

  // popup state
  const [showPopup, setShowPopup] = useState(false);

  // corrected: hook returns a function directly
  const submitBooking = useBookingSubmit();

  const location = useLocation();
  const selectedPackageFromURL =
    new URLSearchParams(location.search).get("package") || "";

  // load packages
  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((res) => setPackages(res.data))
      .catch((err) => console.log("Error loading packages:", err));
  }, []);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Enter valid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    travelers: Yup.number().required("Select number of travelers"),
    package: Yup.string().required("Select a package"),
  });

  return (
    <div className="page-bg booking-bg">
      <div className="container my-5 text-white">

        {/* Success Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">Booking Successful!</div>
          </div>
        )}

        <h3 className="text-center mb-4">Book Your Package</h3>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            travelers: 1,
            package: selectedPackageFromURL,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm, setStatus }) => {
            const success = await submitBooking(values, resetForm, setStatus);

            if (success) {
              setShowPopup(true);

              // Hide message after 2 seconds
              setTimeout(() => {
                setShowPopup(false);
              }, 2000);
            }
          }}
        >
          {({ status }) => (
            <Form className="mx-auto bg-dark p-4 rounded shadow" style={{ maxWidth: "500px", opacity: 0.95 }}>

              <label>Full Name</label>
              <Field name="fullName" className="form-control mb-2" />
              <ErrorMessage name="fullName" component="div" className="text-warning small" />

              <label>Email</label>
              <Field name="email" className="form-control mb-2" />
              <ErrorMessage name="email" component="div" className="text-warning small" />

              <label>Phone</label>
              <Field name="phone" className="form-control mb-2" />
              <ErrorMessage name="phone" component="div" className="text-warning small" />

              <label>Number of Travelers</label>
              <Field as="select" name="travelers" className="form-select mb-2">
                {[...Array(10).keys()].map((n) => (
                  <option value={n + 1} key={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </Field>

              <label>Select Package</label>
              <Field as="select" name="package" className="form-select mb-1">
                <option value="">Select a package</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.title}>
                    {pkg.title} – {pkg.price} – {pkg.duration}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="package" component="div" className="text-warning small" />

              {/* Success/error message */}
              {status?.success && (
                <div className="text-success small mt-2">{status.success}</div>
              )}
              {status?.error && (
                <div className="text-danger small mt-2">{status.error}</div>
              )}

              <button type="submit" className="btn btn-primary mt-3 w-100">
                Submit Booking
              </button>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
}

export default BookingForm;
