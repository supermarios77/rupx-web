import React from "react";
import Image from "next/image";
import Logo from "@/public/LOGO.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-black text-gray-50 py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Exploring Decentralized Finance
            </h1>
            <p className="text-lg text-white">
              Experience the future of finance with Rupaya. Our innovative
              platform combines cutting-edge technology with a sleek,
              user-friendly interface to make managing your money easier than
              ever before.
            </p>
            <div className="flex gap-4">
              <Button className="text-black" size="lg">
                Get Started
              </Button>
              <Button
                className="text-white glow hover:text-gray-300"
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="Hero Image"
              className="mx-auto rounded-lg shadow-lg h-full sm:invisible md:visible"
              src={Logo}
              style={{
                aspectRatio: "700/500",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;