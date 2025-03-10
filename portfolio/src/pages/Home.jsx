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
        className={`relative flex flex-col items-center text-center min-h-screen md:p-14 p-8 sm:max-xl:p-9 transition-all duration-500 ${
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
            className="w-64 h-64 p-1 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="text-lg lg:text-2xl sm:max-w-xl lg:max-w-4xl px-4 text-center mt-6">
          <h1 className="text-2xl">Hello and welcome to my portfolio!</h1>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-4">
            I'm Keerthi Prasanth Ravichandran, based in the UK
          </h1>

          <div className="text-xl mt-4">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Full-Stack Web Developer", "Android Developer"],
              }}
            />
          </div>

          <div className="flex items-center justify-center mt-8 hover:text-gray-400">
            <p className="mr-4">Explore my skills</p>
            <Link
              to="#skills"
              smooth={true}
              duration={500}
              className="transition-all transform hover:scale-110 animate-bounce"
            >
              <FaArrowAltCircleDown className="text-4xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
