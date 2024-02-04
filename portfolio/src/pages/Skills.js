// Skills.js

import React from 'react';
// import './Skills.css';

function Skills() {
  const skillsList = ["HTML", "CSS", "React.js", "Node.js", "Express.js", "XML", "Java"];

  return (
    <div className='skills'>
      <h1>Skills</h1>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
