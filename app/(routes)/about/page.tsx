import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className="bg-black text-gray-50 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">About Rupaya</h1>
              <p className="text-lg text-white">
                At Rupaya, we are revolutionizing the world of finance with our cutting-edge platform. Our mission is to
                empower individuals and businesses alike with the tools and resources they need to take control of their
                financial future.
              </p>
              <p className="text-lg text-white">
                Our team of passionate experts, led by visionary founders, is dedicated to pushing the boundaries of
                innovation and creating a seamless, user-friendly experience that simplifies the complexities of
                finance.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="About Image"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default page