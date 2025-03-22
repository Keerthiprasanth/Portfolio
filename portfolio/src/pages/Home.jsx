import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profileImage from "../images/Cropped_profile.jpeg";

function Home({ isLightMode }) {
  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);

  return (
    <div>
      <section
        className={`relative flex flex-col items-center text-center min-h-screen md:p-14 p-2 sm:max-xl:p-2 transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } font-volkhov`}
        id="home"
      >
        <div>
          <img
            src={profileImage}
            alt="Profile Image"
            className={`w-56 h-56 md:w-64 md:h-64 mt-12 md:mt-4 rounded-full object-cover border ${
              theme
                ? "shadow-md shadow-customBackground border-customBackground"
                : "shadow-md shadow-customTextColor border-customTextColor"
            }`}
          />
        </div>

        <div className="text-lg lg:text-2xl sm:max-w-xl lg:max-w-4xl px-4 text-center mt-16 md:mt-8">
          <h1 className="text-lg md:text-2xl">
            Hello and welcome to my portfolio!
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 md:mt-8">
            <span className="bg-gradient-to-r from-additionalColors-4 via-additionalColors-1 to-additionalColors-3 text-transparent bg-clip-text">I'm Keerthi Prasanth Ravichandran,</span> based in the UK
          </h1>

          <div className="text-xl md:text-2xl font-semibold mt-6">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Full-Stack Web Developer", "Android Developer"],
              }}
            />
          </div>

          <div className="flex justify-center mt-14 hover:text-gray-400">
            <Link
              to="#skills"
              smooth={true}
              duration={500}
              className="cursor-pointer flex flex-col items-center transition-all transform hover:scale-110"
              >
              <p className="mb-4 text-lg">Explore my skills</p>
              <FaArrowAltCircleDown className="text-4xl animate-bounce" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
