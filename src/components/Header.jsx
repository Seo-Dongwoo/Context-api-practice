import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "0" }}>
        Welcome useContext
      </h1>
    </header>
  );
};

export default Header;
