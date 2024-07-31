import React from 'react'

function Contact() {
  return (
    <div>
              <section
          className="p-8 h-screen flex flex-col justify-center items-center bg-gray-200"
          id="contact"
        >
          <h1 className="text-3xl text-gray-800 mb-8 font-semibold">
            Contact Me
          </h1>
          <div className="text-lg text-gray-700">
            <p>
              Feel free to reach out to me for any inquiries, collaboration
              opportunities, or just to say hello!
            </p>
            <p>
              You can contact me via email, or connect with me on social media.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Email:</h3>
            <a
              href="mailto:rkpkeerthi22@gmail.com"
              className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
            >
              rkpkeerthi22@gmail.com
            </a>{" "}
            <h3 className="text-lg font-semibold mt-4 mb-2">Social Media:</h3>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/keerthi-prasanth-ravichandran-b15b84252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/keerthiprasanth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black inline-block transition-all transform hover:scale-110"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/keerthi_prasanth_r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-block transition-all transform hover:scale-110"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact