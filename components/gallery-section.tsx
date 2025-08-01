"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
            Our recent work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects and see the quality
            craftsmanship we bring to every job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/works/bathroom.webp"
                alt="Modern bathroom renovation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/works/kitchen.webp"
                alt="Kitchen tile installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/works/bathroom2.webp"
                alt="Bathroom tile installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/works/bathroom3.webp"
                alt="Bathroom tile installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/works/shower.webp"
                alt="Luxury shower tile installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/works/bathroom4.webp"
                alt="Bathroom tile installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
