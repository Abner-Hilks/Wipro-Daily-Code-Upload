import React, { Component, ErrorInfo, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Optional mock API log
    // fetch("https://mock-monitoring-api.dev/log", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ message: error.message, stack: errorInfo.componentStack }),
    // });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card border-danger my-3 shadow-sm">
          <div className="card-header bg-danger text-white">
            <h5 className="mb-0">Component Error</h5>
          </div>
          <div className="card-body bg-light">
            <div className="alert alert-warning" role="alert">
              <strong>Something went wrong:</strong> {this.state.errorMessage}
            </div>
            <p className="text-muted mb-0">
              Please refresh the page or try again later.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
