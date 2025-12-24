import { app_url } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [data, setData] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { menu, site, header_cta } = data || {};

  const router = useRouter();

  const currentPath = router.pathname;

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Us", url: "/contact-us" },
  ];

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await fetch(`${app_url}/header`);
        const layoutData = await res.json();
        setData(layoutData);
      } catch (error) {
        console.error("Error fetching header:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeader();
  }, []);

  useEffect(() => {
    const currentIdx = menu?.findIndex(
      (item) => item?.url === router?.pathname
    );
    if (currentIdx !== -1) {
      setActiveIdx(currentIdx);
    }
  }, [router.pathname, menu]);
  // ===============================
  // 🦴 Skeleton Loader for Navbar
  // ===============================
  if (loading) {
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full z-50 flex items-center justify-between px-6 py-3 animate-pulse">
        {/* Logo skeleton */}
        <div className="w-32 h-6 bg-white/20 rounded"></div>

        {/* Links skeleton */}
        <div className="hidden md:flex gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-14 h-4 bg-white/20 rounded"></div>
          ))}
        </div>

        {/* CTA Button skeleton */}
        <div className="hidden md:block w-28 h-8 bg-white/20 rounded-full"></div>

        {/* Mobile menu icon skeleton */}
        <div className="md:hidden w-6 h-6 bg-white/30 rounded"></div>
      </nav>
    );
  }

  // ===============================
  // 🌈 Actual Navbar (after load)
  // ===============================
  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-glow rounded-full z-50 flex justify-between items-center w-6xl ring-cursor max-container-width overflow-hidden">
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

        <div
          className="font-semibold text-white text-lg tracking-wide ml-4"
          onClick={() => setMobileOpen(false)}
        >
          <Link href="/">
            <Image
              src={site?.logo?.src || "/footer-logo.png"}
              alt="Full-stack Marketing And Branding Agency"
              width={230}
              height={150}
            />
          </Link>
        </div>

        {/* Desktop Nav - HIDDEN on mobile */}
        <ul className="hidden md:flex gap-6 text-sm text-white font-medium poppins-font">
          {menu?.map(({ title, slug }, i) => {
            const isActive = currentPath === slug;

            return (
              <li
                key={i}
                className={`relative group nav-items ${
                  isActive ? "active" : ""
                }`}
              >
                <Link
                  href={`${slug}`}
                  className="hover:text-vibrant transition duration-300"
                  onClick={() => setActiveIdx(i)}
                >
                  {title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-vibrant group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block nav-btn example-2 desktop-nav-btn">
          <button
            onClick={() => router.push("/contact-us")}
            className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
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
            {header_cta || "Let's Talk"}
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white text-3xl z-50 mobile-burger-icon py-4">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#1b1b2f] z-40 transition-transform duration-300 ease-in-out flex items-center justify-center ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 h-full mobile-nav-wrapper">
          {/* Close button top-right */}
          {/* <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-3xl"
            >
              <FiX />
            </button>
          </div> */}

          {/* Nav links center */}
          <div className="flex flex-col items-center space-y-6 text-white">
            {menu?.map((item, i) => (
              <Link
                key={i}
                href={item?.slug}
                className={`text-2xl mobile-links poppins-font ${
                  activeIdx === i ? "footer-active" : "text-white"
                }`}
                onClick={() => {
                  setActiveIdx(i);
                  setMobileOpen(false);
                }}
              >
                {item.title}
              </Link>
            ))}

            {/* CTA button bottom */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  router.push("/contact-us");
                  setMobileOpen(false);
                }}
                className="mt-6 py-2 px-6 text-white rounded-full text-lg"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                  boxShadow: `
            0 0 60px #9561c540,
            0 0 30px #9561c550
          `,
                }}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
