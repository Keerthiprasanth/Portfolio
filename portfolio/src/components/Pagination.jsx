import React from "react";

function Pagination({ projectsPerPage, totalProjects, paginate, currentPage, isLightMode }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-8">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <button
              onClick={() => paginate(number)}
              offset={-280}
              className={`inline-block px-4 py-2 rounded-md font-semibold transition-all duration-500 ${
                isLightMode
                  ? "bg-customBackground text-customTextColor"
                  : "bg-customTextColor text-customBackground"
              } ${
                number === currentPage
                  ? "bg-gray-500 text-customTextColor scale-125 shadow-lg" 
                  : "hover:bg-gray-500 hover:text-customTextColor"
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
