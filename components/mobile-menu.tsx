/**
 * MobileMenu Component
 *
 * A responsive mobile navigation menu that overlays on top of content.
 * Features smooth animations, backdrop blur, and prevents body scrolling when open.
 *
 * @param logoComponent - Optional custom logo component for the menu header
 * @param navItems - Array of navigation items. Uses default items if not provided
 * @param showSocialIcons - Whether to show social media icons (default: true)
 * @param ctaButton - Optional call-to-action button configuration
 *
 * Example usage:
 * ```tsx
 * <MobileMenu
 *   logoComponent={<YourLogo />}
 *   navItems={[
 *     { href: "#home", label: "Home" },
 *     { href: "#about", label: "About" }
 *   ]}
 *   ctaButton={{
 *     text: "Get Started",
 *     onClick: () => handleCTA()
 *   }}
 *   showSocialIcons={true}
 * />
 * ```
 */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import QuoteButton from "@/components/quote-button";

interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  logoComponent?: React.ReactNode;
  navItems?: NavItem[];
  showSocialIcons?: boolean;
  ctaButton?: {
    text: string;
    onClick?: () => void;
  };
}

export default function MobileMenu({
  logoComponent,
  navItems,
  showSocialIcons = true,
  ctaButton,
}: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultNavItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const navigationItems = navItems || defaultNavItems;

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 lg:hidden">
            <div className="container mx-auto px-4 sm:px-6">
              {/* Header in menu */}
              <div className="flex items-center justify-between h-16">
                {logoComponent || (
                  <div className="flex items-center">
                    <div className="h-6 w-6 bg-white rounded-sm flex items-center justify-center">
                      <div className="h-3 w-3 bg-gray-900 rounded-sm"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">
                      N&M Brothers Tiling
                    </span>
                  </div>
                )}
                <button className="p-2" onClick={closeMenu}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="border-t border-gray-700 py-6 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    className="block px-3 py-4 text-lg font-medium hover:text-blue-400 transition-colors"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CTA Button */}
                {ctaButton && (
                  <div className="px-3 py-4">
                    <QuoteButton
                      className="w-full"
                      onClick={() => {
                        ctaButton.onClick?.();
                        closeMenu();
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
