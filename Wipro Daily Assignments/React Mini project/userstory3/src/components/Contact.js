import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="page-bg contact-bg text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container my-5 contact-text-bold">

        <h2 className="fw-bold mb-4 contact-heading">Contact Us</h2>

        <p className="contact-description">
          We're here to help with your travel plans. For booking or inquiries, reach out to us:
        </p>

        <p className="contact-info">
          <strong>Email:</strong> travelingmantra@gmail.com
        </p>

        <p className="contact-info">
          <strong>Website:</strong> travelingmantra.com
        </p>

      </div>
    </motion.div>
  );
}

export default Contact;
