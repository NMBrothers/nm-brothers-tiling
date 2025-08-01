import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import QuoteButton from "@/components/quote-button";

// Service data mapping
const serviceData = {
  "bathroom-tiling": {
    title: "Bathroom Tiling",
    description:
      "Complete bathroom renovations with waterproof tiling solutions. Modern designs and premium finishes that stand the test of time.",
    features: [
      "Waterproof tile installation",
      "Custom shower designs",
      "Floor and wall tiling",
      "Premium material selection",
      "Modern bathroom renovations",
      "Expert craftsmanship",
    ],
    heroImage: "/works/bathroom.webp",
  },
  "kitchen-tiling": {
    title: "Kitchen Tiling",
    description:
      "Stylish backsplashes and countertops that combine functionality with beautiful aesthetics for your dream kitchen.",
    features: [
      "Custom backsplash designs",
      "Countertop installations",
      "Subway and mosaic tiles",
      "Heat-resistant materials",
      "Easy-to-clean surfaces",
      "Professional installation",
    ],
    heroImage: "/works/kitchen.webp",
  },
  "floor-tiling": {
    title: "Floor Tiling",
    description:
      "Durable and elegant floor installations for living spaces, bedrooms, and outdoor areas with precision craftsmanship.",
    features: [
      "Porcelain and ceramic floors",
      "Natural stone installation",
      "Outdoor patio tiling",
      "Underfloor heating compatibility",
      "Slip-resistant options",
      "Long-lasting durability",
    ],
    heroImage: "/works/floor2.webp",
  },
};

interface ServicePageProps {
  params: {
    service: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.service as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What We Offer:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/#contact">
                <QuoteButton variant="dark" size="large" />
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-blue-400 rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-blue-400 rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional {service.title} Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At NM Brothers Tiling, we bring years of expertise and attention
              to detail to every {service.title.toLowerCase()} project. Our
              commitment to quality craftsmanship and customer satisfaction
              ensures results that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <QuoteButton variant="dark" />
              </Link>
              <Link
                href="/#gallery"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for the three services
export function generateStaticParams() {
  return [
    { service: "bathroom-tiling" },
    { service: "kitchen-tiling" },
    { service: "floor-tiling" },
  ];
}

// Generate metadata for each service page
export function generateMetadata({ params }: ServicePageProps) {
  const service = serviceData[params.service as keyof typeof serviceData];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | NM Brothers Tiling`,
    description: service.description,
  };
}
