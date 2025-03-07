import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TCS_logo from "../images/TCS_logo.png";
import UOL_logo from "../images/UOL_logo.png";
import SKASC_logo from "../images/SKASC_logo.avif";

function Timeline() {
  const items = [
    {
      id: 1,
      title: "MSc. Advanced Software Engineering – Merit (2:1)",
      location: "University of Leicester, Leicester, UK",
      date: "Sept 2022 - Jan 2024",
      icon: UOL_logo,
      content:
        "Modules: Mobile and Web Applications, Advanced Web Technologies, Software Measurement and Quality Assurance, Interactive Development and User Experience",
    },
    {
      id: 2,
      title: "Graduate Trainee",
      location: "Tata Consultancy Services (TCS), Chennai, India",
      date: "Aug 2021 - Sept 2022",
      icon: TCS_logo,
      content:
        "Gained proficiency in Java, JavaScript, HTML, CSS, and Python through immersive training. Developed a gaming map using Blender and Unity, focusing on 3D modeling and game development. Managed and maintained lease documents for US clients using IBM’s Tririga software, ensuring data accuracy and compliance. Enhanced application performance and functionality using Java.",
    },
    {
      id: 3,
      title: "BSc. Computer Science and Application - Distinction",
      location: "Sri Krishna College of Arts and Science, Coimbatore, India",
      date: "June 2018 - May 2021",
      icon: SKASC_logo,
      content:
        "Modules: Software Engineering, Mobile Application Development, Data Structures and Algorithms, Java, Python, Operating System, Digital Fundamentals and Architecture, Data Communication and Networks",
    },
  ];

  return (
    <div>
      <section
        id="timeline"
        className="pt-16 p-8 h-auto flex flex-col justify-center items-center bg-gray-200"
      >
        {/* <MyTimeline /> */}
        <div className="max-w-3xl text-center mb-8">
          <h1 className="text-3xl text-gray-800 mb-8 font-semibold">
            Timeline
          </h1>
          <VerticalTimeline>
            {items.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: "#ffffff" }}
                  icon={
                    <img
                      src={element.icon}
                      alt="icon"
                      className="w-full h-full p-1 rounded-xl"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle font-bold">
                    {element.location}
                  </h5>
                  <p className="transition-opacity duration-300 opacity-80 group-hover:opacity-100">
                    {element.content}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
