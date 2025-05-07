import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-base-200 text-base-content 
                 transition-all duration-500 ease-in-out 
                 hover:scale-110 hover:rotate-6 shadow-md"
    >
      <div className="relative w-6 h-6">
        <FiSun
          className={`absolute transition-all duration-500 ease-in-out transform h-5 w-5 md:h-7 md:w-7 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-0"
          }`}
        />
        <FiMoon
          className={`absolute transition-all duration-500 ease-in-out transform h-5 w-5 md:h-7 md:w-7 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-45 scale-0"
          }`}
          size={24}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
