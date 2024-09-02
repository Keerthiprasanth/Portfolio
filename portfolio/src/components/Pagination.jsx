import React from "react";

function Pagination({ projectsPerPage, totalProjects, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
