import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/about";
import Contacts from "./pages/contacts";
import FormerExperience from "./pages/former-experience";
import EncloseErrorBoundary from "./components/enclose-error-boundary";

const AppRoutes = () => (
  <Routes>
    <Route path="/about" element={<EncloseErrorBoundary element={About}/>}/>
    <Route path="/former-experience" element={<EncloseErrorBoundary element={FormerExperience}/>}/>
    <Route path="/contacts" element={<EncloseErrorBoundary element={Contacts}/>}/>
  </Routes>
);

export default AppRoutes;