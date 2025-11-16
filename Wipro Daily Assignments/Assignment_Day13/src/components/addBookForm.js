import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BookActions from "../actions/bookActions";
import { Link, useNavigate } from "react-router-dom";

function AddBookForm() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    author: "",
    price: "",
    image: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    price: Yup.number().required("Price is required").positive(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = { ...values, id: Date.now() };

    // Step 1: Save to backend (json-server)
    axios
      .post("http://localhost:3001/books", newBook)
      .then((res) => {
        console.log("Book saved to backend:", res.data);

        // Step 2: Reflect change in Flux store (in-memory)
        BookActions.addBook(res.data);

        // Step 3: Reset and navigate back
        resetForm();
        navigate("/home");
      })
      .catch((err) => {
        console.error("Error adding book:", err);
        alert("Failed to connect to backend. Make sure JSON Server is running.");
      });
  };

  return (
    <div className="container mt-4 fade-in">
      <h2 className="mb-4">Add New Book</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="card p-4 shadow-sm w-50 mx-auto">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <Field name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <Field name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <Field name="image" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <Field as="textarea" name="description" className="form-control" />
          </div>

          <button type="submit" className="btn btn-success">
            Add Book
          </button>
          <Link to="/home" className="btn btn-outline-secondary ms-2">
            ← Back to Home
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default AddBookForm;
