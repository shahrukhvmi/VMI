import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondNavbar = () => {
  return (
    <div className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link className="h-auto w-auto flex flex-row items-center" href="#">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        <div className="w-[50%] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              About Us
            </a>
            <a href="#projects" className="cursor-pointer">
              Services
            </a>
            <a href="#projects" className="cursor-pointer">
              Portfolio
            </a>
            <a href="#projects" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <button className="flex items-center gap-2 nav-btn cursor-pointer olivera-font text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
