import React from "react";

import ErrorBoundary from "./error-boundary";

const EncloseErrorBoundary = ({ element: Element, ...rest }: any) => (
  <ErrorBoundary>
    <Element {...rest}/>
  </ErrorBoundary>
);

export default EncloseErrorBoundary;