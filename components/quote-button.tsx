"use client";

import { Button } from "@/components/ui/button";

interface QuoteButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
  size?: "default" | "large";
}

export default function QuoteButton({
  className = "",
  onClick,
  variant = "light",
  size = "default",
}: QuoteButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-4 text-xl font-medium h-16 min-h-16"
      : "px-7 py-3 text-lg font-medium h-12 min-h-12";

  const baseClasses = `rounded-full cursor-pointer ${sizeClasses}`;
  const variantClasses =
    variant === "light"
      ? "bg-white text-gray-900 hover:bg-gray-100"
      : "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <Button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      Get a quote →
    </Button>
  );
}
