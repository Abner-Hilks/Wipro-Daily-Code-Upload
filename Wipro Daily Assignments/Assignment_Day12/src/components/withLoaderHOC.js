import React, { useState, useEffect } from "react";

const withLoaderHOC = (WrappedComponent) => {
  return function LoaderWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000); // simulate loading
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3 text-muted">Loading content...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoaderHOC;
