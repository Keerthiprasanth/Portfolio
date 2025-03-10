import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={isLightMode ? "light-mode" : "dark-mode"}>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme}/>
      <div className="pt-14">
        <BrowserRouter>
          <Home isLightMode={isLightMode} />
          <Skills isLightMode={isLightMode} />
          <Project isLightMode={isLightMode} />
          <Timeline isLightMode={isLightMode} />
          {/* <Hobbies isLightMode={isLightMode} /> */}
          <Contact isLightMode={isLightMode} />
          <Footer isLightMode={isLightMode} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
