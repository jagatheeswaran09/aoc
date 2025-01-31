import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CarouselRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaArrowRight size={30} />
    </button>
  );
};

export default CarouselRightArrow;
