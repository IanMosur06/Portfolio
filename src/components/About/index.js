import React from "react";

import "./about.css";
import Design from '../Design'

const About = () => {
  return (
    <div id="aboutBox">
      <div className="topSection">
        <div className="box1">
          <div classname="box1Title">Languages</div>
          <div className="box1Text">
            HTML · Cascading Style Sheets (CSS) · JavaScript · REST APIs ·
            Node.js · Object-Oriented Programming (OOP) · Express.js · MySQL ·
            NoSQL · Mongoose ODM · GitHub · Handlebars.js · Sequelize.js ·
            React.js · jQuery · MongoDB · Git
          </div>
        </div>
        <div className="section1">
          <div classname="section1Text"> 
          <Design />
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="section2">
          <div classname="section2Text"></div>This is text 2
        </div>
        <div className="box2">
          <div classname="box1Text">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
