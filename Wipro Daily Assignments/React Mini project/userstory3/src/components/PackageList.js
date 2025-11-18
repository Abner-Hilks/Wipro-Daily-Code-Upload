import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PackageList() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/packages")
      .then((res) => setPackages(res.data))
      .catch((err) => console.error("Error fetching packages:", err));
  }, []);

  return (
    <motion.div
      className="page-bg packages-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container my-5">
        <h3 className="text-center mb-4">Available Travel Packages</h3>

        <div className="row">
          {packages.map((pkg) => (
            <div className="col-md-4 mb-4 d-flex" key={pkg.id}>
              <div className="card shadow-sm travel-card w-100">

                <img src={pkg.image} alt={pkg.title} className="travel-img" />

                <div className="card-body travel-body">
                  <h5 className="travel-title fw-bold">{pkg.title}</h5>
                  <p className="text-muted">{pkg.duration}</p>
                  <p className="fw-bold">{pkg.price}</p>

                  <button
                    className="btn btn-primary w-100 travel-btn"
                    onClick={() => navigate(`/booking?package=${pkg.title}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default PackageList;
