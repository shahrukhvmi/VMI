import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Dr. Lee Hutchinson",
        role: "Group Chief Executive Officer, Eaton SAKS International Group",
        country: "United Arab Emirates",
        image: "/testi-1.png", // replace with actual path
        quote:
            "Working with Vibrant Media Inc was transformative. They took my chaotic ideas and turned them into a powerful, cohesive brand and a world-class digital experience. From bold design to strategic execution, every detail was intentional. VMI isn't just creative, they’re commercially sharp and truly collaborative. Highly recommended.",
    },
    {
        name: "Lisa Andria",
        role: "Owner & Director, Ladies Who Leap",
        country: "USA",
        image: "/testi-2.png", // replace with actual path
        quote:
            "Vibrant Media delivered an exceptional experience from start to finish. The team is professional, approachable, and truly understands how to bring a vision to life. They created a visually stunning and strategically sound website, explaining every recommendation with clarity and purpose. I look forward to continuing our collaboration. Highly recommended.",
    },
    {
        name: "Omar Locos",
        role: "Owner and Director, Locos Customs",
        country: "United Kingdom",
        image: "/testi-3.png", // replace with actual path
        quote:
            "Vibrant Media has been a game-changer for my business. They created a bold and memorable logo, a brand identity that truly stands out, and a website that looks amazing and works flawlessly. They are now managing our SEO, and we’re already seeing great progress in online visibility and leads. The team is professional, creative, and easy to work with. Highly recommended for anyone serious about growing their brand.",
    },

    // Add more testimonials as needed
];
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

            <section className="relative max-container-width section-width mx-auto">
                <div className="creative-wrapper">



                    <div className="creative-heading-wrap">
                        <h2 className="landing-heading">
                            A Complete{" "}
                            <span className="creative-heading-gradient">
                                Creative Partner
                            </span>{" "}
                            for Your Business
                        </h2>

                        <p className="creative-subtitle">
                            With Vibrant Media Inc., you get a reliable, all-in-one creative partner.
                        </p>

                    </div>

                    <div className="creative-card creative-card-css">



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



                    {/* LEFT SNOW */}
                    <div className="pointer-events-none select-none absolute top-40 -left-68 flex items-end sm:block hidden">
                        <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[250px] aspect-[2/7] -translate-x-6 sm:-translate-x-10">
                            <Image
                                src="/landing-images/snow.png"   // 👈 your left tree image
                                alt="Christmas Tree Left"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    {/* Left Starts  */}
                    <div className="pointer-events-none select-none absolute -top-10 -left-35 flex items-end sm:block hidden">
                        <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[300px] aspect-[2/7] -translate-x-6 sm:-translate-x-10">
                            <Image
                                src="/landing-images/start-left.png"   // 👈 your left tree image
                                alt="Christmas Tree Left"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    {/* Right Starts  */}
                    <div className="pointer-events-none select-none absolute top-20 -right-45 flex items-end sm:block hidden">
                        <div className="relative   w-[400px] sm:w-[400px] md:w-[400px] lg:w-[350px] aspect-[2/5] -translate-x-6 sm:-translate-x-10">
                            <Image
                                src="/landing-images/start-right.png"   // 👈 your left tree image
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
                    <div className="px-4">





                        <div className="testimonial-main-wrap z-10 relative">
                            <div className="relative w-6xl max-container-width mx-auto text-white">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={{
                                        nextEl: ".swiper-next",
                                        prevEl: ".swiper-prev",
                                    }}
                                    autoplay={{
                                        delay: 7000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: ".swiper-pagination",
                                    }}
                                    className="mx-auto"
                                >
                                    {testimonials.map((t, index) => (
                                        <SwiperSlide key={index}>
                                            {/* <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                                <div className="w-[30%] testimonial-img-width rounded-lg overflow-hidden">
                                                    <img
                                                        src={t.image}
                                                        alt={t.name}
                                                        className="object-cover w-full"
                                                    />
                                                </div>
                                                <div className="w-[70%] text-[28px] flex flex-col justify-around home-testimonial-text">
                                                    <h3 className="olivera-font">“{t.quote}”</h3>
                                                    <p className="mt-6 font-normal poppins-font">
                                                        <strong className="testi-name">{t.name}</strong> <br />
                                                        {t.role} <br />
                                                        {t.country}
                                                    </p>
                                                </div>
                                            </div> */}


                                            <div className="testimonial-card">
                                                <div className="testimonial-stars">

                                                    <Image
                                                        src="/landing-images/stars.svg"
                                                        alt=""
                                                        width={200}
                                                        height={300}
                                                        className=""
                                                    />
                                                </div>
                                                <p className="testimonial-quote">
                                                    “{t.quote}”
                                                </p>

                                                {/* Avatar + name */}
                                                <div className="testimonial-person">
                                                    <div className="testimonial-avatar">
                                                        <Image
                                                            src={t.image}
                                                            alt={t.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div className="testimonial-text">
                                                        <p className="testimonial-name">{t.name}</p>
                                                        <p className="testimonial-title">
                                                            {t.role} , {t.country}
                                                        </p>
                                                    </div>
                                                </div>


                                                {/* Stats row */}

                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Pagination */}
                                <div className="swiper-pagination mt-10 flex justify-center gap-4"></div>

                                {/* Navigation Arrows */}
                                <div className="swiper-prev cursor-pointer text-xl swiper-btn">
                                    <img src="/left-arrow.png" />
                                </div>
                                <div className="swiper-next cursor-pointer text-xl swiper-btn">
                                    <img src="/right-arrow.png" />
                                </div>
                            </div>
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

            </section >
        </>
    )
}

export default CreativePartner