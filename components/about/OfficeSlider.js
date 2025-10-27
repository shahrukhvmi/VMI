"use client";

// components/OfficeSlider.js
import React from "react";
import Slider from "react-slick";

const images = [
  "/office1.png",
  "/office2.png",
  "/office3.png",
  "/office4.png",
  "/office5.png",
  "/office1.png",
  "/office2.png",
  "/office3.png",
  "/office4.png",
  "/office5.png",
  "/office1.png",
  "/office2.png",
  "/office3.png",
  "/office4.png",
  "/office5.png",
  "/office1.png",
  "/office2.png",
  "/office3.png",
  "/office4.png",
  "/office5.png",
];

export default function OfficeSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    speed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="office-slider">
      <Slider {...settings} className="mt-0">
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              style={{ width: "100%", borderRadius: "10px" }}
              className="office-slider-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
