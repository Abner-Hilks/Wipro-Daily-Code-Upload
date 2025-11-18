import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    return this.state.hasError ? (
      <div className="container my-5">
        <h4>Something went wrong. Please refresh the page.</h4>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
