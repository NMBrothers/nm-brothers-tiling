"use client";

import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import QuoteButton from "@/components/quote-button";
import Logo from "@/components/logo";

export default function Header() {
  return (
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

            <QuoteButton
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
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
  );
}
