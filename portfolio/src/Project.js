import React, { useState } from 'react';

const Project = ({ title, tools, shortDescription, fullDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic">{tools}</p>
      <p className="mt-2">{shortDescription}</p>
      {isExpanded && (
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          {fullDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button
        className="text-blue-500 mt-2 focus:outline-none"
        onClick={handleToggle}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Project;
