import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PackageList from "./components/PackageList";
import BookingForm from "./components/BookingForm"; // import new component
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />

      {/* error boundary wraps routes */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/packages" element={<PackageList />} />

          {/* Booking page route */}
          <Route path="/booking" element={<BookingForm />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </div>
  );
}

export default App;
