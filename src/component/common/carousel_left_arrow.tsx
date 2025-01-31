import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CarouselLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaArrowLeft size={30} />
    </button>
  );
};

export default CarouselLeftArrow;
