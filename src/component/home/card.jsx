import React from "react";

const CardComponent = ({ title, desc, logo, image, backGroundColor }) => {
  return (
    <div
      className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch p-0 pt-2 pt-md-5 "
      style={{ backgroundColor: backGroundColor }}
    >
      <div className="card border-0 justify-content-around gap-5  gap-md-0 w-100 d-flex bg-transparent align-items-center p-sm-0 p-md-0 p-lg-3 p-xl-3 pt-xl-4 pb-lg-3 pb-xl-5 ps-xl-3 rounded-0 mt-10 flex-sm-column  flex-md-column  flex-lg-row flex-xl-row">
        <div className="card-body text-var d-flex flex-column gap-2  gap-md-3 text-start ps-3 ps-lg-1">
          <div class="col-24 col-md-1 col-lg-10  d-flex text-center ps-5">
            <img src={logo} alt="image" className="w-25"  />
          </div>
          <div class="col-20 col-sm-24 col-md-15 col-lg-20 col-xl-9 ps-5">
            <p className="fw-md-normal card-tw  text-white mb-0 cart-title">
              {title}
            </p>
          </div>

          <div class="col-11 col-md-9 ps-5">
            <div className="title-underline"></div>
          </div>
          <p className="text-uppercase text-white  ps-5 mb-0 card-description">
            {desc}
          </p>
        </div>
        <div class="col-24 col-sm-24 col-md-3 col-lg-4 d-flex text-center">
          <img src={image} class="img-fluid" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
