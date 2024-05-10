import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import Kelas from "./Kelas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Kelas" element={<Kelas />} />
      </Routes>
    </Router>
  );
}

export default App;