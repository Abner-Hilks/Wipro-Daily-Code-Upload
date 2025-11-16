// component to display travel packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function PackageList() {
  const [packages, setPackages] = useState([]);

  // lifecycle method using useEffect
  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((res) => setPackages(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <motion.div
      className="container my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-center mb-4">Available Travel Packages</h3>
      <div className="row">
        {packages.map((pkg) => (
          <div className="col-md-4 mb-4" key={pkg.id}>
            <div className="card shadow-sm">
              <img src={pkg.image} alt={pkg.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">{pkg.duration}</p>
                <p className="fw-bold">{pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// prop validation
PackageList.propTypes = {
  packages: PropTypes.array,
};

export default PackageList;
