import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import html_logo from "../images/HTML-logo.webp";

function Skills() {
  const skillsList = [
    // {name: "HTML", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" },
    { name: "HTML & CSS", logo: "https://www.pngitem.com/pimgs/m/198-1985043_html-css-logo-transparent-hd-png-download.png" },
    { name: "Java", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
    // { name: "XML", logo: "https://cdn-icons-png.freepik.com/512/5105/5105250.png" },
    { name: "Android Studio", logo: "https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React.js", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "Node.js", logo: "https://i0.wp.com/compositecode.blog/wp-content/uploads/2018/07/1200px-node-js_logo.png?resize=863%2C528&ssl=1" },
    { name: "Express.js", logo: "https://miro.medium.com/v2/resize:fit:1400/1*q6b32yNdlpyQjDZlAc1QEg.png" },
    { name: "MongoDB", logo: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" },
    { name: "Tailwind CSS", logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    // { name: "Randoop", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gp8wu824lUR7WVvEQdjogqNMrOtHI_tuJg&s" },
    { name: "Git", logo: "https://book.git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    // { name: "Post Man", logo: ""}
  ];

  return (
    <div>
      <section
        className="pt-14 p-8 h-auto flex flex-col justify-center items-center bg-gray-200"
        id="skills"
      >
        <h1 className="text-3xl text-gray-800 mb-8 font-semibold">Skills</h1>
        <div className="max-w-lg md:max-w-screen-xl text-center mb-8">
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
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 max-w-xl md:max-w-6xl">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="py-1 px-3 opacity-0 text-gray-800 font-semibold flex flex-col items-center justify-center  transition transform hover:-translate-y-1 hover:shadow-lg animate-fadeInTopToBottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="p-4 w-full rounded-lg flex-1"
              />
              <p className='flex-2'>{skill.name}</p>
              
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
