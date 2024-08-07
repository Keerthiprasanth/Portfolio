import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import React from 'react'
import { useSearchParams } from "react-router-dom";

function Home() {
    const [state] = useState([
        "Software Developer"
    ])
  return (
    <div>
      <section
          className="grid gap-8 md:grid-cols-2 md:items-center md:text-center min-h-screen md:p-14 sm:max-xl:p-9 bg-gray-100"
          id="home"
        >
          <div>
            <img className="p-4" src="https://thumbs.dreamstime.com/b/web-design-icon-website-webpage-developer-editable-stroke-vector-icon-web-design-icon-website-webpage-developer-editable-stroke-289252930.jpg" alt="" className="w-full rounded-lg"></img>
            </div>
          <div className="text-lg lg:text-2xl text-gray-700 max-w-xl lg:max-w-2xl px-4 text-center mb-16">
            
            <h1 className="text-xl  text-gray-800 mb-1">
              Hello and welcome to my portfolio! <br /> I am
            </h1>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-1 animate-pulse">Keerthi Prasanth Ravichandran</h1>

            <Typewriter className="text-xl  text-gray-800" options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: ["Software Developer", "Software Engineer"]
            }

            }/>
            {/* <p className="mb-4">
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
            </p> */}
            <div className="text-gray-600 hover:text-gray-800 flex items-center justify-center mt-6">
            <p className="mr-4">Explore my skills</p>
            <Link
              to="#skills"
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-800 transition-all transform hover:scale-110 animate-bounce"
            >
              <FaArrowAltCircleDown className="text-4xl" />
            </Link>
          </div>
          </div>
          
        </section>
    </div>
  )
}

export default Home
