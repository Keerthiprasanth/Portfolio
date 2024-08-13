import React from "react";

function Contact() {
  return (
    <div>
      <section
        className="p-8 h-full flex flex-col justify-center items-center bg-gray-200"
        id="contact"
      >
        <h1 className="text-3xl text-gray-800 mb-8 font-semibold">
          Contact Me
        </h1>
        <div className="text-lg text-gray-700 text-center">
          <p>
            Feel free to reach out to me for any inquiries, collaboration
            opportunities, or just to say hello!
            <br />
            You can contact me via email, or connect with me on social media.
          </p>
          <form className="grid gap-4 md:items-center md:text-center md:p-14 sm:max-xl:p-9 bg-gray-400 p-5 mt-8 rounded-lg shadow-lg">
            <input
              className="rounded-lg opacity-0 pl-3 h-12 animate-fadeInLeftToRight"
              type="email"
              placeholder="Email"
              required
              style={{ animationDelay: "0.2s" }}
            />
            <input
              className="rounded-lg opacity-0 pl-3 h-12 animate-fadeInLeftToRight"
              type="text"
              placeholder="Name"
              required
              style={{ animationDelay: "0.4s" }}
            />
            <textarea
              className="rounded-lg opacity-0 p-3 h-40 md:h-60 animate-fadeInLeftToRight"
              placeholder="Message"
              required
              style={{ animationDelay: "0.6s" }}
            ></textarea>
            <button
              className="rounded-lg opacity-0 h-12 w-20 bg-white text-green-500 hover:bg-green-200 border border-green-500 transition-all animate-fadeInLeftToRight"
              style={{ animationDelay: "0.8s" }}
            >
              Send
            </button>
          </form>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Email:</h3>
            <a
              href="mailto:rkpkeerthi22@gmail.com"
              className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
            >
              rkpkeerthi22@gmail.com
            </a>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Social Media:</h3>
            <div>
              </div>
            <div className="flex items-center justify-center space-x-4">
            
              <a
                href="https://www.linkedin.com/in/keerthi-prasanth-ravichandran-b15b84252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                className="w-8"
                alt="LinkedIn"
              />
              </a>
              <a
                href="https://github.com/keerthiprasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black inline-block transition-all transform hover:scale-110"
              >
                <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8"
                alt="GitHub"
              />
              </a>
              <a
                href="https://www.instagram.com/keerthi_prasanth_r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                className="w-8"
                alt="Instagram"
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
