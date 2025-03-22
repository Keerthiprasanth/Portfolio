import React from "react";
import { useState, useEffect, useRef } from "react";
import ProjectsPage from "../components/ProjectsPage";
import Pagination from "../components/Pagination";
import Portfolio_image from "../images/Portfolio_Image.png";
import WOW_Productions_image from "../images/WOW_Productions.png";
import Preference_Selection_image from "../images/Preference_Selection.png"

function Projects({ isLightMode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(2);

  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);

  const projects = [
    {
      title: "My Personal Portfolio",
      image: Portfolio_image,
      tools: "ReactJS, TailwindCSS, EmailJS, GitHub Pages",
      shortDescription:
        "My React portfolio is a dynamic showcase of my skills, projects and experience. With a clean design, it highlights expertise in React, responsive web development, and innovative implementations. Designed the website with TailwindCSS and hosted it through the GitHub Pages. Used react libraries like Vertical Timeline Element, React Scroll, and the react hooks like useRef to set up an Interseciton Observer for handling the animations when the threshold of the section reaches 30%. Designed the website with different theme modes to provide a better user experience.",
      sourceCode: "https://github.com/Keerthiprasanth/Portfolio",
      liveLink: "https://keerthiprasanth.github.io/Portfolio/"
    },
    {
      title: "W.O.W Productions Event",
      image: WOW_Productions_image,
      tools: "ReactJS, TailwindCSS, Netlify, Google Maps API",
      shortDescription:
        "W.O.W Productions Presents is a heel dance class event organisers with a party gaming experience. Developed a responsive website for promoting the sales of an event held by them on December 2024. Integrated the website with the Google Map api to provide a complete guidance to the location and Event Brite api for the ticket sales. The use of React components, external content fetching, and modular design principles contribute to a scalable and maintainable codebase, resulting in future improvements.",
      sourceCode: "https://github.com/Keerthiprasanth/wow-productions-event",
      liveLink: "https://wow-productions-presents.netlify.app/"
    },
    {
      title: "Preference-based Group Allocation System",
      image: Preference_Selection_image,
      tools: "React.js, Node.js, Express.js, MongoDB, JWT, Nodmailer",
      shortDescription:
        "Facilitated group allocation for the ‘Personal and Group Skills’ module at the University of Leicester, resulting in a 50% reduction in allocation time and increased user satisfaction by 35%. User-centric React project with student-teacher logins, profiles, email notifications, topic preferences and availabilities. Developed an efficient group allocation algorithm considering user preferences and enhancing group formation. Implemented robust data security measures, including bcrypt hashing for secure password storage and JWT (JSON Web Token) for user authentication, ensuring data security and privacy.",
      sourceCode: "https://github.com/Keerthiprasanth/Group_Allocation",
    },
    {
      title: "Zen-Flow Yoga Planner",
      tools: "Node.js, Express.js, MongoDB, AWS-S3, Nodmailer, JWT",
      shortDescription: "Led a team of three as a Team Lead and Backend Developer to build a Yoga Class website, successfully delivering it on time. The platform provides access to pre-defined asanas based on user premium status and allows users to book live sessions with available Yoga academy staff. Implemented JWT authentication and Bcrypt hashing for providing a 100% secure user authentication and class authorization. Integrated AWS S3 Bucket to store and render asana images and videos on the frontend. The platform showcases the versatility and capabilities of modern web development, encapsulated in an efficient and engaging user experience.",
      sourceCode: "https://github.com/Keerthiprasanth/Yoga_class_planner",
    },
    {
      title: "iGSE – An Energy Tool",
      tools: "Android Studio, XML, Java, MongoDB, JWT",
      shortDescription:
        "Enabled users to submit energy and gas consumption readings through their mobile phones, reducing data entry time by providing a scanner through camera and minimizing errors, resulting in higher data accuracy. Established an automated bill-generating system based on submitted readings, leading to a 85% reduction in billing errors and increased billing accuracy.",
      sourceCode: "https://github.com/Keerthiprasanth/ElectricityReading",
    },
    {
      title: "Break-Up (An alternative to Split-Wise)",
      tools: "Java, MongoDB, Randoop, JWT",
      shortDescription:
        "Led a team of six as Scrum Master in the collaborative development of a bill-splitting application, ensuring efficient task allocation, progress tracking, and timely delivery of project milestones. Achieved a remarkable test coverage of 95% for 84 methods using Randoop and White-box testing. Engineered effective teamwork dynamics through structured stand-up meetings, sprint planning sessions, and retrospectives. Designed and executed a file access alert system to monitor and report file access activities. Streamlined communication channels using JIRA, resulting in a 30% reduction in project turnaround time.",
      sourceCode: "https://github.com/Keerthiprasanth/Break-Up",
    },
    // {
    //   title: "Encryption Software",
    //   tools: "Java, SpringBoot, MySQL",
    //   shortDescription:
    //     "Integrated MySQL for efficient management and storage of access logs, ensuring data integrity and accessibility. Developed robust encryption software focusing on the secure handling and storage of sensitive information.",
    //   sourceCode: "",
    // },

  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (projectsSection.current) {
      projectsSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const projectsSection = useRef(null);

  return (
    <div>
      <section ref={projectsSection}
        className={`pt-16 p-4 md:p-8 md:pt-16 h-auto min-h-screen flex flex-col items-center transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } font-volkhov text-base md:text-lg`}
        id="projects"
      >
        <h1 className="text-3xl font-semibold mb-8">Projects</h1>
        <ProjectsPage
          projects={currentProjects}
          isLightMode={isLightMode}
        ></ProjectsPage>
        <Pagination
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
          currentPage={currentPage}
          isLightMode={isLightMode}
        />
      </section>
    </div>
  );
}

export default Projects;
