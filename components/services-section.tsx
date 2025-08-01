"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 md:items-stretch">
          <div className="space-y-8 flex flex-col h-full">
            <Link href="/services/bathroom-tiling" className="flex-1">
              <div className="group relative cursor-pointer p-8 overflow-visible bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 hover:bg-blue-50/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 h-full flex flex-col">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Architectural Corner Lines */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>

                <div className="relative z-10">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                      Bathroom Tiling
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                      Complete bathroom renovations with waterproof tiling
                      solutions. Modern designs and premium finishes that stand
                      the test of time.
                    </p>
                    <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1">
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="space-y-8 flex flex-col h-full">
            <Link href="/services/kitchen-tiling" className="flex-1">
              <div className="group relative cursor-pointer p-8 overflow-visible bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 hover:bg-blue-50/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 h-full flex flex-col">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Architectural Corner Lines */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>

                <div className="relative z-10">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                      Kitchen Tiling
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                      Stylish backsplashes and countertops that combine
                      functionality with beautiful aesthetics for your dream
                      kitchen.
                    </p>
                    <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1">
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="space-y-8 flex flex-col h-full">
            <Link href="/services/floor-tiling" className="flex-1">
              <div className="group relative cursor-pointer p-8 overflow-visible bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 hover:bg-blue-50/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 h-full flex flex-col">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Architectural Corner Lines */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:w-16 group-hover:h-16"></div>

                <div className="relative z-10">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                      Floor Tiling
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                      Durable and elegant floor installations for living spaces,
                      bedrooms, and outdoor areas with precision craftsmanship.
                    </p>
                    <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1">
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
