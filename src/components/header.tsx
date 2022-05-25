import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <h1><img src=""/></h1>
      <Routes>
        <Route path="/about" element={<h2>{t("nav-menu.about")}</h2>}/>
        <Route path="/former-experience" element={<h2>{t("nav-menu.former-experience")}</h2>}/>
        <Route path="/contacts" element={<h2>{t("nav-menu.contacts")}</h2>}/>
      </Routes>
      <ul className="pr__list pr__list__menu">
        <li className="pr__list__item pr__list__menu__item">
          <Link to={"/about"}>{t("nav-menu.about")}</Link>
        </li>
        <li className="pr__list__item pr__list__menu__item">
          <Link to={"/former-experience"}>{t("nav-menu.former-experience")}</Link>
        </li>
        <li className="pr__list__item pr__list__menu__item">
          <Link to={"/contacts"}>{t("nav-menu.contacts")}</Link>
        </li>
      </ul>
    </nav>
  )
};

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