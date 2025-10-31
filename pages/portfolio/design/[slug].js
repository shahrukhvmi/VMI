import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import Image from "next/image";
import Link from "next/link";

// get  all data by slug and render page accordingly 🤞🤞🤞🤞🤞🤞🤞🤞🤞
export async function getServerSideProps(context) {
  const { slug } = context.params;

  console.log(slug,"slug1")
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/main?slug=${slug}`);

    const data = await res.json();

    return {
      props: {
        layoutData: data,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        layoutData: null,
        slug,
      },
    };
  }
}

export default function SlugPage({ layoutData, slug }) {
  if (!layoutData) return <p>Data not found for: {slug}</p>;

  const mainHeading = layoutData?.data?.page_data?.title || "Default Title"
  const describtion = layoutData?.data?.content || "Default Title"
  const client = layoutData?.data?.page_data?.data?.client || "Default Title"
  const country = layoutData?.data?.page_data?.data?.country || "Default Title"
  const image = layoutData?.data?.page_data?.data || "Default Title"
  const scope = layoutData?.data?.page_data?.data?.scope || "Default Title"
  const label = layoutData?.data?.page_data?.data?.specific_category || "Default Title"

  console.log(layoutData, "slug base data")

  return (
    <>

      <MetaLayout
        data={layoutData?.head?.json}
        title="Our Creative Work"
        description="Explore our portfolio showcasing UI/UX design, web development, branding, SEO, and digital marketing projects for clients across industries and markets."
        canonical={`${meta_url}portfolio/`}
      />

      <main className="relative text-white  overflow-hidden z-10">
        <section>
          <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 single-portfolio-inner-responsive-spacing">
            <div className="portfolio-banner-shadow"></div>
            <div className="portfolio-banner-shadow-right"></div>
          </div>

          <div className="w-6xl mx-auto max-container-width">
            <div className="porfolio-back-icon">
              <Link
                href="/portfolio"
                className="flex text-[18px] poppins-font items-center"
              >
                <span className="me-2">
                  <Image src={"/back-icon.svg"} width={20} height={20} />
                </span>
                Back
              </Link>
            </div>

            <div className="single-portfolio-wrapper flex mt-5 gap-6 mb-30">

              <div className="single-portfolio-left">
                {image?.featured_gallery?.map((img, key) => {
                 
                  return <img src={img || "/almas.png"} key={key} alt={`gallery-${key}`} />;
                })}

              </div>


              <div className="single-portfolio-right">
                <span className="poppins-font portfolio-single-badge">
                  {label || "Branding"}
                </span>
                <div className="portfolio-single-title olivera-font mt-2 mb-5">
                  <h1 className="text-[68px] leading-none single-portfolio-heading">
                    {mainHeading}
                  </h1>
                </div>
                <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                  <img src="/client.svg" />
                  <p className="poppins-font text-[18px]">
                    Client:{" "}
                    <span className="font-bold">{client}</span>
                  </p>
                </div>
                <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                  <img src="/role.svg" />
                  <p className="poppins-font text-[18px]">
                    Scope:{" "}
                    <span className="font-bold">
                      {scope}
                    </span>
                  </p>
                </div>

                <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                  <img src="/tools.svg" />
                  <p className="poppins-font text-[18px]">
                    Country: <span className="font-bold">{country}</span>
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                  {/* Top Line and Heading */}
                  <h3 className="text-white poppins-font text-[20px]">Brief</h3>
                  <hr className="border-t border-white/20 rounded-full mb-2" />

                  {/* Paragraphs */}
                  <p
                    className="poppins-font text-[16px]"
                    dangerouslySetInnerHTML={{ __html: describtion }}
                  ></p>


                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
