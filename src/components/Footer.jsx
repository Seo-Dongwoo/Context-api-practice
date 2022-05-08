import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "white",
        height: "100px",
      }}
    >
      <button
        className="button"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
        }}
        onClick={toggleTheme}
      >
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
