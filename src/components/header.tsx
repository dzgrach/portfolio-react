import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navigation = () => (
  <nav>
    <h1><img src=""/></h1>
    <h2>
      <Routes>
        <Route path="/about" element={<h2>About</h2>}/>
        <Route path="/former-experience" element={<h2>Former Experience</h2>}/>
        <Route path="/contacts" element={<h2>Contacts</h2>}/>
      </Routes>
    </h2>
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
);

const PersonalContacts = () => (
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
);

const Header = () => (
  <header className="pr__main__header">
    <PersonalContacts/>
    <Navigation/>
  </header>
);

export default Header;