import React from "react";
import "./welcome"
import { Link } from "react-router-dom";
import "./logo.css";

import img1 from './images/Logo remake.png';
const Logo = () => {
  return (
    <>
  <div className="blogo">
  <img className="logologo" src={img1}></img>;
  <div className="nextlogo">
   <a><Link to="/Welcome"><img className="imglogo" src="https://cdn-icons-png.flaticon.com/512/189/189253.png"></img></Link></a>
  </div>
  </div>
  </>
  )
};

export default Logo;