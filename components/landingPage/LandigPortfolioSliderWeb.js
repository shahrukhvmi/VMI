"use client";

// components/OfficeSlider.js
import React from "react";
import Slider from "react-slick";

const images = [
  "/landing-images/landing-web-9.png",
  "/landing-images/landing-web-2.png",
  "/landing-images/landing-web-3.png",
  "/landing-images/landing-web-4.png",
  "/landing-images/landing-web-5.png",
  "/landing-images/landing-web-6.png",
  "/landing-images/landing-web-7.png",
  "/landing-images/landing-web-8.png",
  "/landing-images/landing-web-1.png",
  "/landing-images/landing-web-9.png",
  "/landing-images/landing-web-2.png",
  "/landing-images/landing-web-3.png",
  "/landing-images/landing-web-4.png",
  "/landing-images/landing-web-5.png",
  "/landing-images/landing-web-6.png",
  "/landing-images/landing-web-7.png",
  "/landing-images/landing-web-8.png",
  "/landing-images/landing-web-1.png",
];

export default function LandingPortfolioSliderWeb() {
  const settings = {
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    // speed: 2000,
    pauseOnHover: false,
    swipeToSlide: true,
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
    <div className="office-slider landing-page-slider">
      <Slider {...settings} className="mt-0">
        {images.map((img, idx) => (
          <div key={idx} className="landing-inner-focus">
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
