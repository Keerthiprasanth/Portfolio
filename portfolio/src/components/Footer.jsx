import React, { useState, useEffect } from "react";

function Footer({ isLightMode }) {
  const [theme, setTheme] = useState(isLightMode);

  useEffect(() => {
    setTheme(isLightMode);
  }, [isLightMode]);
  
  return (
    <div>
      <footer className={`transition-all duration-500 ${
          theme
            ? "bg-customTextColor text-customBackground"
            : "bg-customBackground text-customTextColor"
        } p-4 text-center w-full font-volkhov`}>
        <div className="max-w-lg mx-auto">
          <p className="text-sm md:text-lg">
            © 2025 Keerthi Prasanth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
