import React from "react";
import { Route, RouteProps } from "react-router-dom";

import ErrorBoundary from "./error-boundary";

const ErrorBoundaryRoute = ({ element: Element, ...rest }: RouteProps) => {
  const encloseInErrorBoundary = (props: any) => (
    <ErrorBoundary>
      {/*// @ts-ignore*/}
      <Element {...props} />
    </ErrorBoundary>
  );

  if (!Element) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);
  {/*// @ts-ignore*/}
  return <Route {...rest} element={encloseInErrorBoundary}/>;
};

export default ErrorBoundaryRoute;