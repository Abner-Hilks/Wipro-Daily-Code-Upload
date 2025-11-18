import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-bg home-bg">
      <div className="container my-5">

        <div className="text-center mb-5 home-text-bold">
          <h1>Explore the World with Traveling Mantra</h1>
          <p className="lead mt-3" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Discover breathtaking destinations, unforgettable experiences, and hassle-free travel planning.
          </p>
        </div>

        <div className="row mt-4 text-center">
          <h3 className="mb-4 fw-semibold">Why Traveling Is Important</h3>

          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded bg-white text-dark" style={{ minHeight: "180px" }}>
              <h5 className="fw-bold">Explore New Cultures</h5>
              <p className="mt-2">Travel broadens your perspective and enriches your life.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded bg-white text-dark" style={{ minHeight: "180px" }}>
              <h5 className="fw-bold">Reduce Stress</h5>
              <p className="mt-2">Breaks refresh your mind and bring back positivity.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded bg-white text-dark" style={{ minHeight: "180px" }}>
              <h5 className="fw-bold">Create Memories</h5>
              <p className="mt-2">Cherish unforgettable moments with friends and family.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h4 className="fw-bold">Ready to Plan Your Next Trip?</h4>
          <button 
            className="btn btn-primary px-4 py-2 mt-2"
            onClick={() => navigate("/packages")}
          >
            View Travel Packages
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;
