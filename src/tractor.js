import "./tractor.css";

const tractor = () => {
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
      <span>TRACTOR ON ROAD PRICE</span>
    </div>
    <h2 className="drop">Select your district:</h2>
    <div class="dropdowndemo">
    <button class="dropdownbtn">District</button>
    <div class="dropdownlist-content">
     <a href="#">ERODE</a>
     <a href="#">COIMBATORE</a>
     <a href="#">MADURAI</a>
     <a href="#">TIRUNELVELI</a>
    </div>
    </div>
  </div>     
  );
};
export default tractor;