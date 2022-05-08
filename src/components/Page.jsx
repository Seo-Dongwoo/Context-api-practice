import React, { useContext } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeContext";

const Page = () => {
  const data = useContext(ThemeContext);

  console.log(data);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
