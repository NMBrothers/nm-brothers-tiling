"use client";

import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  return (
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
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} N&M Brothers Tiling. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
