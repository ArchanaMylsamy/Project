import React from "react";
import "./otp.css";
import "./login";
import { Link } from "react-router-dom";
const otp = () => {
  return (
    <div className="mac-book-air-47otp">
      <div className="image-30otp">
        <div className="rectangle-4otp">
          <span className="otp-verificationotp">OTP Verification</span>
          <img className="image-88otp" />
          <span className="otp-sent-to-91otp">OTP sent to 91**</span>
          <div className="flex-containerotp">
            <input className="rectangle-106otp" placeholder="*" type="num" />
            <input className="rectangle-107otp" placeholder="*" type="num" />
            <input className="rectangle-108otp" placeholder="*" type="num" />
            <input className="rectangle-109otp" placeholder="*" type="num" />
          </div>
          <button className="otpotp">
          <span className="didnt-receive-otp-reotp">
            Didn’t receive OTP?</span></button>
           <button className="otp"><span className="didnt-receive-otp-reotp">
             Resend OTP
          </span></button>
          <a><Link to="/Home"className="linkotp">
           <span className="confirmotp">CONFIRM</span>
          </Link></a>
        </div>
      </div>
    </div>
  );
};
export default otp;