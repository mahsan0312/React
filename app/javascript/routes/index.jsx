import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";

export default (
  <Router>
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  </Router>
);
