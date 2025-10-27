import { useRouter } from "next/router";
import ServiceHorizontal from "./ServiceHorizontal";

export default function ServicesHero() {
  const router = useRouter();

  return (
    <section>
      <div className="relative pt-90 flex flex-col items-center justify-center text-white text-center px-4 z-10 pb-100 service-responsive-padding">
        <div className="hero-section-shadow"></div>
        <div className="about-banner-shadow"></div>
        <span className="bg-white/10 text-sm available-text px-4 py-1 rounded-full border border-white/20 mb-4 z-10 poppins-font">
          We don’t just design
        </span>
        <h1 className="hero-text z-10 olivera-font">
          Covering All Facets of
          <br /> Marketing & Design
          {/* <span className="hero-span olivera-font">Development</span> Agency */}
        </h1>
        <p className="mt-4 text-gray-300 text-xl z-10 poppins-font main-banner-para">
          Our scope of work encompasses design, development, and marketing
          modules,
          <br /> allowing us to meet strategic goals across industries.
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
      </div>

      <ServiceHorizontal />
    </section>
  );
}
