import React from "react";
import Carousel from "react-multi-carousel";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { useState, useEffect } from "react";

import {
  backGroundColors,
  carouselResponsiveItems,
} from "../helpers/functions";
import SlotCardComponent from "../component/home/slot_card";

const Home = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://krds-assignment.github.io/aoc/api-assets/data.json"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CarouselLeftArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="carousel_left_arrow_button">
        <RiArrowLeftWideLine size={60} color="white" />
      </button>
    );
  };
  const CarouselRightArrow = ({ onClick }) => {
    return (
      <button onClick={onClick} className="carousel_right_arrow_button">
        <RiArrowRightWideLine size={60} color="white" />
      </button>
    );
  };

  return (
    <div>
      <div className="header-logo-container">
        {backGroundColors.slice(0, 3).map((_, index) => {
          return (
            <div
              className="header-logo-body"
              style={{ backgroundColor: backGroundColors[index] }}
            >
              {index - 1 < 0 && (
                <img src={data?.logo} alt="" id="header-logo" />
              )}
            </div>
          );
        })}
      </div>
      <div className="home-slot-main-container">
        {data?.features?.map((item, index) => (
          <SlotCardComponent
            key={index}
            {...item}
            backGroundColor={backGroundColors[index]}
          />
        ))}
      </div>
      <div className="home-slot-mobile-container">
        {data && data?.features?.length > 0 && (
          <Carousel
            responsive={carouselResponsiveItems}
            showDots={true}
            arrows={true}
            customRightArrow={<CarouselRightArrow />}
            customLeftArrow={<CarouselLeftArrow />}
          >
            {data?.features?.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: backGroundColors[index],
                  height: "93svh",
                }}
              >
                <SlotCardComponent {...item} />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Home;
