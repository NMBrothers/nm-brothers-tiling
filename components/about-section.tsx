"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
        {/* Image Side */}
        <div className="relative h-64 sm:h-80 lg:h-auto">
          <Image
            src="/tiles.png"
            alt="Modern bathroom renovation with expert tiling"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              About our service
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
              Founded by brothers, N&M Brothers Tiling has been transforming
              South African homes for years. Our commitment to quality
              craftsmanship and customer satisfaction has made us the trusted
              choice for homeowners across the region.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
              We specialize in premium tile installation, creating beautiful,
              durable spaces that enhance your home's value and your daily
              living experience.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-400 mb-2">
                  50+
                </div>
                <div className="text-sm sm:text-base text-gray-400">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-400 mb-2">
                  10+
                </div>
                <div className="text-sm sm:text-base text-gray-400">
                  Years Experience
                </div>
              </div>
            </div>

            <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-medium h-12">
              Learn more →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
