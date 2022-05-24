import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";
import AppRoutes from "./app.routes";

import "./app.scss";

function App() {
  return (
    <Router>
      <>
        <ErrorBoundary>
          <header className="pr__main__header">
            <div className="pr__main__contacts">
              <ul className="pr__list pr__list__contacts">
                <li className="pr__list__item">
                  <label>Tel: <a href="tel://+3275 (29) 672 97 42">+375 (29) 672 97 42</a></label>
                </li>
                <li className="pr__list__item">
                  <label>Mail: <a href="mailto:dzmitry.grachyov@outlook.com">dzmitry.grachyov@outlook.com</a></label>
                </li>
              </ul>
            </div>
            <nav>
              <h1><img src="" title="Dzmitry Hrachou" alt="dzgrachyov"/></h1>
              <h2>Dzmitry Hrachou</h2>
              <ul className="pr__list pr__list__menu">
                <li className="pr__list__item pr__list__menu__item">
                  <Link to={"/about"} >About</Link>
                </li>
                <li className="pr__list__item pr__list__menu__item">
                  <Link to={"/former-experience"} >Former Experience</Link>
                </li>
                <li className="pr__list__item pr__list__menu__item">
                  <Link to={"/contacts"} >Contacts</Link>
                </li>
              </ul>
            </nav>
          </header>
        </ErrorBoundary>

        <AppRoutes/>

        <ErrorBoundary>
          <footer className="pr__main__footer">

          </footer>
        </ErrorBoundary>
      </>
    </Router>
  );
}

export default App;
