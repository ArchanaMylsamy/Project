import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import "./home"
import "./service"
import "./about"
import "./contact"

const about = () => {
  return (
    <div className="about-us-pageaboutus">
      <div className="bg-5-1aboutus">
      <div className="group-33885aboutus">
          <a><Link to="/Home"className="link1aboutus"><span className="homeaboutus">HOME </span></Link></a>
          <a><Link to="/Service"className="link2aboutus"><span className="servicesaboutus">SERVICES </span></Link></a>
          <a><Link to="/About"className="link3aboutus"><span className="about-usaboutus">ABOUTUS </span></Link></a>
          <a><Link to="/Contact"className="link4aboutus"><span className="contactaboutus"> CONTACT</span></Link></a>
      </div>
        
        <span className="about-us-1aboutus">ABOUT US</span>
        <span className="irrigreat-helps-farmaboutus">
          Irrigreat helps farmers by farming experts on way to prevent and
          tackle pests and crop disesases through interactive features on the
          app.Farmers can monitor the condition of the soil in conjunction with
          weather information so as to be better equiped for the planting and
          harvest season.{" "}
        </span>
      </div>
    </div>
  );
};
export default about;
