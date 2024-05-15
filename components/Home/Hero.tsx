import React from "react";
import Image from "next/image";
import Logo from "@/public/LOGO.png";

const Hero = () => {
  return (
    <section className="bg-black hero">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xltext-white">
            Exploring Decentralized Finance
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sodales scelerisque dui, sit amet ultrices lacus consectetur at.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-white"
          >
            Learn More
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={Logo} alt="Rupaya Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;