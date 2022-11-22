import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import "./login"
const welcome = () => {
  return (
    <div className="intro-pagewelcome">
      <div className="bg-11-1welcome">
        <span className="w-e-l-c-o-m-e-s-y-owelcome">W e l c o m e s Y o u !</span>
        <button className="rectangle-1welcome">
          <span className="irrigreatwelcome">IRRIGREAT</span>
        </button>
        <div className="clickwelcome"><a><Link to="/Login"className="link1welcome">
          LOGIN
        </Link></a></div>
      </div>
    </div>
  );
};
export default welcome;
