import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { BotIdClient } from "botid/client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingActionButtons from "@/components/floating-action-buttons";
import StructuredData from "@/components/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Professional Tilers Cape Town | N&M Brothers Tilers",
    template: "%s | N&M Brothers Tilers",
  },
  description:
    "Expert tiling services in Cape Town. Over 10 years experience in bathroom, kitchen & floor tiling. Premium craftsmanship, waterproof solutions. Free quotes available.",
  keywords:
    "tilers Cape Town, bathroom tiling, kitchen tiling, floor tiling, tile installation, Joe Slovo Park, Cape Town contractors",
  authors: [{ name: "N&M Brothers Tilers" }],
  creator: "N&M Brothers Tilers",
  publisher: "N&M Brothers Tilers",
  metadataBase: new URL("https://nmbrotherstilers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://nmbrotherstilers.com",
    siteName: "N&M Brothers Tilers",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const protectedRoutes = [
  {
    path: "/api/contact",
    method: "POST",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <BotIdClient protect={protectedRoutes} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActionButtons />
        </div>
      </body>
    </html>
  );
}
