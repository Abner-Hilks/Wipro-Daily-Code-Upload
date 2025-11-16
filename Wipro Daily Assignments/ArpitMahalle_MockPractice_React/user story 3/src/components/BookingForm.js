import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useBookingSubmit from "../hooks/useBookingSubmit";
import { motion } from "framer-motion";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(/^[0-9]{10}$/, "Enter a 10-digit phone number").required(),
  travelers: Yup.number().min(1, "At least 1 traveler").required(),
  packageId: Yup.string().required("Select a package"),
});

function BookingForm({ packages }) {
  const submitBooking = useBookingSubmit();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container my-4">
      <h3 className="text-center mb-3">Book Your Package</h3>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          travelers: 1,
          packageId: packages?.[0]?.id || "",
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm, setStatus }) =>
          submitBooking(values, resetForm, setStatus)
        }
      >
        {({ isSubmitting, status }) => (
          <Form className="mx-auto" style={{ maxWidth: 600 }}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Number of Travelers</label>
              <Field name="travelers" type="number" className="form-control" min="1" />
              <ErrorMessage name="travelers" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Package</label>
              <Field name="packageId" as="select" className="form-select">
                {packages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.price}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="packageId" component="div" className="text-danger small" />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>

            {status?.success && <div className="alert alert-success mt-3">{status.success}</div>}
            {status?.error && <div className="alert alert-danger mt-3">{status.error}</div>}
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}

export default BookingForm;
