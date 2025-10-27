// components/RingSlider.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function RingSliderTwo() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const data = [
    {
      title: "Charting the Unknown Frontier",
      body: "We deep-dive into your market, uncovering insight that fuels strategy.",
    },
    {
      title: "Blueprints for Brilliance",
      body: "Every user journey is mapped like a constellation, guiding design with clarity.",
    },
    {
      title: "Building Tomorrow’s Interface",
      body: "From sketches to code we craft products that perform as beautifully as they look.",
    },
    {
      title: "Engines On. We Have Liftoff!",
      body: "Go live with confidence, then refine every metric in orbit.",
    },
  ];

  useEffect(() => {
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
      end: `+=${(data.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: true,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="w-6xl mx-auto max-container-width mb-20">
        <div className="inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="">We're here to</span> <br />
            <span className="inner-heading-span">make you win</span>
          </h2>
        </div>
      </div>
      <div ref={containerRef} className="relative w-full ring-wrap-main">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute w-[70vw] h-[70vw] animate-spin-slow z-0"></div>

          <div className="relative w-full h-full flex items-center justify-center">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute ring-card backdrop-blur-[20px] opacity-0"
              >
                <h3 className="mb-4">{item.title}</h3>
                <p className="">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
