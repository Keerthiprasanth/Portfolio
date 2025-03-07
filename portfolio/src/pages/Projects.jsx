import React from "react";
import { useState } from "react";
import ProjectsPage from "../components/ProjectsPage";
import Pagination from "../components/Pagination";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(2);

  const projects = [
    {
      title: "iGSE – An Energy Tool",
      tools: "Android Studio, Java, MongoDB",
      shortDescription:
        "Enabled users to submit energy and gas consumption readings, reducing data entry time and minimizing errors, resulting in higher data accuracy. Established an automated bill-generating system based on submitted readings, leading to a 55% reduction in billing errors and increased billing accuracy.",
      sourceCode: "https://github.com/Keerthiprasanth/ElectricityReading"
    },
    {
      title: "Preference-based Group Allocation System",
      tools: "React.js, Node.js, Express.js, MongoDB",
      shortDescription:
        "Facilitated group allocation for the ‘Personal and Group Skills’ module at the University of Leicester, resulting in a 50% reduction in allocation time and increased user satisfaction by 35%. Developed an efficient group allocation algorithm considering user preferences and enhancing group formation. Implemented robust data security measures, including bcrypt hashing for secure password storage and JWT (JSON Web Token) for user authentication, ensuring data security and privacy.",
      sourceCode:"https://github.com/Keerthiprasanth/Group_Allocation"
    },
    {
      title: "Break-Up (An alternative to Split-Wise)",
      tools: "Java, MongoDB, Randoop",
      shortDescription:
        "Led a team of six as Scrum Master in the collaborative development of a bill-splitting application, ensuring efficient task allocation, progress tracking, and timely delivery of project milestones. Achieved a remarkable test coverage of 95% for 84 methods using Randoop and White-box testing. Engineered effective teamwork dynamics through structured stand-up meetings, sprint planning sessions, and retrospectives. Designed and executed a file access alert system to monitor and report file access activities. Streamlined communication channels using JIRA, resulting in a 30% reduction in project turnaround time.",
        sourceCode:"https://github.com/Keerthiprasanth/Break-Up"
    },
    {
      title: "Encryption Software",
      tools: "Java, MySQL",
      shortDescription:
        "Integrated MySQL for efficient management and storage of access logs, ensuring data integrity and accessibility. Developed robust encryption software focusing on the secure handling and storage of sensitive information.",
      sourceCode:""
    },
    {
      title: "Zen-Flow Yoga Planner",
      tools: "React.js, Node.js, Express.js, MongoDB, AWS-S3",
      shortDescription: "",
      sourceCode:"https://github.com/Keerthiprasanth/Yoga_class_planner"
    },
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section
        className="p-8 h-auto flex flex-col justify-center items-center bg-gray-100"
        id="projects"
      >
        <h1 className="text-3xl mt-11 text-gray-800 mb-8 font-semibold">
          Projects
        </h1>
        <ProjectsPage
          projects={currentProjects}
        ></ProjectsPage>
        <Pagination
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
        />
        {/* <div className="max-w-6xl mx-auto flex flex-col gap-8">
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
          </div> */}
      </section>
    </div>
  );
}

export default Projects;
