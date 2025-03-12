import React, { useState, useEffect } from "react";

function ProjectsPage({ projects, isLightMode }) {

  return (
    <ul
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 group transition-all duration-500 ${
        isLightMode
          ? "bg-customBackground"
          : "bg-customTextColor"
      } p-2 rounded-sm text-sm md:text-base`}
    >
      {projects.map((project) => (
        <li
          key={project.title}
          className={`p-4 transition-all duration-500 ${
            isLightMode
              ? "bg-customTextColor text-customBackground"
              : "bg-customBackground text-customTextColor"
          } rounded-lg shadow`}
        >
          <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
          {project.tools.split(", ").map((tool, index) => (
            <span
              key={index}
              className={`transition-all duration-500 ${
                isLightMode
                  ? "bg-customBackground text-customTextColor"
                  : "bg-customTextColor text-customBackground"
              } py-1 px-2 mr-2 rounded`}
            >
              {tool}
            </span>
          ))}
          <p className="mt-4 mb-4">{project.shortDescription}</p>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black bg-customTextColor rounded-sm p-1 inline-block transition-all transform hover:scale-125"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8"
                alt="GitHub"
              />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectsPage;
