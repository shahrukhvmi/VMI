import AboutHero from "@/components/about/AboutHero";
import AboutVideo from "@/components/about/AboutVideo";
import CeoSection from "@/components/about/CeoSection";
import dynamic from "next/dynamic";
const HorizontalScrollSection = dynamic(
  () => import("@/components/about/HorizontalScrollSection"),
  { ssr: false }
);

import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

// // Server-side data fetching function
export async function getServerSideProps() {
  try {
    // Fetch dynamic content from WordPress API
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/main?slug=about`
    );
    const data = await res.json(); // Assuming this gives you your layout data
    return {
      props: {
        layoutData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data from WordPress API:", error);
    return {
      props: {
        layoutData: null,
      },
    };
  }
}

// const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), {
//   ssr: false,
// });

export default function AboutPage({ layoutData }) {
  const about =
    layoutData?.data?.page_data?.sections?.[0]?.fields?.[0]?.subfields;
  const ceoSection = layoutData?.data?.page_data?.sections?.[1]?.fields;
  const videoSection = layoutData?.data?.page_data?.sections?.[2]?.fields;
  const ourVision = layoutData?.data?.page_data?.sections?.[3]?.fields;
  const brandSecton = layoutData?.data?.page_data?.about_featured_gallery;

  const buttonText = ourVision?.[0]?.value;
  const ourVisionText = ourVision?.[1]?.value;
  const router = useRouter();

  return (
    <>
      <MetaLayout
        data={layoutData?.head?.json}
        title="Our Legacy of Brand Success"
        description="Built on the mission to enable business growth, we blend strategy, creativity, and expertise to help brands thrive locally and globally for the long term."
        canonical={`${layoutData?.head?.json?.canonical}`}
      />
      <main className="relative text-white min-h-screen overflow-hidden">
        <AboutHero about={about} brandSecton={brandSecton} />

        <HorizontalScrollSection />

        <CeoSection ceoSection={ceoSection} />

        <AboutVideo videoSection={videoSection} />

        <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main py-40 z-10 relative about-last-quote">
          <div className="brand-secton-wrap center-content middle-quote-font">
            <h3
              className="text-center olivera-font"
              dangerouslySetInnerHTML={{
                __html: ourVisionText || "Our Vision",
              }}
            ></h3>

            <div className="hero-btn example-2">
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
                {buttonText || "Speak with Us"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
