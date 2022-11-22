import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import "./home"
import "./signup"
import "./otp"
import "./password"

const Login = () => {
  return (
    <div className="pagelogin">
      <div className="bglogin">
        <span className="enterlogin">LOGIN</span>
        <div className="formslogin">
        <form>
        <span className="nameheadlogin">NAME</span>
        <input type="text" className="name1headlogin"></input><br></br>
        <span className="passwordheadlogin">PASSWORD</span>
        <input type="password" className="password1headlogin"></input><br></br>
        <span className="phoneheadlogin">PHONE NO</span>
        <input type="number" className="phone1headlogin"></input><br></br>
        </form>
        </div>
        <a><Link to="/Otp" className="link1login"><div className="signlogin"><button className="boxlogin">SIGN IN</button></div></Link></a>
        <div className="flexlogin">
        <a><Link to="/Signup" className="link2login"><div><button className="box1login">Create an account!</button></div></Link></a>
        <a><Link to="/Password" className="link3login"><div><button className="box2login">Forgot password?</button></div></Link></a>
        </div>
      </div>
    </div>
  );
};
export default Login;

