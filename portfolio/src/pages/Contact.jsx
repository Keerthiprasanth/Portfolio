import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Gmail_logo from "../images/Gmail_logo.webp";
import Instagram_logo from "../images/Instagram_logo.webp";
import GitHub_logo from "../images/GitHub_logo.png";
import LinkedIn_logo from "../images/LinkedIn_logo.png";
import LeetCode_logo from "../images/LeetCode_logo.png";

function Contact({ isLightMode }) {
  const form = useRef(null);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          alert("Thanks for reaching out! I will get back to you soon");
          console.log("Success:", response);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.error("Error:", error);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contactRef}>
      <section
        className={`pt-16 p-4 h-full md:min-h-screen flex flex-col items-center transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } font-volkhov text-sm md:text-lg text-justify"
        `}
        id="contact"
      >
        <h1 className="text-3xl mb-8 font-semibold">Contact Me</h1>
        <div className="text-sm md:text-lg text-justify">
          <p>
            Feel free to reach me out for any inquiries, collaboration
            opportunities, or just to say hello!
          </p>
          <p className="mt-2">
            You can contact me via email, or connect with me on social media.
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className={`grid gap-2 md:gap-4 md:items-center md:text-center p-4 md:p-8 sm:max-xl:p-9 ${
              theme
                ? "bg-customTextColor text-customBackground border-customBackground border-2"
                : "bg-customBackground text-customTextColor border-customTextColor border-2"
            } mt-4 rounded-lg shadow-lg transition-opacity opacity-0 transform ${
              isVisible ? "animate-fadeInLeftToRight" : "opacity-0"
            }`}
          >
            <input
              className={`rounded-lg pl-3 h-10 md:h-12 transition-opacity opacity-0 transform ${
                theme
                  ? "bg-lightTheme-50 text-customBackground placeholder-gray-400"
                  : "bg-darkTheme-TEXT text-customBackground placeholder-gray-600"
              } ${
                isVisible ? "animate-fadeInLeftToRight" : "opacity-0"
              }`}
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              required
              onChange={handleChange}
              style={{ animationDelay: "0.2s" }}
            />
            <input
              className={`rounded-lg pl-3 h-10 md:h-12 text-customBackground transition-opacity opacity-0 transform ${
                theme
                  ? "bg-lightTheme-50 text-customBackground placeholder-gray-400"
                  : "bg-darkTheme-TEXT text-customBackground placeholder-gray-600"
              } ${
                isVisible ? "animate-fadeInLeftToRight" : "opacity-0"
              }`}
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              onChange={handleChange}
              style={{ animationDelay: "0.4s" }}
            />
            <textarea
              className={`rounded-lg p-3 h-32 md:h-40 text-customBackground transition-opacity opacity-0 transform ${
                theme
                  ? "bg-lightTheme-50 text-customBackground placeholder-gray-400"
                  : "bg-darkTheme-TEXT text-customBackground placeholder-gray-600"
              } ${
                isVisible ? "animate-fadeInLeftToRight" : "opacity-0"
              }`}
              placeholder="Enter Your Message"
              name="message"
              required
              onChange={handleChange}
              style={{ animationDelay: "0.6s" }}
            ></textarea>
            <button
              type="submit"
              className={`rounded-lg h-12 w-20 border-2 transition-opacity opacity-0 transform ${
                theme
                  ? "bg-customTextColor text-customBackground border-customBackground hover:bg-customBackground hover:text-customTextColor"
                  : "bg-customBackground text-customTextColor border-customTextColor hover:bg-customTextColor hover:text-customBackground"
              } ${
                isVisible ? "animate-fadeInLeftToRight" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              Send
            </button>
          </form>
          <div className="mt-14">
            <h3 className="text-lg text-center mb-4">Social</h3>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/keerthi-prasanth-ravichandran-b15b84252/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all transform hover:scale-125"
              >
                <img
                  src={LinkedIn_logo}
                  className="w-8"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/keerthiprasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all transform hover:scale-125"
              >
                <img
                  src={GitHub_logo}
                  className="w-8 bg-customTextColor rounded-lg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://leetcode.com/u/keerthi_prasanth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all transform hover:scale-125"
              >
                <img
                  src={LeetCode_logo}
                  className="w-8"
                  alt="LeetCode"
                />
              </a>
              <a
                href="https://www.instagram.com/keerthi_prasanth_r/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all transform hover:scale-125"
              >
                <img
                  src={Instagram_logo}
                  className="w-8"
                  alt="Instagram"
                />
              </a>
              <a
                href="mailto:rkpkeerthi22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all transform hover:scale-125"
              >
                <img
                  src={Gmail_logo}
                  className="w-8"
                  alt="Gmail"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
