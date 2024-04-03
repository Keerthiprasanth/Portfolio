import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex items-center justify-between fixed w-full z-10 top-0">
      <h1 className="h1 text-xl lg:text-2xl font-bold">Keerthi Prasanth</h1>
      <div className="flex space-x-4">
        <Link className="hover:text-gray-300" to="#home">
          Home
        </Link>
        <Link className="hover:text-gray-300" to="#skills">
          Skills
        </Link>
        <Link className="hover:text-gray-300" to="#hobbies">
          Hobbies
        </Link>
        <Link className="hover:text-gray-300" to="#contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

function App() {
  const skillsList = [
    "HTML",
    "CSS",
    "Java",
    "XML",
    "Android Studio",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "Software Testing - Randoop",
    "Git",
    "GitHub",
  ];

  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://api.chess.com/pub/player/keerthiprasanthr/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/keerthi_prasanth")
      .then((response) => response.json())
      .then((data) => setLeetcodeStats(data))
      .catch((error) => console.error("Error fetching LeetCode stats:", error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section
          className="p-4 lg:p-8 lg:pt-20 min-h-screen flex flex-col justify-center items-center bg-gray-100"
          id="home"
        >
          <div className="content text-lg lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl px-4 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="header text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              Hello and welcome to my portfolio!
            </h1>
            <p className="mb-4">
              I'm{" "}
              <span className="font-bold">Keerthi Prasanth Ravichandran</span>,
              a passionate software engineer who recently completed my Master's
              in Advanced Software Engineering from the University of Leicester
              in the UK.
            </p>
            <p className="mb-4">
              With a strong foundation in both theoretical knowledge and
              practical application, I'm excited to showcase my skills and
              projects to you.
            </p>
            <p className="mb-4">
              As a software developer, my primary goal is to leverage technology
              to create meaningful solutions that enhance people's lives.
              Whether it's through developing user-friendly applications,
              optimizing performance, or solving complex challenges, I strive to
              make a positive impact through my work.
            </p>
          </div>
          <div className="content text-gray-600 hover:text-gray-800 flex items-center justify-center mt-6 lg:mt-0">
            <p className="mr-2">Explore my skills</p>
            <Link
              to="#skills"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-800 transition-all transform hover:scale-110 animate-bounce"
            >
              <FaArrowAltCircleDown className="text-4xl" />
            </Link>
          </div>
        </section>

        <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-200"
          id="skills"
        >
          <h1 className="text-3xl text-gray-800 mb-8 font-semibold">Skills</h1>
          <div className="max-w-lg text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              As a software engineer, I've honed my skills in various
              technologies to deliver robust and efficient solutions. Here are
              some of the key skills I bring to the table:
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-4">
            {skillsList.map((skill, index) => (
              <li
                key={index}
                className="py-2 px-4 bg-gray-300 rounded-lg text-gray-800 font-semibold flex items-center justify-center shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-gray-700">Want to know more about me?</p>
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block transition-all transform hover:scale-110"
            >
              Let's connect
            </a>
          </div>
        </section>

        <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-100"
          id="hobbies"
        >
          <div className="max-w-3xl text-center mb-8">
            <h1 className="text-3xl text-gray-800 mb-4 font-semibold">
              Hobbies
            </h1>
            <p className="text-lg text-gray-700">
              Here are some of my hobbies that I enjoy in my free time. These
              activities provide a balance to my professional life and allow me
              to explore different interests.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                Chess.com Stats
              </h1>
              <p className="text-base text-gray-700 mb-4">
                Being a chess player during school days, I didn't want to quit
                playing chess. Once in a while I play in chess.com and you can
                see my live stats below.
              </p>
              {stats ? (
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      Rapid Chess
                    </h2>
                    <p>
                      Last Rating: {stats.chess_rapid?.last?.rating || "NA"}
                    </p>
                    <p>
                      Best Rating: {stats.chess_rapid?.best?.rating || "NA"}
                    </p>
                    <p>Wins: {stats.chess_rapid?.record?.win || "NA"}</p>
                    <p>Losses: {stats.chess_rapid?.record?.loss || "NA"}</p>
                    <p>Draws: {stats.chess_rapid?.record?.draw || "NA"}</p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      Blitz Chess
                    </h2>
                    <p>
                      Last Rating: {stats.chess_blitz?.last?.rating || "NA"}
                    </p>
                    <p>
                      Best Rating: {stats.chess_blitz?.best?.rating || "NA"}
                    </p>
                    <p>Wins: {stats.chess_blitz?.record?.win || "NA"}</p>
                    <p>Losses: {stats.chess_blitz?.record?.loss || "NA"}</p>
                    <p>Draws: {stats.chess_blitz?.record?.draw || "NA"}</p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      Tactics
                    </h2>
                    <p>
                      Highest Rating: {stats.tactics?.highest?.rating || "NA"}
                    </p>
                    <p>
                      Lowest Rating: {stats.tactics?.lowest?.rating || "NA"}
                    </p>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                      Puzzle Rush
                    </h2>
                    <p>Best Score: {stats.puzzle_rush?.best?.score || "NA"}</p>
                    <p>
                      Daily Score: {stats.puzzle_rush?.daily?.score || "NA"}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-700">Loading Chess.com stats...</p>
              )}
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                Leetcode Stats
              </h1>
              <p className="text-base text-gray-700 mb-4">
                I prefer developing real time applications. But sometimes
                solving codes is also fun and here is my live stats from
                leetcode.{" "}
              </p>
              {leetcodeStats ? (
                <div className="text-base lg:text-lg text-gray-700">
                  <p>
                    Total LeetCode Questions Solved:{" "}
                    {leetcodeStats.totalSolved || "NA"}
                  </p>
                  <p>
                    Total Easy Questions Solved:{" "}
                    {leetcodeStats.easySolved || "NA"}
                  </p>
                  <p>
                    Total Medium Questions Solved:{" "}
                    {leetcodeStats.mediumSolved || "NA"}
                  </p>
                  <p>
                    Total Hard Questions Solved:{" "}
                    {leetcodeStats.hardSolved || "NA"}
                  </p>
                  <p>
                    Acceptance Rate: {leetcodeStats.acceptanceRate || "NA"}%
                  </p>
                  <p>Ranking: {leetcodeStats.ranking || "NA"}</p>
                  <p>
                    Contribution Points:{" "}
                    {leetcodeStats.contributionPoints || "NA"}
                  </p>
                </div>
              ) : (
                <p className="text-gray-700">Loading Leetcode stats...</p>
              )}
            </div>
          </div>
        </section>

        <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-300"
          id="contact"
        >
          <h1 className="text-3xl text-gray-800 mb-8 font-semibold">
            Contact Me
          </h1>
          <div className="text-lg text-gray-700">
            <p>
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello!
            </p>
            <p>
              You can contact me via email, or connect with me on social media.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Email:</h3>
            <a
              href="mailto:rkpkeerthi22@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              rkpkeerthi22@gmail.com
            </a>{" "}
            <h3 className="text-lg font-semibold mt-4 mb-2">Social Media:</h3>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/keerthi-prasanth-ravichandran-b15b84252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/keerthiprasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/keerthi_prasanth_r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-white p-4 text-center w-full">
          <div className="max-w-lg mx-auto">
            <p className="text-lg">
              © 2024 Keerthi Prasanth. All rights reserved.
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
