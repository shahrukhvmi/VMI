import { useRouter } from "next/router";
import OfficeSlider from "./OfficeSlider";

export default function AboutHero() {
  const router = useRouter();

  return (
    <>
      <section className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 pb-80 h-full about-hero-section">
        <div className="hero-section-shadow"></div>
        <div className="about-banner-shadow"></div>
        <span className="bg-white/10 text-sm available-text px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
          We don’t just design
        </span>
        <h1 className="hero-text leading-tight z-10 olivera-font">
          Building Brands that Sustain,
          <br /> Expand, and Outperform
          {/* <span className="hero-span olivera-font">Development</span> Agency */}
        </h1>
        <p className="mt-4 text-gray-300 text-xl z-10 poppins-font main-banner-para">
          We plan, execute, and refine strategies, empowering businesses with{" "}
          <br />
          our expertise and focus on long-term growth, performance, and
          strategic clarity.
        </p>

        {/* <GlowButton /> */}
        <div className="example-2 footer-btn mt-6">
          <button
            onClick={() => router.push("/contact-us")}
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
            Talk to Our Team{" "}
            {/* <span>
                  <img src="/btn-icon.svg" />
                </span> */}
          </button>
        </div>

        <OfficeSlider />
      </section>
    </>
  );
}
