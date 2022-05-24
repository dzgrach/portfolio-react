import React from "react";
import {Routes, Route} from "react-router-dom";

import About from "./pages/about";
import Contacts from "./pages/contacts";
import FormerExperience from "./pages/former-experience";

const AppRoutes = () => (
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/former-experience" element={<FormerExperience/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
  </Routes>
);

export default AppRoutes;