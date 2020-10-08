// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught in error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to='/'>Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    // this.props.children is whatever contains inside the component (in this case, Click here inside of Link). Will catch whatever error is inside the component
    return this.props.children;
  }
}

export default ErrorBoundary;
