import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";

import React from 'react'

function Home() {
  return (
    <div>
      <section
          className="p-4 lg:p-8 lg:pt-20 min-h-screen flex flex-col justify-center items-center bg-gray-100"
          id="home"
        >
          <div className="content text-lg lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl px-4 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="header text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
              Hello and welcome to my portfolio!
            </h1>
            <p className="mb-4">
              I'm{" "}
              <span className="font-bold">Keerthi Prasanth Ravichandran</span>,
              a passionate software engineer who recently completed my Master's
              in Advanced Software Engineering from the University of Leicester
              in the UK.
            </p>
            <p className="mb-4">
              With a strong foundation in both theoretical knowledge and
              practical application, I'm excited to showcase my skills and
              projects to you.
            </p>
            <p className="mb-4">
              As a software developer, my primary goal is to leverage technology
              to create meaningful solutions that enhance people's lives.
              Whether it's through developing user-friendly applications,
              optimizing performance, or solving complex challenges, I strive to
              make a positive impact through my work.
            </p>
          </div>
          <div className="content text-gray-600 hover:text-gray-800 flex items-center justify-center mt-6 lg:mt-0">
            <p className="mr-2">Explore my skills</p>
            <Link
              to="#skills"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-800 transition-all transform hover:scale-110 animate-bounce"
            >
              <FaArrowAltCircleDown className="text-4xl" />
            </Link>
          </div>
        </section>
    </div>
  )
}

export default Home
