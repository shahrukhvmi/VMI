"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeRingSlider({ creativeData }) {
  console.log(creativeData, "creative");

  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isDesktop, setIsDesktop] = useState(null); // prevent SSR mismatch
  const [sliderData, setSliderData] = useState([]); // State to store mapped data

  // 🟡 Only run animations on desktop
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Map creativeData to sliderData format
  useEffect(() => {
    if (creativeData && creativeData.length) {
      const mappedData = creativeData.map((item) => {
        // Extracting data from the API response
        return {
          title: item.title,
          body: item.excerpt,
          img: item.image,
          link: item.permalink,
        };
      });

      setSliderData(mappedData); // Set the mapped data for the slider
    }
  }, [creativeData]);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;

    gsap.set(cardsRef.current, { yPercent: 100, opacity: 0 });
    gsap.set(cardsRef.current[0], { yPercent: 0, opacity: 1 });

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return;

      const triggerStart = `top+=${(index - 1) * window.innerHeight} top`;
      const triggerEnd = `+=${window.innerHeight}`;

      gsap.to(card, {
        yPercent: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: triggerStart,
          end: triggerEnd,
          scrub: true,
          onEnter: () => card.classList.add("z-10"),
          onLeaveBack: () => card.classList.remove("z-10"),
        },
      });
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${(sliderData.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: true,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isDesktop, sliderData]);

  if (isDesktop === null || !isDesktop) return null; // 🔒 SSR safe & skip on mobile

  return (
    <div className="desktop-ring-slider">
      <div className="w-6xl mx-auto max-container-width mb-20 z-10 ring-slider-responsive-heading">
        <div className="inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="">Plan Your First</span> <br />
            <span className="inner-heading-span">Strategy with Us</span>
          </h2>
        </div>
      </div>
      <div ref={containerRef} className="relative w-full ring-wrap-main">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ring-responsive-height">
          <div className="absolute w-[70vw] h-[70vw] animate-spin-slow z-0"></div>

          <div className="relative w-full h-full flex items-center justify-center">
            {sliderData.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute service-ring-card backdrop-blur-[20px] opacity-0"
              >
                <div className="flex justify-center">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="mb-4 olivera-font">{item.title}</h3>
                <p className="poppins-font">{item.body}</p>
                {/* <a href={item.link} className="btn">
                  Learn More
                </a>{" "} */}
                {/* Optional link to each item */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
