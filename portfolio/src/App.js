import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Project from "./Project";
import MyTimeline from "./Timeline";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TCS_logo from "./images/TCS_logo.png";
import UOL_logo from "./images/UOL_logo.png";
import SKASC_logo from "./images/SKASC_logo.avif";

function Navbar() {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex items-center justify-between fixed w-full z-10 top-0">
      <h1 className="h1 text-xl lg:text-2xl font-bold">KEERTHI PRASANTH RAVICHANDRAN</h1>
      <div className="flex space-x-10">
        <Link className="hover:text-gray-300" to="#home">
          HOME
        </Link>
        <Link className="hover:text-gray-300" to="#skills">
          SKILLS
        </Link>
        <Link className="hover:text-gray-300" to="#projects">
          PROJECTS
        </Link>
        <Link className="hover:text-gray-300" to="#timeline">TIMELINE</Link>
        <Link className="hover:text-gray-300" to="#hobbies">
          HOBBIES
        </Link>
        <Link className="hover:text-gray-300" to="#contact">
          CONTACT
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

  const projects = [
    {
      title: "iGSE – An Energy Tool",
      tools: "Android Studio, Java, MongoDB",
      shortDescription:
        "Enabled users to submit energy and gas consumption readings, reducing data entry time and minimizing errors, resulting in higher data accuracy. Established an automated bill-generating system based on submitted readings, leading to a 55% reduction in billing errors and increased billing accuracy.",
    },
    {
      title: "Preference-based Group Allocation System",
      tools: "React.js, Node.js, Express.js, MongoDB",
      shortDescription: "Facilitated group allocation for the ‘Personal and Group Skills’ module at the University of Leicester, resulting in a 50% reduction in allocation time and increased user satisfaction by 35%. Developed an efficient group allocation algorithm considering user preferences and enhancing group formation. Implemented robust data security measures, including bcrypt hashing for secure password storage and JWT (JSON Web Token) for user authentication, ensuring data security and privacy.",
    },
    {
      title: "Break-Up (An alternative to Split-Wise)",
      tools: "Java, MongoDB, Randoop",
      shortDescription:
        "Led a team of six as Scrum Master in the collaborative development of a bill-splitting application, ensuring efficient task allocation, progress tracking, and timely delivery of project milestones. Achieved a remarkable test coverage of 95% for 84 methods using Randoop and White-box testing. Engineered effective teamwork dynamics through structured stand-up meetings, sprint planning sessions, and retrospectives. Designed and executed a file access alert system to monitor and report file access activities. Streamlined communication channels using JIRA, resulting in a 30% reduction in project turnaround time.",
    },
    {
      title: "Encryption Software",
      tools: "Java, MySQL",
      shortDescription:
        "Integrated MySQL for efficient management and storage of access logs, ensuring data integrity and accessibility. Developed robust encryption software focusing on the secure handling and storage of sensitive information.",
    },
  ];

  const items = [
    {
      id: 1,
      title: 'MSc. Advanced Software Engineering – Merit (2:1)',
      location: 'University of Leicester, Leicester, UK',
      date: 'Sept 2022 - Jan 2024',
      icon: UOL_logo,
      content: 'Modules: Mobile and Web Applications, Advanced Web Technologies, Software Measurement and Quality Assurance, Interactive Development and User Experience',
    },
    {
      id: 2,
      title: 'Graduate Trainee',
      location: 'Tata Consultancy Services(TCS), Chennai, India',
      date: 'Aug 2021 - Sept 2022',
      icon: TCS_logo,
      content: 'Gained proficiency in Java, JavaScript, HTML, CSS, and Python through immersive training. Developed a gaming map using Blender and Unity, focusing on 3D modeling and game development. Managed and maintained lease documents for US clients using IBM’s Tririga software, ensuring data accuracy and compliance. Enhanced application performance and functionality using Java.',
    },
    {
      id: 3,
      title: 'BSc. Computer Science and Application - Distinction',
      location: 'Sri Krishna College of Arts and Science, Coimbatore, India',
      date: 'June 2018 - May 2021',
      icon: SKASC_logo,
      content: 'Modules: Software Engineering, Mobile Application Development, Data Structures and Algorithms, Java, Python, Operating System, Digital Fundamentals and Architecture, Data Communication and Networks',
    }
  ];

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
          <div className="mt-8">
            <p className="text-gray-700">
              Want to know more about my projects?
            </p>
            <Link
              to="#projects"
              smooth={true}
              duration={500}
              className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
            >
              Check out my projects below
            </Link>
          </div>
        </section>

        <section
          className="p-8 h-auto flex flex-col justify-center items-center bg-gray-100"
          id="projects"
        >
          <h1 className="text-3xl mt-11 text-gray-800 mb-8 font-semibold">
            Projects
          </h1>
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="mb-4 lg:mr-4 lg:mb-0">
                    <video className="w-full h-auto" controls>
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap mt-4 mb-4">
                      {project.tools.split(", ").map((tool, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 py-1 px-2 mr-2 mb-2 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

<section className="p-8 h-screen flex flex-col justify-center items-center bg-gray-200"></section>

        <section id="timeline" className="p-8 h-screen flex flex-col justify-center items-center bg-gray-500">
          {/* <MyTimeline /> */}
          <div className="max-w-3xl text-center mb-8">
            <h1 className="text-3xl text-gray-800 mb-8 font-semibold">Timeline</h1>
            <VerticalTimeline>
                        {
                          items.map(element => {
                            return (
                              <VerticalTimelineElement key={element.key}
                              date={element.date}
                              dateClassName="date"
                              iconStyle={{ background: '#ffffff' }}
                              icon={<img src={element.icon} alt="icon" className="w-full h-full" />}
                              >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p className="transition-opacity duration-300 opacity-20 group-hover:opacity-100">{element.content}</p>
                              </VerticalTimelineElement>
                            )
                          })
                        }
            </VerticalTimeline>
          </div>
        </section>

        <section className="p-8 h-screen flex flex-col justify-center items-center bg-gray-200"></section>

        <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-200"
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
            <div className="bg-gray-100 p-4 rounded-lg">
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
                <p className="text-gray-700">Loading...</p>
              )}
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
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
                <p className="text-gray-700">Loading...</p>
              )}
            </div>
          </div>
        </section>

        <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-100"
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
              className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
            >
              rkpkeerthi22@gmail.com
            </a>{" "}
            <h3 className="text-lg font-semibold mt-4 mb-2">Social Media:</h3>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/keerthi-prasanth-ravichandran-b15b84252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/keerthiprasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black inline-block transition-all transform hover:scale-110"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/keerthi_prasanth_r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
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
