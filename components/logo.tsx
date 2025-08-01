import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  imageClassName?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  textClassName = "",
  imageClassName = "",
  href = "#",
}) => {
  const LogoContent = () => (
    <div className={`flex items-center ${className}`}>
      <div className={`relative h-6 w-6 md:h-8 md:w-8 ${imageClassName}`}>
        <Image
          src="/logo.svg"
          alt="N&M Brothers Tiling Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span
          className={`ml-2 md:ml-3 text-sm md:text-lg font-medium ${textClassName}`}
        >
          N&M BROTHERS TILING
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
