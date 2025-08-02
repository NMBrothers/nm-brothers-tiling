import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "N&M Brothers Tilers - Professional Tiling Services Cape Town",
    short_name: "N&M Tilers",
    description:
      "Expert tiling services in Cape Town with over 10 years experience",
    start_url: "/",
    display: "standalone",
    categories: ["business", "lifestyle"],
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    lang: "en-ZA",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        type: "image/png",
        sizes: "1200x630",
      },
    ],
  };
}
