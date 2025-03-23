import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import HTML_CSS from "../images/HTML_CSS_logo.png";
import Java_logo from "../images/Java_logo.svg";
import Android_studio from "../images/Android_studio_logo.svg";
import JavaScript from "../images/JavaScript_logo.png";
import React_logo from "../images/React_logo.png";
import NodeJS_logo from "../images/NodeJS_logo.webp";
import ExpressJS_logo from "../images/ExpressJS_logo.png";
import MongoDB_logo from "../images/MongoDB_logo2.png";
import TailwindCSS_logo from "../images/TailwindCSS_logo.svg";
import Bootstrap_logo from "../images/Bootstrap_logo.svg";
import Git_logo from "../images/Git_logo.png";
import GitHub_logo from "../images/GitHub_logo.png";
import Netlify_logo from "../images/Netlify_logo.svg";

function Skills({ isLightMode }) {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);

  const skillsList = [
    {
      name: "JavaScript",
      // logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      logo: JavaScript,
    },
    {
      name: "React.js",
      // logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      logo: React_logo,
    },
    {
      name: "HTML & CSS",
      // logo: "https://www.pngitem.com/pimgs/m/198-1985043_html-css-logo-transparent-hd-png-download.png",
      logo: HTML_CSS,
    },
    {
      name: "Node.js",
      // logo: "https://i0.wp.com/compositecode.blog/wp-content/uploads/2018/07/1200px-node-js_logo.png?resize=863%2C528&ssl=1",
      logo: NodeJS_logo,
    },
    {
      name: "Express.js",
      // logo: "https://miro.medium.com/v2/resize:fit:1400/1*q6b32yNdlpyQjDZlAc1QEg.png",
      logo: ExpressJS_logo,
    },
    {
      name: "MongoDB",
      // logo: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png",
      logo: MongoDB_logo,
    },
    {
      name: "Java",
      // logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
      logo: Java_logo,
    },
    {
      name: "Android Studio",
      // logo: "https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png",
      logo: Android_studio,
    },

    {
      name: "Tailwind CSS",
      // logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
      logo: TailwindCSS_logo,
    },
    // {
    //   name: "Bootstrap",
    //   // logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    //   logo: Bootstrap_logo,
    // },
    {
      name: "Netlify",
      // logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      logo: Netlify_logo,
    },
    {
      name: "Git",
      // logo: "https://book.git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      logo: Git_logo,
    },
    {
      name: "GitHub",
      // logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      logo: GitHub_logo,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        ref={skillsRef}
        className={`pt-16 p-6 h-auto min-h-screen flex flex-col items-center transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } font-volkhov text-sm md:text-lg`}
        id="skills"
      >
        <h1 className="text-3xl mb-8 font-semibold">Skills</h1>

        <div className="max-w-lg md:max-w-screen-xl text-center mb-4 md:mb-10">
          <p>
            As a software engineer, I've honed my skills in various technologies
            to deliver robust and efficient solutions. Here are some of the key
            skills I bring to the table:
          </p>
        </div>

        <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-md md:max-w-6xl">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className={`p-2 md:p-4 flex flex-col items-center transition transform hover:-translate-y-1 shadow-sm rounded-md opacity-0 h-32 md:h-40 ${
                theme
                  ? "bg-customBackground-50 text-customBackground shadow-customBackground"
                  : "bg-customTextColor text-customBackground shadow-customTextColor"
              }
              ${isVisible ? "animate-fadeInTopToBottom" : ""}`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              <div className="flex flex-grow justify-center items-center h-full hover:scale-125">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 md:w-20"
                />
              </div>
              <p className="mt-auto text-sm md:text-base text-center">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center mt-8 hover:text-gray-500">
          <p className="mr-4">Checkout my projects below</p>
          <Link
            to="#projects"
            smooth={true}
            duration={500}
            className="transition-all transform hover:scale-110 animate-bounce"
          >
            <FaArrowAltCircleDown className="text-4xl" />
          </Link>
        </div>

        <div className="mt-10 text-center">
          <p>Want to know more about me?</p>
          <Link
            to="#contact"
            smooth={true}
            duration={500}
            className="text-blue-600 hover:text-blue-800 mt-2 inline-block transition transform hover:scale-110"
          >
            Let's connect
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Skills;
