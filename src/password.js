import React from "react";
import { Link } from "react-router-dom";
import "./password.css";
import "./login"
import "./password"
import "./signup"
const password = () => {
  return (
    <div className="password-pagepassword">
      <div className="bg-4-1password">
        <button className="rectangle-16password">RESET PASSWORD</button>
        <div className="rectangle-17password">
          <div className="flex-containerpassword">
            <form>
            <h4> Phone Number<input type="number" className="rectangle-18password" placeholder="9003-yyy" ></input></h4>
            <h4>New Password<input type="password" className="rectangle-19password" placeholder="**"></input></h4>
            <h4> Re-enter Password<input type="password" className="rectangle-20password" placeholder="**" ></input></h4>
            </form>
          </div>
        </div>
        <div className="flex-container-1password">
          <a><Link to="/Signup" className="linkpassword"><button className="rectangle-21password">SIGN UP</button></Link></a>
          <a><Link to="/Password"className="linkpassword"><button className="rectangle-16-1password">RESET</button></Link></a>
          <a><Link to="/Login"className="linkpassword"><button className="rectangle-22password">LOGIN</button></Link></a>
        </div>
      </div>
    </div>
  );
};
export default password;