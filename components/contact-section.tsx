"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
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
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
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

              <div className="pt-8 flex justify-center">
                <button
                  type="submit"
                  className="w-full max-w-xs px-10 py-4 text-xl font-medium h-16 min-h-16 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    console.log("Contact form submitted");
                    // TODO: Add actual form submission logic here
                  }}
                >
                  Get a quote →
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+27 67 737 2646</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">
                    info@nmbrotherstiling.co.za
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Serving Western Cape</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
