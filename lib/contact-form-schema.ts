import { z } from "zod";

// Phone number regex - allows various formats
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4,6}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),

  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .transform((val) => val.trim()), // Remove leading/trailing whitespace
});

// Type inference for TypeScript
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Server-side only validation (for rate limiting, etc.)
export const serverContactFormSchema = contactFormSchema.extend({
  // Add any server-only fields here
  userAgent: z.string().optional(),
  ipAddress: z.string().optional(),
});

export type ServerContactFormData = z.infer<typeof serverContactFormSchema>;
