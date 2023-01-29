import React from "react";
import { Link } from "react-scroll";

import "./nav.css";

const Nav = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <h1 onClick={() => console.log("working")}>
          Ian <span className="orange-red">Mosur</span>
        </h1>
      </div>
      <div className="navSection">
        <div className="navigation">
          
          <p><Link to='aboutBox' spy={true} smooth={true} offset={0} duration={800}>About</Link></p>
          <p><Link to='projects' spy={true} smooth={true} offset={0} duration={800}>My Work</Link></p>
          <p><Link to='ContactMe' spy={true} smooth={true} offset={0} delay={0} duration={800}>Contact Me</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
