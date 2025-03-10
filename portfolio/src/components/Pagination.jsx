import React from "react";

function Pagination({ projectsPerPage, totalProjects, paginate, currentPage }) {
  const pageNumbers = [];
  console.log("Current page - ",currentPage);
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <button
              onClick={() => paginate(number)}
              className={`inline-block px-4 py-2 rounded-md transition-colors duration-200 ${
                number === currentPage
                  ? "bg-gray-600 text-customTextColor" 
                  : "bg-customTextColor text-customBackground hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
