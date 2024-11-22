"use client";
import Image from "next/image";
import React from "react";
import heroImage from "../../../public/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white max-h-screen">
      <section className="text-black body-font text-lg font-serif font-bold bg-white">
        <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col justify-center items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-12 flex flex-col md:items-center md:text-left items-center text-center">
            <p className="pb-3 text-4xl text-black mt-14">
              Welcome to My Blog
            </p>
            <h1 className="title-font text-center mt-3 md:mb-10 text-lg font-medium text-black">
              Explore insights, tutorials, and stories on web development, programming, and technology.
              Whether you`re a seasoned developer or just beginning your coding journey, you`ll find valuable tips,
              helpful guides, and inspiration. Join our community to simplify complex topics and ignite your passion for tech!
            </h1>
            <div className="flex justify-center items-center md:pt-1 pt-5">
              <Link
                href={"/blog"}
                className="inline-flex bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-[#53534f] transition-colors duration-300 shadow-md"
              >
                Explore Now
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:max-w-lg md:pr-20 lg:w-full md:w-1/2 w-5/6 rounded-2xl">
            <Image
              className="object-contain md:h-[480px] h-[355px] rounded-3xl hover:scale-110 duration-500 hover:duration-500"
              alt="hero blog image"
              src={heroImage}
              width={500}
              height={340}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;