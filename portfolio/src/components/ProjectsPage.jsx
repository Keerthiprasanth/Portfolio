import React from "react";

function ProjectsPage({ projects }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 group bg-gray-200 p-4 rounded-lg">
      {projects.map((project) => (
        <li key={project.title} className="mb-4 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          {project.tools.split(", ").map((tool, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 py-1 px-2 mr-2 mb-1 rounded"
            >
              {tool}
            </span>
          ))}
          <p className="text-gray-600 mt-1 mb-1">{project.shortDescription}</p>
          {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black inline-block transition-all transform hover:scale-110"
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
