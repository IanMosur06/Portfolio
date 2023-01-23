import React from "react";

import "./nav.css"

const Nav = () => {
    function test(){
        console.log("Test!")
      }
      return (
        <div className="NavBar">
          <div className="logo">
            This will be the logo
          </div>
          <div className="navigation">
            <a>About</a>
            <a>My Work</a>
            <a>Contact Me</a>
          </div>
        </div>
      );
};

export default Nav;