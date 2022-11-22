import "./soil_2.css";
import img1 from './images/cbe.JPG';
import img2 from './images/cbe1.JPG';
import img3 from './images/cbe2.JPG';
const soil_2 = () => {
  return (
    <div className="coimbatore">
      <div className="bg-16-1">
      <div className="group-33885">
          <span className="home">HOME </span>
          <span className="services">SERVICES </span>
          <span className="about-us">ABOUTUS </span>
          <span className="contact"> CONTACT</span>
      </div>
        <div className="pictures"><span className="coimbatore-1">COIMBATORE</span></div>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
      </div>
    </div>
  );
};
export default soil_2;