import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import EncloseErrorBoundary from "./components/enclose-error-boundary";

const About = React.lazy(() => import('./pages/about'));
const Contacts = React.lazy(() => import('./pages/contacts'));
const FormerExperience = React.lazy(() => import('./pages/former-experience'));
const WorldNews = React.lazy(() => import('./pages/world-news'));

const AppRoutes = () => (
  <Routes>
    <Route path="/about" element={<EncloseErrorBoundary element={About} />} />
    <Route path="/former-experience" element={<EncloseErrorBoundary element={FormerExperience} />} />
    <Route path="/contacts" element={<EncloseErrorBoundary element={Contacts} />} />
    <Route path="/world-news" element={<EncloseErrorBoundary element={WorldNews} />} />

    <Route path="/" element={<Navigate replace to="/about" />} />
  </Routes>
);

export default AppRoutes;