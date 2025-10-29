"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Lee Hutchinson",
    role: "Group Chief Executive Officer, Eaton SAKS International Group",
    country: "United Arab Emirates",
    image: "/testi-1.png", // replace with actual path
    quote:
      "Working with Vibrant Media Inc was transformative. They took my chaotic ideas and turned them into a powerful, cohesive brand and a world-class digital experience. From bold design to strategic execution, every detail was intentional. VMI isn't just creative, they’re commercially sharp and truly collaborative. Highly recommended.",
  },
  {
    name: "Lisa Andria",
    role: "Owner & Director, Ladies Who Leap",
    country: "USA",
    image: "/testi-2.png", // replace with actual path
    quote:
      "Vibrant Media delivered an exceptional experience from start to finish. The team is professional, approachable, and truly understands how to bring a vision to life. They created a visually stunning and strategically sound website, explaining every recommendation with clarity and purpose. I look forward to continuing our collaboration. Highly recommended.",
  },
  {
    name: "Omar Locos",
    role: "Owner and Director, Locos Customs",
    country: "United Kingdom",
    image: "/testi-3.png", // replace with actual path
    quote:
      "Vibrant Media has been a game-changer for my business. They created a bold and memorable logo, a brand identity that truly stands out, and a website that looks amazing and works flawlessly. They are now managing our SEO, and we’re already seeing great progress in online visibility and leads. The team is professional, creative, and easy to work with. Highly recommended for anyone serious about growing their brand.",
  },

  // Add more testimonials as needed
];

export default function TestimonialSlider() {
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
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-[30%] testimonial-img-width rounded-lg overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-full"
                  />
                </div>
                <div className="w-[70%] text-[28px] flex flex-col justify-around home-testimonial-text">
                  <h3 className="olivera-font">“{t.quote}”</h3>
                  <p className="mt-6 font-normal poppins-font">
                    <strong className="testi-name">{t.name}</strong> <br />
                    {t.role} <br />
                    {t.country}
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
