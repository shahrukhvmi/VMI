"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StickySection({ children }) {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 h-[100vh] flex items-center justify-center text-4xl font-bold bg-gray-900 text-white"
    >
      {children}
    </div>
  );
}
