"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import QuoteButton from "@/components/quote-button";
import Logo from "@/components/logo";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo href="#" textClassName="text-white" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                className="text-base font-medium hover:text-blue-400 transition-colors"
                href="#home"
              >
                Home
              </Link>
              <Link
                className="text-base font-medium hover:text-blue-400 transition-colors"
                href="#about"
              >
                About
              </Link>
              <Link
                className="text-base font-medium hover:text-blue-400 transition-colors"
                href="#services"
              >
                Services
              </Link>
              <Link
                className="text-base font-medium hover:text-blue-400 transition-colors"
                href="#gallery"
              >
                Gallery
              </Link>
              <Link
                className="text-base font-medium hover:text-blue-400 transition-colors"
                href="#contact"
              >
                Contact
              </Link>

              <QuoteButton />
            </nav>

            {/* Mobile Menu */}
            <MobileMenu
              logoComponent={
                <Logo href="#" textClassName="text-white" showText={true} />
              }
              ctaButton={{
                text: "Get a quote →",
                onClick: () => {
                  // Add your CTA logic here
                  console.log("CTA clicked");
                },
              }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
              Transform your space with premium tile installation. Over 10 years
              of experience bringing quality craftsmanship to South African
              homes.
            </p>
            <QuoteButton size="large" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <div className="space-y-8">
                <div className="group relative cursor-pointer p-8 overflow-visible">
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

                  <div className="relative z-10 flex items-start gap-4">
                    <ArrowUpRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        Bathroom Tiling
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Complete bathroom renovations with waterproof tiling
                        solutions. Modern designs and premium finishes that
                        stand the test of time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="group relative cursor-pointer p-8 overflow-visible">
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

                  <div className="relative z-10 flex items-start gap-4">
                    <ArrowUpRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        Kitchen Tiling
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Stylish backsplashes and countertops that combine
                        functionality with beautiful aesthetics for your dream
                        kitchen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="group relative cursor-pointer p-8 overflow-visible">
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

                  <div className="relative z-10 flex items-start gap-4">
                    <ArrowUpRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        Floor Tiling
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Durable and elegant floor installations for living
                        spaces, bedrooms, and outdoor areas with precision
                        craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Split Layout */}
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
                  craftsmanship and customer satisfaction has made us the
                  trusted choice for homeowners across the region.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
                  We specialize in premium tile installation, creating
                  beautiful, durable spaces that enhance your home's value and
                  your daily living experience.
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

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6">
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
                    alt="Kitchen backsplash installation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/works/bathroom2.webp"
                    alt="Living room floor tiling"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/works/bathroom3.webp"
                    alt="Outdoor patio tiling"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/works/shower.webp"
                    alt="Luxury bathroom renovation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/works/bathroom4.webp"
                    alt="Shower renovation with mosaic tiles"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6">
                What our clients say
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-400 text-blue-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    "N&M Brothers transformed our bathroom completely. The
                    attention to detail and quality of work exceeded our
                    expectations. Highly recommended!"
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Cape Town</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-400 text-blue-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    "Professional, punctual, and perfectionist. The kitchen
                    backsplash they installed is absolutely stunning. Worth
                    every rand!"
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">
                      Michael van der Merwe
                    </p>
                    <p className="text-sm text-gray-500">Johannesburg</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-400 text-blue-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    "From quote to completion, the service was exceptional. Our
                    new floor tiles look amazing and the workmanship is top
                    quality."
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Priya Patel</p>
                    <p className="text-sm text-gray-500">Durban</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section with Split Layout */}
        <section id="contact" className="relative">
          <div className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
            {/* Image Side */}
            <div className="relative h-64 sm:h-80 lg:h-auto order-2 lg:order-1">
              <Image
                src="/contact.png"
                alt="Tiling consultation and planning"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Side */}
            <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 leading-tight">
                  Fill the form to receive a call
                </h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
                  Get in touch with us today for a free consultation and quote.
                  We're here to bring your tiling vision to life.
                </p>

                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Enter your full name"
                      className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[100px] resize-none"
                    />
                  </div>

                  <div className="pt-8">
                    <QuoteButton size="large" />
                  </div>
                </form>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">+27 11 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">
                        info@nmbrotherstiling.co.za
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">
                        Serving Gauteng, Western Cape & KwaZulu-Natal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo
              href="#"
              textClassName="text-white text-lg font-medium"
              imageClassName="h-8 w-8 mr-3"
              className="mb-4 md:mb-0"
            />
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex gap-4 sm:gap-6">
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  href="#"
                >
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © 2024 N&M Brothers Tiling. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
