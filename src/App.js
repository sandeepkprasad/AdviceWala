import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Advice from "./Components/Advice";

const App = () => {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Disable Dark Mode");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
      <Routes>
        <Route exact path="/" element={<Advice mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
};

export default App;
