// simple contact page
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-center mb-4">Contact Us</h3>
      <p className="text-center">
        For booking or inquiries, reach us at <b>contact@travelingmantra.com</b>
      </p>
    </motion.div>
  );
}

export default Contact;
