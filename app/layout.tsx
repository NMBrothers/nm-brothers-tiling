import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingActionButtons from "@/components/floating-action-buttons";
import "./globals.css";

export const metadata: Metadata = {
  title: "N&M Brothers Tiling",
  description: "N&M Brothers Tiling",
  generator: "N&M Brothers Tiling",
};

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
