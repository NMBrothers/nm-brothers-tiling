"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Caylin Roodt",
    rating: 5,
    date: "August 2025",
    text: "Absolutely amazing experience, great communication and the quality of work is outstanding - 100% recommend and will be using them again in the future",
  },
  {
    name: "Nuraan Kamaar",
    rating: 5,
    date: "July 2025",
    text: "Mr. Nyasha is a wonderful, humble professional. I would gladly recommend his expertise anyday. The team assisting are unobtrusive and dedicated in completing the painting project they took on, thank you guys wishing this business every success.",
  },
  {
    name: "Damien Fitzpatrick",
    rating: 5,
    date: "May 2025",
    text: "Only 5 stars? Should be more for the quality of work and craftsmanship delivered by Nyasha and his team. Delighted with the work done on tiling my kitchen. Excellent communication from Nyasha all the time, showed up on time and team exceptionally neat and tidy. Everything cleaned and replaced upon completion. Exceptional job!",
  },
  {
    name: "Bake Aways",
    rating: 5,
    date: "July 2025",
    text: "From the first message to the last interaction, Nyasha and his crew have been extremely helpful and friendly. They went above and beyond in helping me during a crisis. Highly recommend them!",
  },
  {
    name: "Francois Van Zyl",
    rating: 5,
    date: "May 2025",
    text: "Nyasha and team. Thank you very much for a job well done. (Tiling of Kitchen, Painting of house and Roof) Definitely Recommend N&M Brothers",
  },
  {
    name: "John Rafferty",
    rating: 5,
    date: "July 2025",
    text: "I highly recommend these brothers for such a professional job their punctuality and courtesy",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight text-gray-900">
            What our clients say
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Real reviews from Google Business Profile
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 font-medium">
              5.0 average rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full hover:-translate-y-1"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-base">
                      {review.name}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    "{review.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
