import { useState } from "react";
import Task from "../Task/Task";
export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
  };
};

const ThemeToggler = ({ data }) => {
  const { theme, toggleTheme } = useTheme();
  const filteredData = data.filter((item) => item.title === "Theme Toggler");
  const textColor = theme === "light" ? "black" : "white";
  const backgroundColor = theme === "light" ? "white" : "black";

  return (
    <>
      <div
        style={{
          height: "100vh",
          transition: "0.3s ease-in",
          backgroundColor: backgroundColor,
        }}
      >
        <div>
          <Task filteredData={filteredData} textColor={textColor} />
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default ThemeToggler;
