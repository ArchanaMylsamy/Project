import "./contact.css";

const contact = () => {
  return (
    <div className="contact-page">
      <div className="bg-6-1">
      <div className="group-33885">
          <span className="home">HOME </span>
          <span className="services">SERVICES </span>
          <span className="about-us">ABOUTUS </span>
          <span className="contact"> CONTACT</span>
        </div><br></br>
       
        <span className="contact-1">CONTACT</span>
        <div className="flex-container-1">
          <img className="vector" src="https://cdn-icons-png.flaticon.com/512/535/535188.png"/>
          <span className="tamil-nadu-india">TamilNadu ,India</span>
        </div>
        <div className="flex-container-2">
          <img className="vector-1" src="https://cdn-icons-png.flaticon.com/512/126/126509.png"/>
          <span className="num">+91 9080765605</span>
        </div>
        <div className="flex-container-3">
          <img className="vector-2" src="https://cdn-icons-png.flaticon.com/512/542/542689.png"/>
          <span className="num-727721-euit-011-skce">
            727721euit011@skcet.ac.in
          </span>
        </div>
        <div className="form">
        <input className="rectangle-24" placeholder="Name" type="text" />
        <input className="rectangle-24" placeholder="Phone number or email" type="text" />
        <input className="rectangle-24" placeholder="Message" type="text" />
        <button className="rectangle-26">
          <span className="send">SEND</span>
        </button></div></div>
      </div>
 

  );
};
export default contact;
