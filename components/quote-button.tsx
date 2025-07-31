"use client";

import { Button } from "@/components/ui/button";

interface QuoteButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
}

export default function QuoteButton({
  className = "",
  onClick,
  variant = "light",
}: QuoteButtonProps) {
  const baseClasses =
    "rounded-full px-7 py-3 text-lg font-medium h-12 min-h-12 cursor-pointer";
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
