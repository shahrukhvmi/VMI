"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider({ testimonialData }) {
  return (
    <div className="testimonial-main-wrap z-10 relative">
      <div className="relative w-6xl max-container-width mx-auto text-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          className="mx-auto"
        >
          {testimonialData?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-[30%] testimonial-img-width rounded-lg overflow-hidden">
                  <img
                    src={
                      testimonial?.data?.person_image || "/default-image.png"
                    } // Fallback image if person_image is missing
                    alt={testimonial?.data?.person_name}
                    className="object-cover w-full"
                  />
                </div>
                <div className="w-[70%] text-[28px] flex flex-col justify-around home-testimonial-text">
                  <h3 className="olivera-font">“{testimonial?.data?.quote}”</h3>
                  <p className="mt-6 font-normal poppins-font">
                    <strong className="testi-name">
                      {testimonial?.data?.person_name}
                    </strong>{" "}
                    <br />
                    {testimonial?.data?.person_role} <br />
                    {testimonial?.data?.person_country}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination mt-10 flex justify-center gap-4"></div>

        {/* Navigation Arrows */}
        <div className="swiper-prev cursor-pointer text-xl swiper-btn">
          <img src="/left-arrow.png" />
        </div>
        <div className="swiper-next cursor-pointer text-xl swiper-btn">
          <img src="/right-arrow.png" />
        </div>
      </div>
    </div>
  );
}
