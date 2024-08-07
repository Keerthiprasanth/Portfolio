import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

function Skills() {
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

  return (
    <div>
      <section
        className="p-8 h-auto flex flex-col justify-center items-center bg-gray-200"
        id="skills"
      >
        <h1 className="text-3xl text-gray-800 mb-8 font-semibold">Skills</h1>
        <div className="max-w-lg text-center mb-8">
          <p className="text-lg text-gray-700 mb-4">
            As a software engineer, I've honed my skills in various technologies
            to deliver robust and efficient solutions. Here are some of the key
            skills I bring to the table:
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-4 w-screen p-10">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="py-2 px-4 opacity-0 bg-gray-300 rounded-lg text-gray-800 font-semibold flex items-center justify-center shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-fadeInTopToBottom"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          <p className="text-gray-700">Want to know more about my projects?</p>
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
    </div>
  );
}

export default Skills;
