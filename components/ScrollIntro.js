"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollIntro() {
  const sectionRef = useRef(null);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    // Lock scroll initially
    document.body.style.overflow = "hidden";

    // Run GSAP intro animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll when animation is done
        document.body.style.overflow = "";
        setAnimationDone(true);
      },
    });

    tl.fromTo(
      section.querySelector(".intro-text"),
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    ).to(section, {
      backgroundColor: "#1a1a1a",
      duration: 1,
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen bg-black text-white flex items-center justify-center px-4 transition-all duration-1000"
      >
        <h1 className="intro-text text-4xl font-bold">
          Welcome to Our Website
        </h1>
      </section>

      {animationDone && (
        <section className="min-h-[200vh] bg-white text-black p-12">
          <h2 className="text-3xl font-bold">
            Now you can scroll the rest of the page
          </h2>
          <p className="mt-4">More content goes here...</p>
        </section>
      )}
    </>
  );
}
