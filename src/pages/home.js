import React from "react";
import "./home.css";
import { Link, animateScroll as scroll } from "react-scroll";

import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <html>
      <body class="bg-black">
        <Nav />
        <Header />
        <About />
        <Work />
        <Footer />
      </body>
    </html>
  );
};

export default Home;
