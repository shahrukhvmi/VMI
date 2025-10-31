import { meta_url } from "@/config/constants";
import MetaLayout from "@/Meta/MetaLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";






export async function getServerSideProps() {
    let slug = "social-media-portfolio";



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


export default function SlugDesign({ layoutData }) {

    console.log(layoutData?.data, "layoutDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const heading1 = layoutData?.data?.data?.custom_detail?.[0]?.main_heading_h2?.value;
    const heading2 = layoutData?.data?.data?.custom_detail?.[1]?.span_heading_h2?.value;
    const Data = layoutData?.data?.posts || [];



    const chunkedData = [];
    for (let i = 0; i < Data.length; i += 2) {
        chunkedData.push(Data.slice(i, i + 2));
    }

    return (<>
        <MetaLayout
            data={layoutData?.head?.json}
            title="Our Creative Work"
            description="Explore our portfolio showcasing UI/UX design, web development, branding, SEO, and digital marketing projects for clients across industries and markets."
            canonical={`${meta_url}portfolio/`}
        />

        <main className="relative text-white overflow-hidden z-10">
            <section>
                <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 single-portfolio-responsive-spacing">
                    <div className="portfolio-banner-shadow"></div>
                    <div className="portfolio-banner-shadow-right"></div>
                </div>

                <div className="w-6xl mx-auto max-container-width portfolio-all-wrap gap-30">
                    <div className="portfolio-inner-heading text-center w-full">
                        <h2 className="olivera-font">
                            <span className="portfolio-inner-heading-top">
                                {heading1}
                            </span>{" "}
                            <br />
                            <span className="portfolio-inner-heading-span">
                                {heading2}
                            </span>
                        </h2>
                    </div>

                    {/* <div className="portfolio-single flex justify-center gap-30"> */}


                    {chunkedData.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`portfolio-single flex justify-center gap-30 ${rowIndex === chunkedData.length - 1
                                ? "mb-0 md:mb-40"
                                : "mb-10"
                                }`}
                        >
                            {row.map((item) => (
                                <Link href={`/portfolio/social/${item.slug}`} key={item.id}>
                                    <div className="detail-portfolio-image-wrapper relative">
                                        <Image
                                            src={item.image || "/placeholder.png"}
                                            width={500}
                                            height={500}
                                            alt={item.title}
                                            className="object-cover"
                                        />
                                        <div className="detail-portfolio-image-overlay">
                                            <div className="detail-portfolio-banner-badge">
                                                <div className="mb-2">
                                                    <span className="ms-2 poppins-font detail-portfolio-branding">
                                                        Branding
                                                    </span>
                                                </div>
                                                <p className="ms-2 poppins-font font-bold">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* <Link href="/development-portfolio/earthane">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-2.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">Earthane</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div> */}

                    {/* <div className="portfolio-single flex justify-center gap-30">
                        <Link href="/development-portfolio/360-products">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-5.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">360 Products </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/development-portfolio/loco-customs">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-6.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">
                                            Loco’s Customs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="portfolio-single flex justify-center gap-30">
                        <Link href="/development-portfolio/fulfill-panda">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-7.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">Fulfill Panda</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/development-portfolio/relish-restaurant">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-8.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">
                                            Relish Restaurant
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="portfolio-single flex justify-center gap-30">
                        <Link href="/development-portfolio/etizan">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-9.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">Etizan</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/development-portfolio/ferrara">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-10.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">Ferrara</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="portfolio-single flex justify-center gap-30">
                        <Link href="/development-portfolio/karwan-rent-a-car">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-11.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">
                                            Karwan Rent a Car
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/development-portfolio/taiia-jewellery">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-12.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">
                                            Taiia Jewellery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="portfolio-single flex justify-center gap-30 mb-0 md:mb-40">
                        <Link href="/development-portfolio/rhv-media">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/web-3.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">RHV Media</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/development-portfolio/floor-express">
                            <div className="detail-portfolio-image-wrapper relative">
                                <Image src="/floor-port.png" width={500} height={500} />
                                <div className="detail-portfolio-image-overlay">
                                    <div className="detail-portfolio-banner-badge">
                                        <div className="mb-2">
                                            <span className="ms-2 poppins-font detail-portfolio-branding">
                                                Web Design & Development
                                            </span>
                                        </div>
                                        <p className="ms-2 poppins-font font-bold">Floor Express</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </section>
        </main>

    </>
    );
}
