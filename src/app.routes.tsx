import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/about";
import Contacts from "./pages/contacts";
import FormerExperience from "./pages/former-experience";
import EncloseErrorBoundary from "./components/enclose-error-boundary";

const AppRoutes = () => (
  <Routes>
    <Route path="/about" element={<EncloseErrorBoundary element={About}/>}/>
    <Route path="/former-experience" element={<EncloseErrorBoundary element={FormerExperience}/>}/>
    <Route path="/contacts" element={<EncloseErrorBoundary element={Contacts}/>}/>

    <Route path="/" element={<Navigate replace to="/about" />} />
  </Routes>
);

export default AppRoutes;