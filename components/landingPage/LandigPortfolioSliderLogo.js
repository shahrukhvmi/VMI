"use client";

// components/OfficeSlider.js
import React from "react";
import Slider from "react-slick";

const images = [
  "/landing-images/landing-logo-1.jpg",
  "/landing-images/landing-logo-2.jpg",
  "/landing-images/landing-logo-3.jpg",
  "/landing-images/landing-logo-4.jpg",
  "/landing-images/landing-logo-5.jpg",
  "/landing-images/landing-logo-6.jpg",
  "/landing-images/landing-logo-7.jpg",
  "/landing-images/landing-logo-8.jpg",
  "/landing-images/landing-logo-9.jpg",
  "/landing-images/landing-logo-10.jpg",
  "/landing-images/landing-logo-11.jpg",
  "/landing-images/landing-logo-12.jpg",
  "/landing-images/landing-logo-13.jpg",
  "/landing-images/landing-logo-14.jpg",
  "/landing-images/landing-logo-15.jpg",
  "/landing-images/landing-logo-16.jpg",
  "/landing-images/landing-logo-17.jpg",
];

export default function LandingPortfolioSliderLogo() {
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
