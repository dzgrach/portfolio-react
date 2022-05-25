import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";

import "./app.scss";

import AppRoutes from "./app.routes";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <>
        <ErrorBoundary>
          <Header/>
        </ErrorBoundary>

        <AppRoutes/>

        <ErrorBoundary>
          <Footer/>
        </ErrorBoundary>
      </>
    </Router>
  );
}

export default App;
