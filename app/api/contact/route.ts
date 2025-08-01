import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/contact-form-schema";
import { contactFormRateLimiter } from "@/lib/rate-limiter";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    // Check rate limit
    if (contactFormRateLimiter.isRateLimited(ip)) {
      const resetTime = contactFormRateLimiter.getResetTime(ip);
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Please try again in ${resetTime} seconds.`,
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate the data
    const validatedData = contactFormSchema.parse(body);

    // Also rate limit by email to prevent abuse
    if (contactFormRateLimiter.isRateLimited(validatedData.email)) {
      const resetTime = contactFormRateLimiter.getResetTime(
        validatedData.email
      );
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests from this email. Please try again in ${resetTime} seconds.`,
        },
        { status: 429 }
      );
    }

    // Email to the business owner
    const businessEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #ddd;">
        
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${
      validatedData.email
    }</a></p>
        <p><strong>Phone:</strong> <a href="tel:${validatedData.phone}">${
      validatedData.phone
    }</a></p>
        
        <h3 style="color: #555;">Message:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${validatedData.message.replace(/\n/g, "<br>")}
        </p>
        
        <hr style="border: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">
          This email was sent from the contact form on NM Brothers Tiling website.
        </p>
      </div>
    `;

    const businessEmailText = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}

Message:
${validatedData.message}

---
This email was sent from the contact form on NM Brothers Tiling website.
    `;

    // Confirmation email to the user
    const userEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for contacting NM Brothers Tiling</h2>
        <hr style="border: 1px solid #ddd;">
        
        <p>Hello ${validatedData.name},</p>
        
        <p>We've received your message and will get back to you within 24 hours.</p>
        
        <h3 style="color: #555;">Your Message:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${validatedData.message.replace(/\n/g, "<br>")}
        </p>
        
        <p>If you have any urgent inquiries, please call us at <strong>+27 67 737 2646</strong>.</p>
        
        <p>Best regards,<br>
        NM Brothers Tiling Team</p>
        
        <hr style="border: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
      </div>
    `;

    const userEmailText = `
Thank you for contacting NM Brothers Tiling

Hello ${validatedData.name},

We've received your message and will get back to you within 24 hours.

Your Message:
${validatedData.message}

If you have any urgent inquiries, please call us at +27 67 737 2646.

Best regards,
NM Brothers Tiling Team

---
This is an automated confirmation email. Please do not reply to this email.
    `;

    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: businessEmailText,
      html: businessEmailHTML,
      replyTo: validatedData.email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: validatedData.email,
      subject: "Thank you for contacting NM Brothers Tiling",
      text: userEmailText,
      html: userEmailHTML,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Check if it's a validation error
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form and try again.",
          errors: error,
        },
        { status: 400 }
      );
    }

    // Check if it's an email sending error
    if (error instanceof Error && error.message.includes("EAUTH")) {
      console.error(
        "Email authentication failed. Check your Gmail credentials."
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send email at this time. Please try again later or call us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
