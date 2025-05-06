import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full transition duration-300 bg-base-200 text-base-content hover:scale-110 shadow-md"
    >
      <div className="relative w-6 h-6">
        <FiSun
          className={`absolute transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-45 scale-0"
          }`}
          size={24}
        />
        <FiMoon
          className={`absolute transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-0"
          }`}
          size={24}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
