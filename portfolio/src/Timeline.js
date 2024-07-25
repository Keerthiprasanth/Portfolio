import React, { useEffect, useRef } from 'react';
import { Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

const MyTimeline = () => {
  const timelineRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    const items = [
      {
        id: 1,
        content: 'MSc. Advanced Software Engineering – Merit (2:1)',
        start: '2022-09-01',
        end: '2024-05-01',
        title: 'UNIVERSITY OF LEICESTER, Leicester, UK. Modules: Mobile and Web Applications, Advanced Web Technologies, Software Measurement and Quality Assurance, Interactive Development and User Experience',
      },
      {
        id: 2,
        content: 'BSc. Computer Science and Application - Distinction',
        start: '2018-09-01',
        end: '2021-05-01',
        title: 'SRI KRISHNA COLLEGE OF ARTS AND SCIENCE, Coimbatore, India. Modules: Software Engineering, Mobile Application Development, Data Structures and Algorithms, Java, Python, Operating System, Digital Fundamentals and Architecture, Data Communication and Networks',
      },
      {
        id: 3,
        content: 'Graduate Trainee at TATA CONSULTANCY SERVICES (TCS)',
        start: '2021-08-01',
        end: '2022-09-01',
        title: 'Gained proficiency in Java, JavaScript, HTML, CSS, and Python through immersive training. Developed a gaming map using Blender and Unity, focusing on 3D modeling and game development. Managed and maintained lease documents for US clients using IBM’s Tririga software, ensuring data accuracy and compliance. Enhanced application performance and functionality using Java.',
      }
    ];

    const options = {
      width: '100%',
      height: '400px',
      start: '2000-01-01',
      end: '2025-12-31',
      showCurrentTime: true,
      zoomable: true,
    };

    const timeline = new Timeline(container, items, options);

    timeline.on('itemover', (properties) => {
      const item = items.find((i) => i.id === properties.item);
      if (item) {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.innerHTML = item.title;
        document.body.appendChild(tooltip);
        tooltipRef.current = tooltip;

        const updateTooltipPosition = (event) => {
          if (tooltipRef.current) {
            tooltipRef.current.style.left = `${event.clientX + 10}px`;
            tooltipRef.current.style.top = `${event.clientY + 10}px`;
          }
        };

        document.addEventListener('mousemove', updateTooltipPosition);

        timeline.on('itemout', () => {
          if (tooltipRef.current && tooltipRef.current.parentNode) {
            tooltipRef.current.parentNode.removeChild(tooltipRef.current);
          }
          tooltipRef.current = null;
          document.removeEventListener('mousemove', updateTooltipPosition);
        });
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Journey</h1>
      <div ref={timelineRef} style={{ width: '100%', height: '400px' }}></div>
      <style jsx>{`
        .custom-tooltip {
          position: absolute;
          background-color: white;
          border: 1px solid #ccc;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          pointer-events: none;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default MyTimeline;
