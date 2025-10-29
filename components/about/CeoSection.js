import Link from "next/link";
import React, { useEffect } from "react";

export default function CeoSection() {
  useEffect(() => {
    const handleImagesLoaded = () => {
      // Only refresh GSAP after all images load
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };

    window.addEventListener("load", handleImagesLoaded);
    return () => window.removeEventListener("load", handleImagesLoaded);
  }, []);

  return (
    <section className="relative max-container-width w-6xl mx-auto z-10 ceo-main-wrap">
      <h2 className="olivera-font text-center ceo-font-size mb-30">
        With clear vision and decisive leadership from our CEO, and a focus on
        process and performance from our COO, we’ve built a culture that values
        innovation, accountability, and measurable results. This balance of
        strategic direction and operational strength drives our growth and the
        success of our clients worldwide.
      </h2>

      <div className="ceo-image-main">
        <div className="relative ceo-image-wrap mb-20 md:mb-0">
          <img src="/ceocard1.png" />

          <div className="ceo-overlay-wrap">
            <div className="ceo-overlay-heading">
              <span className="bg-white/10 text-sm ceo-overlay-top px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
                SEO Strategist & Growth Advisor
              </span>
              <h3 className="ceo-name olivera-font mt-3">Mansoor Alam</h3>
              <p className="ceo-designation poppins-font mt-[-5px]">
                Cofounder & CEO – Vibrant Media Inc.
              </p>
            </div>
            <div className="ceo-seperator"></div>
            <div className="ceo-social-wrap">
              <p className="ceo-follow poppins-font">Follow on</p>
              <div className="ceo-social-icons">
                <ul className="flex mt-4 gap-4">
                  {/* <li>
                    <img src="/facebook.svg" />
                  </li>
                  <li>
                    <img src="/insta.svg" />
                  </li>
                  <li>
                    <img src="/x.svg" />
                  </li> */}
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/alammansoor/"
                      target="_blank"
                    >
                      <img src="/linkedin.svg" />
                    </Link>
                  </li>
                  {/* <li>
                <img src="/youtube.svg" />
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ceo-image-wrap">
          <img src="/ceocard2.png" />

          <div className="ceo-overlay-wrap">
            <div className="ceo-overlay-heading">
              <span className="bg-white/10 text-sm ceo-overlay-top px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
                Head of Business & Finance
              </span>
              <h3 className="ceo-name olivera-font mt-3">M. Abdul Tahseen</h3>
              <p className="ceo-designation poppins-font mt-[-5px]">
                Cofounder & COO – Vibrant Media Inc.
              </p>
            </div>
            <div className="ceo-seperator"></div>
            <div className="ceo-social-wrap">
              <p className="ceo-follow poppins-font">Follow on</p>
              <div className="ceo-social-icons">
                <ul className="flex mt-4 gap-4">
                  {/* <li>
                    <img src="/facebook.svg" />
                  </li>
                  <li>
                    <img src="/insta.svg" />
                  </li>
                  <li>
                    <img src="/x.svg" />
                  </li> */}
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/tahseenb2b/"
                      target="_blank"
                    >
                      <img src="/linkedin.svg" />
                    </Link>
                  </li>
                  {/* <li>
                <img src="/youtube.svg" />
              </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
