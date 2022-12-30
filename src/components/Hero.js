import React from "react";
import image from "../imagess/coder.png";
// #201732
const Hero = () => {
  return (
    <div>
      <div className="container-fluid bghero navhover navlink" bghero>
        <div className="row">
          <div className=" text-center d-flex flex-column justify-content-center align-items-center col-6">
            <div className="name">
              Rahul Manglani <br />
            </div>
            <span className="info"> A Full Stack Web developer</span>
          </div>
          <div className="col-6">
            <img src={image} alt="coder" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
