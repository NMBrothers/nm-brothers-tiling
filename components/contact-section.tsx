"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/contact-form-schema";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you! We'll be in touch soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
        {/* Image Side */}
        <div className="relative h-64 sm:h-80 lg:h-auto order-2 lg:order-1">
          <Image
            src="/contact.png"
            alt="Tiling consultation and planning"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              Fill the form to receive a call
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 md:mb-12">
              Get in touch with us today for a free consultation and quote.
              We're here to bring your tiling vision to life.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={`bg-transparent border-0 border-b ${
                    errors.name ? "border-red-400" : "border-gray-600"
                  } rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className={`bg-transparent border-0 border-b ${
                    errors.email ? "border-red-400" : "border-gray-600"
                  } rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="Enter your phone number"
                  className={`bg-transparent border-0 border-b ${
                    errors.phone ? "border-red-400" : "border-gray-600"
                  } rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us about your project..."
                  className={`bg-transparent border-0 border-b ${
                    errors.message ? "border-red-400" : "border-gray-600"
                  } rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[100px] resize-none`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-900/20 border border-green-700"
                      : "bg-red-900/20 border border-red-700"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className={
                      submitStatus.type === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <div className="pt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-xs px-10 py-4 text-xl font-medium h-16 min-h-16 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get a quote →"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+27 67 737 2646</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">
                    nmbrotherstilers@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Serving Western Cape</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
