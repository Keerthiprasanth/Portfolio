import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectsPage({ projects, isLightMode }) {
  return (
    <ul
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 group transition-all duration-500 ${
        isLightMode ? "bg-customBackground" : "bg-customTextColor"
      } p-2 rounded-sm text-sm md:text-base text-justify`}
    >
      {projects.map((project) => (
        <li
          key={project.title}
          className={`p-4 transition-all duration-500 flex flex-col h-full ${
            isLightMode
              ? "bg-customTextColor text-customBackground"
              : "bg-customBackground text-customTextColor"
          } rounded-lg shadow`}
        >
          {project.image && (
            <div
              className={`w-full h-auto shadow-lg ${
                isLightMode
                  ? "bg-customBackground text-customTextColor"
                  : "bg-customTextColor text-customBackground"
              }`}
            >
              <img src={project.image} alt={`${project.title}`} className="" />
            </div>
          )}

          <h2 className="text-xl text-left font-semibold mt-2 mb-2">{project.title}</h2>

          <div className="flex flex-wrap">
            {project.tools.split(", ").map((tool, index) => (
              <span
                key={index}
                className={`transition-all duration-500 ${
                  isLightMode
                    ? "bg-customBackground text-customTextColor"
                    : "bg-customTextColor text-customBackground"
                } py-1 px-2 mr-2 mt-2 rounded-sm`}
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="mt-4 mb-4 flex-grow ">{project.shortDescription}</p>

          <div className="flex gap-6 mt-auto justify-around border mx-4 md:mx-16 border-gray-400 rounded-sm p-2">
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <p className="text-sm font-medium">Source Code</p>
                <FaGithub className="text-2xl mt-1 hover:scale-125 transition-transform" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <p className="text-sm font-medium">Live Link</p>
                <FaLink className="text-2xl mt-1 hover:scale-125 transition-transform" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsPage;
