import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// get  all data by slug and render page accordingly 🤞🤞🤞🤞🤞🤞🤞🤞🤞
export async function getServerSideProps(context) {
  const { slug } = context.params;

  console.log(slug, "slug1")
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


  const router = useRouter();
  if (!layoutData) return <p>Data not found for: {slug}</p>;

  const mainHeading = layoutData?.data?.page_data?.title;
  const describtion = layoutData?.data?.content;
  const client = layoutData?.data?.page_data?.data?.client;
  const country = layoutData?.data?.page_data?.data?.country;
  const image = layoutData?.data?.page_data?.data;
  const scope = layoutData?.data?.page_data?.data?.scope
  const tools = layoutData?.data?.page_data?.data?.tools
  const label = layoutData?.data?.page_data?.data?.specific_category;

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
              <div
                onClick={() => router.back()}
                className="flex text-[18px] poppins-font items-center cursor-pointer"
              >
                <span className="me-2">
                  <Image src={"/back-icon.svg"} width={20} height={20} />
                </span>
                Back
              </div>
            </div>

            <div className="single-portfolio-wrapper flex mt-5 gap-6 mb-30">
              {image && (



                <div className="single-portfolio-left">
                  {image?.featured_gallery?.map((img, key) => {

                    return <img src={img || "/almas.png"} key={key} alt={`gallery-${key}`} />;
                  })}

                </div>

              )}
              <div className="single-portfolio-right">
                {label && (


                  <span className="poppins-font portfolio-single-badge">
                    {label || "Branding"}
                  </span>
                )}
                {mainHeading && (
                  <div className="portfolio-single-title olivera-font mt-2 mb-5">
                    <h1 className="text-[68px] leading-none single-portfolio-heading">
                      {mainHeading}
                    </h1>
                  </div>
                )}
                {client && (



                  <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                    <img src="/client.svg" />
                    <p className="poppins-font text-[18px]">
                      Client:{" "}
                      <span className="font-bold">{client}</span>
                    </p>
                  </div>
                )}
                {scope && (


                  <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                    <img src="/role.svg" />
                    <p className="poppins-font text-[18px]">
                      Scope:{" "}
                      <span className="font-bold">
                        {scope}
                      </span>
                    </p>
                  </div>


                )}
                {tools && (


                  <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                    <img src="/role.svg" />
                    <p className="poppins-font text-[18px]">
                      Tools Used: {" "}
                      <span className="font-bold">
                        {tools}
                      </span>
                    </p>
                  </div>


                )}
                {country && (
                  <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                    <img src="/tools.svg" />
                    <p className="poppins-font text-[18px]">
                      Country: <span className="font-bold">{country}</span>
                    </p>
                  </div>

                )}
                {describtion && (



                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                    {/* Top Line and Heading */}
                    <h3 className="text-white poppins-font text-[20px]">Details</h3>
                    <hr className="border-t border-white/20 rounded-full mb-2" />

                    {/* Paragraphs */}
                    <p
                      className="poppins-font text-[16px] detail"
                      dangerouslySetInnerHTML={{ __html: describtion }}
                    ></p>


                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
