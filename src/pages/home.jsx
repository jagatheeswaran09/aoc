import React from "react";
import Carousel from "react-multi-carousel";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { useState, useEffect } from "react";

import CardComponent from "../component/home/card";
import { backGroundColors, carouselResponsiveItems } from "../helpers/functions";

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
      console.error("Error fetching data:", error);
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
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row p-3 p-m-3 loco-container ">
        <div className="position-relative left-2 top-5 start-0 col-5 col-md-8 ">
          <img
            src={data?.logo}
            alt=""
            className="w-50 pt-1 pt-md-3"
            id="logo"
          />
        </div>
      </div>
      <div className="row home_page_desktop_container m-0">
        {data?.features?.map((item, index) => (
          <CardComponent
            key={index}
            {...item}
            backGroundColor={backGroundColors[index]}
          />
        ))}
      </div>
      <div className="home_page_mobile_container">
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
                <CardComponent {...item} />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Home;
