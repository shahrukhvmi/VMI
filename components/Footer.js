import { app_url } from "@/config/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Footer() {
  const [data, setData] = useState(null);
  const router = useRouter();

  // Footer API Call 😀😀🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞🤞
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${app_url}/footer`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const { menu, site, social, footer } = data || {};
  const currentPath = router.pathname;

  return (
    <div className="footer-wrapper pt-20 z-10 relative">
      <div className="max-container-width w-6xl mx-auto">
        <div className="footer-wrap">
          <div className="footer-left footer-col w-[50%]">
            <div className="footer-logo-img">
              <img src={site?.logo?.src || "/footer-logo.png"} />
            </div>
            <p className="mt-6 poppins-font">
              {footer?.sub_heading || "Let’s collaborate for purpose-driven strategies and output! We offer everything your business needs."}
            </p>
            <div className="example-2 footer-btn mt-6">
              <button
                onClick={() => router.push(footer?.cta_link || "/contact-us")}
                className="inner flex justify-center poppins-font text-xl items-center"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                  boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
                }}
              >
                {footer?.cta || " Discuss your project"}
                {/* <span>
                  <img src="/btn-icon.svg" />
                </span> */}
              </button>
            </div>

            <div className="footer-navigation py-8 mt-20">
              <ul className="flex justify-between poppins-font footer-nav">
                {menu?.map(({ title, url }, index) => {
                  const isActive = currentPath === url;

                  return (
                    <li key={index} className="cursor-pointer">
                      <Link href={url} className="block">
                        <p
                          className={`px-4 py-2 transition-all duration-300 ${isActive ? "footer-active" : ""
                            }`}
                        >
                          {title || "Footer Menu Item"}
                        </p>
                      </Link>
                    </li>
                  );
                })}

              </ul>
            </div>

            <div className="footer-email pt-10 md:pt-20 poppins-font">
              <p className="email-text1">Email</p>
              <p className="email-text2">{footer?.email || "info@vibrantmediainc.com"}</p>
            </div>

            <div className="footer-email pt-10 pb-20 poppins-font">
              <p className="text-[15px]">Follow Us</p>
              <ul className="flex mt-4 gap-4 footer-icons">
                <li>
                  <Link
                    href={social?.facebook || "https://www.facebook.com/vibrantmediainc"}
                    target="_blank"
                  >
                    <img src="/facebook.svg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={social?.instagram || "https://www.instagram.com/vibrantmediainc/"}
                    target="_blank"
                  >
                    <img src="/insta.svg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={social?.linkedin || "https://www.linkedin.com/company/vibrantmedia-inc/"}
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
          <div className="footer-right footer-col text-right">
            {/* <img src="/footer-bg-blur.png" /> */}
          </div>
        </div>
        <div className="rights-wrap flex justify-between pb-10 poppins-font">
          <p className="text-[#E9E9E9]">
            © {footer?.copyright || "2025 Vibrant Media Inc. All rights reserved"}
          </p>
          <p className="text-[#E9E9E9]">
            Privacy & Cookie Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
