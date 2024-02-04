import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import './App.css';
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

function App() {
  const skillsList = [
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "XML",
    "Java",
  ];

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <nav className="navbar">
          <h1 className="title">Keerthi Prasanth</h1>
          <div className="links">
            <Link className='home_link' to="#home">Home</Link>
            <Link className='skills_link' to="#skills">Skills</Link>
            <Link className='contact_link' to="#contact">Contact</Link>
          </div>
        </nav>
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <section className="home" id="home">
          <div className="home_content">
            <h1>Hello!</h1>
            <div>
              I am Keerthi Prasanth Ravichandran, a software engineer
              specializing in MERN Stack and Android Studio.
            </div>
            <br />
          </div>
          <div class="background-image"></div>
        </section>
        <section className="skills" id="skills">
          <h1>Skills</h1>
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="contact" id="contact">
          <h1>Contact Me</h1>
          <h2>Get in touch</h2>
          <h3>Email: rkpkeerthi22@gmail.com</h3>
          <h3>Contact: </h3>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
