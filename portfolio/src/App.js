import React from "react";
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
  return (
    <div className="App">
      <Navbar />
      <div className="pt-14">
        <BrowserRouter>
          <Home />
          <Skills />
          <Project />
          <Timeline />
          {/* <Hobbies /> */}
          <Contact />
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
