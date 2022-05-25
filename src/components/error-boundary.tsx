import React from "react";

interface IErrorBoundaryProps {
  readonly children: JSX.Element | JSX.Element[];
}

interface IErrorBoundaryState {
  readonly error: any;
  readonly errorInfo: any;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  readonly state: IErrorBoundaryState = { error: undefined, errorInfo: undefined };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      const errorDetails =
        process.env.NODE_ENV === "development" ? (
          <details className="preserve-space">
            {error && error.toString()}
            <br/>
            {errorInfo.componentStack}
          </details>
        ) : undefined;
      return (
        <section className="pr__main__content">
          <header>
            <h3>An unexpected error has occurred.</h3>
          </header>

          <section>
            {errorDetails}
          </section>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
