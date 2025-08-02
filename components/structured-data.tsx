export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "N&M Brothers Tilers",
    image: "https://nmbrotherstilers.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23 Isipingo Avenue",
      addressLocality: "Joe Slovo Park",
      addressRegion: "Cape Town",
      postalCode: "7441",
      addressCountry: "ZA",
    },
    telephone: "+27 67 737 2646",
    url: "https://nmbrotherstilers.com",
    priceRange: "$$",
    description:
      "Professional tiling services in Cape Town with over 10 years experience",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9249,
      longitude: 18.4241,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cape Town",
      },
    ],
    serviceType: [
      "Bathroom Tiling",
      "Kitchen Tiling",
      "Floor Tiling",
      "Tile Installation",
      "Tile Repair",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: [
      "https://www.facebook.com/nmbrotherstilers",
      "https://www.instagram.com/nmbrotherstilers",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
