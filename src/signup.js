import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import "./home"
const signup = () => {
  return (
    <div className="registersignup">
      <div className="bgsignup">
        <div className="rec-8signup">SIGN UP</div>
        <div className="rect-9signup">
          <div className="flexsignup">
            <form>
            <h4>
              Firstname
              <input type="text" className="recta-15signup" placeholder="Enter your name" ></input>
              </h4>
              
    
            <h4>Email Id <input type="text" className="recta-14signup" placeholder="eg.abc@domain.com" ></input></h4>
            <h4>Phone Number<input type="text" className="recta-13signup" placeholder="9890-xxx" ></input></h4>
            <h4>Password<input type="text" className="recta-12signup" placeholder="***" ></input></h4>
            </form>
          </div>
        </div><div>
       <a><Link to="/Home"className="linksignup">
         SIGN-IN
       </Link></a> 
      </div></div>  
     </div>
    
  );
};
export default signup;