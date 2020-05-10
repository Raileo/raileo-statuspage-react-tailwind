import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  pageRefresh() {
    let currentUrl = window.location.href;
    window.location = currentUrl;
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className=" absolute left-0 top-0 z-10 h-screen w-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-2xl text-gray-900">
            We were unable to process your request. Please try again later.
          </h2>
        </div>
      )
    }
    return this.props.children;
  }
}