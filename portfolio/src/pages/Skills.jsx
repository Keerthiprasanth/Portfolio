import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillsList = [
    { name: "HTML & CSS", logo: "https://www.pngitem.com/pimgs/m/198-1985043_html-css-logo-transparent-hd-png-download.png" },
    { name: "Java", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
    { name: "Android Studio", logo: "https://seeklogo.com/images/A/android-studio-logo-1EE788C6EC-seeklogo.com.png" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React.js", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "Node.js", logo: "https://i0.wp.com/compositecode.blog/wp-content/uploads/2018/07/1200px-node-js_logo.png?resize=863%2C528&ssl=1" },
    { name: "Express.js", logo: "https://miro.medium.com/v2/resize:fit:1400/1*q6b32yNdlpyQjDZlAc1QEg.png" },
    { name: "MongoDB", logo: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" },
    { name: "Tailwind CSS", logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" },
    { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "Git", logo: "https://book.git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Triggers when 20% of the section is visible
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
        className="pt-16 p-8 h-auto min-h-screen flex flex-col items-center bg-customBackground text-customTextColor font-volkhov text-base md:text-lg"
        id="skills"
      >
        <h1 className="text-3xl mb-8 font-semibold">Skills</h1>

        <div className="max-w-lg md:max-w-screen-xl text-center mb-8">
          <p className="mb-4">
            As a software engineer, I've honed my skills in various technologies
            to deliver robust and efficient solutions. Here are some of the key
            skills I bring to the table:
          </p>
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-xl md:max-w-6xl">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className={`py-3 px-4 flex flex-col items-center justify-center transition transform hover:-translate-y-1 hover:shadow-lg text-customTextColor opacity-0 ${
                isVisible ? "animate-fadeInTopToBottom" : ""
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : "0s",
                // opacity: isVisible ? 1 : 0,
              }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="p-4 w-20 md:w-24 rounded-lg object-contain bg-customTextColor"
              />
              <p className="mt-2 text-sm md:text-base">{skill.name}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center mt-8 hover:text-gray-400">
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

        {/* Connect Section */}
        <div className="mt-10 text-center">
          <p className="text-base md:text-lg">Want to know more about me?</p>
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-800 mt-2 inline-block transition transform hover:scale-110"
          >
            Let's connect
          </a>
        </div>
      </section>
    </div>
  );
}

export default Skills;
