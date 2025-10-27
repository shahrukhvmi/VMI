"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPageSlider(props) {
  const portfolioImages = props?.portfolioImages;
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (!swiperReady || !containerRef.current) return;

    const container = containerRef.current;

    const handleMouseEnter = () => {
      const swiper = swiperRef.current;
      if (swiper?.autoplay?.running) {
        swiper.autoplay.stop();
        swiper.setTransition(0); // remove animation
        swiper.setTranslate(swiper.getTranslate()); // freeze position
      }
    };

    const handleMouseLeave = () => {
      const swiper = swiperRef.current;
      if (swiper?.autoplay && !swiper.autoplay.running) {
        swiper.setTransition(swiper.params.speed); // restore animation
        swiper.autoplay.start();
        swiper.slideTo(swiper.activeIndex + 1); // force motion
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [swiperReady]);

  const imagesToRender = props?.concated
    ? portfolioImages.concat(portfolioImages)
    : portfolioImages;

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-8 mt-16">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.wrapperEl.style.transitionTimingFunction = "linear";
          setSwiperReady(true);
        }}
        loop={true}
        freeMode={true}
        allowTouchMove={true}
        slidesPerView={"auto"}
        spaceBetween={32}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="portfolio-slider"
      >
        {imagesToRender.map((item, i) => (
          <SwiperSlide key={i} className="home-portfolio-slide">
            <Link href={item?.url}>
              <img
                src={item?.img}
                alt={`Portfolio item ${i + 1}`}
                className="rounded-2xl w-full h-auto max-h-[400px] object-cover object-center"
                width={200}
                height={150}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
