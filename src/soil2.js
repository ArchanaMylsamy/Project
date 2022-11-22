import "./soil2.css";

const soil2 = () => {
  const propsData = {
    listboxComponent: {
      dropdownList: {
        hoverState1: {
          zpvxrpkadvbda: "Madurai",
        },
        hoverState3: {
          zpvxrpkadvbda: "Erode",
        },
        hoverState: {
          zpvxrpkadvbda: "Coimbatore",
        },
        hoverState2: {
          zpvxrpkadvbda: "Thirunelveli",
        },
      },
      listBoxTitle: {
        selectYourDistrict: "Select your district:*",
      },
      placeholderText: {
        select: "--SELECT--",
      },
    
    },
  };
  return (
  <div className="pexels-aliona-pasha">
    <div>
        <div className="group-33885">
          <span className="home">HOME </span>
          <span className="services">SERVICES </span>
          <span className="about-us">ABOUTUS </span>
          <span className="contact"> CONTACT</span>
      </div>
    </div>
    <div className="side">
      <span>TESTING LAB AREAS</span>
    </div>
    <br></br><br></br><br></br>
    <button class="glow-on-hover" type="button">COIMBATORE</button>
    <button class="glow-on-hover1" type="button">ERODE</button>
    <button class="glow-on-hover2" type="button">MADURAI</button>
    <button class="glow-on-hover3" type="button">TIRUNELVELI</button>
  </div>     
  );
};
export default soil2;