// components/RingSlider.jsx
"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RingSlider() {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const stack = wrap.querySelector(".ring-stack");
    const lastCard = stack.lastElementChild;

    const OFFSET = 100; // adjust this upward scroll in pixels

    const endDistance = () => {
      const scrollTo =
        lastCard.offsetTop +
        lastCard.offsetHeight / 1 -
        window.innerHeight / 1 -
        OFFSET;
      return `+=${scrollTo}`;
    };

    gsap.to(stack, {
      y: () =>
        -(
          lastCard.offsetTop -
          window.innerHeight / 2 +
          lastCard.offsetHeight / 2 +
          OFFSET
        ),
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: endDistance,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    // Optional fade (keep as-is or shift it up too)
    gsap.fromTo(
      lastCard,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: () =>
            `top+=${
              lastCard.offsetTop +
              lastCard.offsetHeight / 2 -
              window.innerHeight / 2
            }`,
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="">
      <div
        className="inner-heading text-center w-full mb-30 olivera-font
      "
      >
        <h2>
          We’re here to <br />
          <span className="inner-heading-span">make you win</span>
        </h2>
      </div>

      <div className="ring-wrap-main" ref={wrapRef}>
        <div className="ring-wrap">
          <div className="ring-stack mt-32">
            {[
              [
                "Charting the Unknown Frontier",
                "We deep-dive into your market, uncovering insight that fuels strategy.",
              ],
              [
                "Charting the Unknown Frontier",
                "We deep-dive into your market, uncovering insight that fuels strategy.",
              ],
              [
                <>
                  Blueprints <br /> for Brilliance
                </>,
                "Every user journey is mapped like a constellation, guiding design with clarity.",
              ],
              [
                "Building Tomorrow’s Interface",
                "From sketches to code we craft products that perform as beautifully as they look.",
              ],
              [
                "Engines On. We Have Liftoff!",
                <>
                  Go live with confidence, <br />
                  then refine every metric in orbit.
                </>,
              ],
            ].map(([title, body]) => (
              <article key={title} className="ring-card backdrop-blur-[20px]">
                <h3 className="olivera-font">{title}</h3>
                <p className="poppins-font">{body}</p>

                <svg className="shadow-svg">
                  <filter id="displacementFilter">
                    <feImage href="/liquid.png" preserveAspectRatio="none" />

                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="turbulence"
                      scale="200"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </svg>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
