import React from "react";

const SlotCardComponent = ({ title, desc, logo, image, backGroundColor }) => {
  return (
    <div
      className="slot-container"
      style={{ backgroundColor: backGroundColor }}
    >
      <div className="slot-content">
        <div className="slot-body">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="title-container">
            <p className="slot-title">{title}</p>
          </div>
          <div className="underline-container">
            <div className="title-underline"></div>
          </div>
          <p className="slot-description">{desc}</p>
        </div>
        <div className="image-container">
          <img src={image} className="illustration" alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default SlotCardComponent;
