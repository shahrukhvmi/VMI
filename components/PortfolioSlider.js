"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";

const portfolioImages = [
  { img: "/web-1.webp", url: "/development-portfolio/media-co-uk/" },
  { img: "/web-2.webp", url: "/development-portfolio/earthane/" },
  { img: "/design-1.webp", url: "/design-portfolio/shawarma-lite/" },
  {
    img: "/design-3.webp",
    url: "/design-portfolio/wefix/",
  },
  { img: "/social-1.webp", url: "/social-media-portfolio/tech-ancestry/" },
  { img: "/social-2.webp", url: "/social-media-portfolio/bridle-360/" },
  { img: "/seo-3.png", url: "/seo-portfolio/floor-express/" },
  { img: "/seo-2.png", url: "/seo-portfolio/suja-driving-school/" },
];

export default function PortfolioSlider() {
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
        {portfolioImages.concat(portfolioImages).map((item, i) => (
          <SwiperSlide key={i} className="home-portfolio-slide">
            <Link href={item?.url}>
              <Image
                src={item?.img}
                alt={`Portfolio item ${i + 1}`}
                className="rounded-2xl w-full h-auto max-h-[400px] object-cover object-center"
                width={300}
                height={300}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
