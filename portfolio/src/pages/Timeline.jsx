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
      content:
        "Door Valley is a fire door manufacturing company headquartered in the midlands of the United Kingdom. My responsibilities here involve software development and digital marketing. I collaborated with cross-functional teams on system upgrades, ensuring minimal downtime and offering technical assistance to end-users by addressing software issues efficiently. Working with a diverse set of individuals, I am also in the position of handling the digital marketing platforms and delivering the required assistance for the overseas sales team.",
    },
    {
      id: 1,
      title: "MSc. Advanced Software Engineering – Merit (2:1)",
      location: "University of Leicester, Leicester, UK",
      date: "Sept 2022 - Jan 2024",
      icon: UOL_logo,
      content:
        "My master's degree involves in a wide range of learning to kick start my career as Software Engineer. Key modules includes Mobile and Web Applications, Advanced Web Technologies, Software Measurement and Quality Assurance, Interactive Design and User Experience.",
    },
    {
      id: 2,
      title: "Software Developer Trainee",
      location: "Tata Consultancy Services (TCS), Chennai, India",
      date: "Aug 2021 - Sept 2022",
      icon: TCS_logo,
      // "Gained proficiency in Java, JavaScript, HTML, CSS, and Python through immersive training. Developed a gaming map using Blender and Unity, focusing on 3D modeling and game development. Managed and maintained lease documents for US clients using IBM’s Tririga software, ensuring data accuracy and compliance.",
      content:
        "Tata Consultancy Services is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for more than 50 years. I worked for US-based real estate clients by developing the lease management workflows using Tririga as the integration software. I created automated workflows to manage the lifecycle of a lease agreement such as lease creation, approval process, renewals and terminations. Collaborated as a team player by actively participating in project discussions and supporting colleagues to achieve common goals.",
    },
    {
      id: 3,
      title: "BSc. Computer Science and Application - Distinction",
      location: "Sri Krishna College of Arts and Science, Coimbatore, India",
      date: "June 2018 - May 2021",
      icon: SKASC_logo,
      content:
        "This bachelor's degree is a strong foundation for me in basics of programming. Key modules includes Software Engineering, Mobile Application Development, Data Structures and Algorithms, Java, Operating Systems, Digital Fundamentals and Architecture, Data Communication and Networks.",
    },
  ];

  return (
    <div>
      <section
        id="timeline"
        className={`pt-16 p-4 min-h-screen flex flex-col items-center transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customTextColor"
            : "bg-customBackground text-customBackground"
        } font-volkhov text-justify`}
      >
        <div className="text-center mb-4">
          <h1
            className={`text-3xl font-semibold ${
              theme ? "text-customBackground" : "text-customTextColor"
            }`}
          >
            Timeline
          </h1>
        </div>

        <VerticalTimeline lineColor={isLightMode ? "#000000" : "#ffffff"}>
          {items.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName={`font-bold
              ${
                isLightMode ? "text-gray-500" : "text-gray-400"
              }
              `}
              contentStyle={{
                background: isLightMode ? "#000000" : "#ffffff",
                maxWidth: "600px",
                padding: "8px 12px",
                fontSize: "14px",
              }}
              contentArrowStyle={{
                borderRight: isLightMode
                  ? "12px solid #000000"
                  : "12px solid #ffffff",
              }}
              iconStyle={{
                background: "#ffffff",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                padding: "1px",
              }}
              icon={
                <img
                  src={element.icon}
                  alt={element.title}
                  className="w-full h-full p-2 rounded-full"
                />
              }
            >
              <h3
                className={`text-base md:text-lg font-bold ${
                  theme ? "text-customTextColor" : "text-customBackground"
                }`}
              >
                {element.title}
              </h3>
              <h5
                className={`text-sm md:text-base font-medium ${
                  theme ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {element.location}
              </h5>
              <p
                className={`text-xs md:text-sm lg:text-base mt-1 ${
                  theme ? "text-customTextColor" : "text-customBackground"
                }`}
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
