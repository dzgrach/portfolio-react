import React from "react";
import {Routes, Route} from "react-router-dom";

import Landing from "./pages/landing";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing/>}/>
  </Routes>
);

export default AppRoutes;