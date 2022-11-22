import "./soil1.css";

const soil1 = () => {
  const propsData = {
    listboxComponent: {
      dropdownList: {
        hoverState1: {
          zpvxrpkadvbda: "Laterite Soil",
        },
        hoverState3: {
          zpvxrpkadvbda: "Black Soil",
        },
        hoverState: {
          zpvxrpkadvbda: "Red Soil",
        },
        hoverState2: {
          zpvxrpkadvbda: "Alluvial soil",
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
    <h2 className="drop">Select your soil:</h2>
    <div class="dropdowndemo">
    <button class="dropdownbtn">Soil</button>
    <div class="dropdownlist-content">
     <a href="#">LATERITE SOIL</a>
     <a href="#">BLACK SOIL</a>
     <a href="#">RED SOIL</a>
     <a href="#">ALLUVIAL SOIL</a>
    </div>
    </div>
  </div>     
  );
};
export default soil1;