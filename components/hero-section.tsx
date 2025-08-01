"use client";

import Image from "next/image";
import QuoteButton from "@/components/quote-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/kitchen.jpg"
          alt="Modern luxury kitchen with expert tiling work"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 md:mb-8">
          Expert tiling services
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>for your home
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
          Transform your space with premium tile installation. Over 10 years of
          experience bringing quality craftsmanship to South African homes.
        </p>
        <QuoteButton
          size="large"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
}
