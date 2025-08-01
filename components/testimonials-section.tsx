"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
            What our clients say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
            <CardContent className="p-0">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                "N&M Brothers transformed our bathroom completely. The attention
                to detail and quality of work exceeded our expectations. Highly
                recommended!"
              </p>
              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Cape Town</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
            <CardContent className="p-0">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                "Professional, punctual, and perfectionist. The kitchen
                backsplash they installed is absolutely stunning. Worth every
                rand!"
              </p>
              <div>
                <p className="font-medium text-gray-900">
                  Michael van der Merwe
                </p>
                <p className="text-sm text-gray-500">Johannesburg</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm p-4 sm:p-6 md:p-8">
            <CardContent className="p-0">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                "From quote to completion, the service was exceptional. Our new
                floor tiles look amazing and the workmanship is top quality."
              </p>
              <div>
                <p className="font-medium text-gray-900">Priya Patel</p>
                <p className="text-sm text-gray-500">Durban</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
