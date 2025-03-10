import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TCS_logo from "../images/TCS_logo.png";
import UOL_logo from "../images/UOL_logo.png";
import SKASC_logo from "../images/SKASC_logo.avif";
import Door_Valley_logo from "../images/DOOR_VALLEY-logo.png";

function Timeline({ isLightMode }) {
  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);

  const items = [
    {
      id: 0,
      title: "Digital Operations Associate",
      location: "Door Valley, Leicester, UK",
      date: "Jan 2025 - Present",
      icon: Door_Valley_logo,
      content: "//////// CONTENT REQUIRED ////////",
    },
    {
      id: 1,
      title: "MSc. Advanced Software Engineering – Merit (2:1)",
      location: "University of Leicester, Leicester, UK",
      date: "Sept 2022 - Jan 2024",
      icon: UOL_logo,
      content:
        "Modules: Mobile and Web Applications, Advanced Web Technologies, Software Measurement and Quality Assurance, Interactive Development and User Experience.",
    },
    {
      id: 2,
      title: "Graduate Trainee",
      location: "Tata Consultancy Services (TCS), Chennai, India",
      date: "Aug 2021 - Sept 2022",
      icon: TCS_logo,
      content:
        "Gained proficiency in Java, JavaScript, HTML, CSS, and Python through immersive training. Developed a gaming map using Blender and Unity, focusing on 3D modeling and game development. Managed and maintained lease documents for US clients using IBM’s Tririga software, ensuring data accuracy and compliance.",
    },
    {
      id: 3,
      title: "BSc. Computer Science and Application - Distinction",
      location: "Sri Krishna College of Arts and Science, Coimbatore, India",
      date: "June 2018 - May 2021",
      icon: SKASC_logo,
      content:
        "Modules: Software Engineering, Mobile Application Development, Data Structures and Algorithms, Java, Python, Operating Systems, Digital Fundamentals and Architecture, Data Communication and Networks.",
    },
  ];

  return (
    <div>
      <section
        id="timeline"
        className={`pt-16 p-4 min-h-screen flex flex-col items-center transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } font-volkhov`}
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold">Timeline</h1>
        </div>

        <VerticalTimeline>
          {items.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-customBackground font-semibold bg-transparent md:text-white"
              contentStyle={{ padding: "8px 12px", fontSize: "14px" }}
              contentArrowStyle={{ borderRight: "10px solid #ffffff" }}
              iconStyle={{
                background: "#ffffff",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                padding: "1px"
              }}
              icon={
                <img
                  src={element.icon}
                  alt={element.title}
                  className="w-full h-full p-2 rounded-full"
                />
              }
            >
              <h3 className="text-base md:text-lg font-bold text-customBackground">
                {element.title}
              </h3>
              <h5 className="text-sm md:text-base font-medium text-gray-700">
                {element.location}
              </h5>
              <p
                className="text-xs md:text-sm lg:text-base mt-1 text-customBackground"
                style={{ fontSize: "13px" }}
              >
                {element.content}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
}

export default Timeline;
