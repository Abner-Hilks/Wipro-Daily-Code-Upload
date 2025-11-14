import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) this.props.onReset(); // reset parent too
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            animation: "fadeIn 0.5s ease-in-out",
            color: "red",
            border: "1px solid #e33",
            borderRadius: "6px",
            padding: "15px",
            marginTop: "15px",
            background: "#fff5f5",
          }}
        >
          <h4>Something went wrong!</h4>
          <pre style={{ color: "#900" }}>{this.state.error?.toString()}</pre>
          <button onClick={this.handleReset}>Try Again</button>
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.98); }
                to { opacity: 1; transform: scale(1); }
              }
            `}
          </style>
        </div>
      );
    }
    return this.props.children;
  }
}
