import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import html_logo from "../images/HTML-logo.webp";

function Skills() {
  const skillsList = [
    {name: "HTML", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" },
    { name: "CSS", logo: "data:image/png;base64,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" },
    { name: "Java", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUaDjGczuu5b038vjXDstYNwIUtEc7rS3Fw&s" },
    // { name: "XML", logo: "https://cdn-icons-png.freepik.com/512/5105/5105250.png" },
    { name: "Android Studio", logo: "https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png" },
    { name: "JavaScript", logo: "https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" },
    { name: "React.js", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "Node.js", logo: "https://i0.wp.com/compositecode.blog/wp-content/uploads/2018/07/1200px-node-js_logo.png?resize=863%2C528&ssl=1" },
    { name: "Express.js", logo: "https://miro.medium.com/v2/resize:fit:1400/1*q6b32yNdlpyQjDZlAc1QEg.png" },
    { name: "MongoDB", logo: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" },
    { name: "Tailwind CSS", logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    // { name: "Randoop", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gp8wu824lUR7WVvEQdjogqNMrOtHI_tuJg&s" },
    { name: "Git", logo: "https://book.git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    // { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
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
        {/* <ul className="grid grid-cols-3 gap-4 w-screen p-10">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="py-2 px-4 opacity-0 bg-gray-300 rounded-lg text-gray-800 font-semibold flex items-center justify-center shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-fadeInTopToBottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </li>
          ))}
        </ul> */}
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 max-w-xl md:max-w-6xl ">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="py-1 px-3 opacity-0  text-gray-800 font-semibold flex flex-col items-center justify-center  transition duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-fadeInTopToBottom"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={skill.logo}
                alt={`Link Invalid`}
                className="p-4 w-full rounded-lg"
              />
              {skill.name}
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
