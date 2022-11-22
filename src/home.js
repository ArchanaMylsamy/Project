import React from 'react'
import "./home.css";
import img1 from './images/Logo remake.png';
import { Link } from 'react-router-dom';
import "./home"
import "./service"
import "./about"
import "./contact"


const home = () => {
  return (
    <>
   <div class="v1_4home">
    <div class="v2_14home"></div>
    <div class="v82_180home"></div>
    <span class="v15_2home">F   I   E   L   D   I   S   F   U   T   U   R   E</span>
    <span class="v2_27home">
      <div className='headhome'>GO GO AGRO</div>
      <div className='sideheadhome'>Adding Green To Your Life</div></span>
<div class="v277_484home">
  <span class="v2_22home">SERVICES  </span>
  <a><Link to="/Service" className="v2_22home">SERVICES</Link></a>
  <div class="v2_36home">
    </div>
    <a href='/Contact' class="v2_23home">CONTACT</a>

    
    <a href='/About' class="v2_25home">ABOUT US</a>
   
    <a href='/Home' class="v2_21home">HOME</a>
    
    </div><span class="v2_19home">IRRIGREAT</span>
    <div class="v2_18home"> </div> <img className="imagelogohome" src={img1}/></div>
    </>
  );
};
export default home;
