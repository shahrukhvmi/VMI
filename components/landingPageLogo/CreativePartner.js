import Image from "next/image";
import React, { useEffect, useState } from "react";

const CreativePartner = () => {
  function StatNumber({ target, suffix = "", isLessThan = false }) {
    const [value, setValue] = useState(1);

    useEffect(() => {
      let current = 1;
      const end = target;
      const duration = 1500; // ms
      const totalSteps = end - current || 1;
      const stepTime = Math.max(Math.floor(duration / totalSteps), 20);

      const timer = setInterval(() => {
        current += 1;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setValue(current);
      }, stepTime);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <span className="stat-number">
        {isLessThan ? "< " : ""}
        {value}
        {suffix}
      </span>
    );
  }
  return (
    <>
      <section className="relative max-container-width w-[80%] mx-auto">
        <div className="creative-wrapper">
          <div className="creative-heading-wrap">
            <h2 className="landing-heading">
              More Than Just Design:
              <span className="creative-heading-gradient">
                True Partnership
              </span>
            </h2>

            <p className="creative-subtitle">
              With Vibrant Media Inc., you get a reliable, all-in-one creative
              partner for your brand.
            </p>
          </div>

          <div className="creative-card creative-card-css">
            <div className="">
              <h3 className="creative-card-title">You’ll Receive:</h3>

              <div className="creative-list-grid">
                <ul>
                  <li>Dedicated Project Support</li>
                  <li>Premium Quality Design</li>
                  <li>Fast Turnaround</li>
                </ul>
                <ul>
                  <li>Unlimited Creativity</li>
                  <li>Affordable Holiday Pricing</li>
                  <li>Transparent Communication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LEFT SNOW */}
          <div className="pointer-events-none select-none absolute top-40 -left-68 flex items-end">
            <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[250px] aspect-[2/7] -translate-x-6 sm:-translate-x-10 sm:block hidden">
              <Image
                src="/landing-images/snow.png" // 👈 your left tree image
                alt="Christmas Tree Left"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Left Starts  */}
          <div className="pointer-events-none select-none absolute -top-10 -left-35 flex items-end">
            <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[300px] aspect-[2/7] -translate-x-6 sm:-translate-x-10 sm:block hidden">
              <Image
                src="/landing-images/start-left.png" // 👈 your left tree image
                alt="Christmas Tree Left"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Right Starts  */}
          <div className="pointer-events-none select-none absolute top-20 -right-45 flex items-end">
            <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[350px] aspect-[2/5] -translate-x-6 sm:-translate-x-10 sm:block hidden">
              <Image
                src="/landing-images/start-right.png" // 👈 your left tree image
                alt="Christmas Tree Left"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2nd Section start ✌️✌️✌️✌️✌️✌️✌️✌️✌️ */}
      <section className="black_section">
        <div className="creative-divider"></div>
        <div className="relative max-container-width w-[100%] mx-auto">
          <div className="py-16 px-4">
            <div className="testimonial-card">
              {/* Top quote */}
              <p className="testimonial-quote">
                "Vibrant Media transformed our online presence completely. Their
                team understood our vision and delivered a product that exceeded
                expectations. The quality, design, and attention to detail were
                amazing."
              </p>

              {/* Avatar + name */}
              <div className="testimonial-person">
                <div className="testimonial-avatar">
                  <Image
                    src="/landing-images/testi-1.png" // ✅ no /public in src
                    alt="Dr. Lee Hutchinson"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="testimonial-text">
                  <p className="testimonial-name">Dr. Lee Hutchinson</p>
                  <p className="testimonial-title">
                    CEO, Eaton SAKS International Group
                  </p>
                </div>
              </div>

              {/* Stats row */}
            </div>
            <div className="testimonial-stats-row">
              <div className="stat-item">
                <StatNumber target={24} suffix="+" />
                <p className="stat-label">Projects delivered this month</p>
              </div>

              <div className="stat-item">
                <StatNumber target={10} suffix="x" />
                <p className="stat-label">Better engagement</p>
              </div>

              <div className="stat-item">
                <StatNumber target={1} suffix="%" isLessThan />
                <p className="stat-label">Revision rate after delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativePartner;
