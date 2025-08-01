# Service Detail Pages Implementation Plan

## Overview

Implementing dedicated service detail pages for N&M Brothers Tiling's three main services:

- Bathroom Tiling (`/services/bathroom-tiling`)
- Kitchen Tiling (`/services/kitchen-tiling`)
- Floor Tiling (`/services/floor-tiling`)

## Page Structure

Each service page will include:

- Hero Section (full-width image gallery)
- Service Overview (2-column: description + key benefits)
- Process Timeline (4-6 steps with icons)
- Materials & Techniques (grid of tile types/brands)
- Pricing Tiers (Basic/Premium/Luxury packages)
- Before/After Gallery (masonry grid, filterable)
- FAQ Section (collapsible accordion)
- CTA Section (consultation booking + quote request)

---

## PHASE 1: Route Structure & Data Setup

### Task 1: Create Service Routes

- [ ] Create `/app/services/[service]/page.tsx` dynamic route
- [ ] Add `generateStaticParams()` for bathroom-tiling, kitchen-tiling, floor-tiling
- [ ] Set up service slug validation and 404 handling
- [ ] Create layout.tsx for services if needed

### Task 2: Service Data Structure

- [ ] Create `/lib/services-data.ts` with complete service objects
- [ ] Define TypeScript interfaces (Service, ProcessStep, PricingTier, FAQ, etc.)
- [ ] Add image paths for each service (hero, gallery, process icons)
- [ ] Include SEO metadata for each service

---

## PHASE 2: Core Page Components

### Task 3: Service Hero Section

- [ ] Create `ServiceHero` component with image carousel
- [ ] Implement swiper/carousel functionality (3-4 hero images per service)
- [ ] Add overlay with service title, breadcrumbs, and key stats
- [ ] Add smooth scroll CTA button to first content section

### Task 4: Service Overview Section

- [ ] Build 2-column layout (description left, benefits right)
- [ ] Create animated counter components for stats (years experience, projects completed)
- [ ] Add service-specific benefits list with checkmark icons
- [ ] Include "Quick Quote" floating button

### Task 5: Process Timeline

- [ ] Create horizontal timeline component with 4-6 steps
- [ ] Add custom icons for each process step (consultation, design, installation, etc.)
- [ ] Implement scroll-triggered animations for timeline reveal
- [ ] Add modal/popover for detailed step descriptions

---

## PHASE 3: Content Sections

### Task 6: Materials & Techniques Grid

- [ ] Create responsive grid layout (3-4 columns desktop, 2 mobile)
- [ ] Add material cards with images, names, and brief descriptions
- [ ] Implement hover effects and image zoom
- [ ] Include "View Full Catalog" link to gallery section

### Task 7: Pricing Tiers

- [ ] Build 3-tier pricing cards (Basic/Premium/Luxury)
- [ ] Add feature comparison checkmarks
- [ ] Create "Most Popular" badge for middle tier
- [ ] Include "Get Custom Quote" CTA for complex projects

### Task 8: Before/After Gallery

- [ ] Implement masonry grid layout using CSS Grid
- [ ] Add filter buttons (All, Residential, Commercial)
- [ ] Create lightbox modal for enlarged images
- [ ] Add before/after slider component for comparison images

### Task 9: FAQ Section

- [ ] Build accordion component with smooth expand/collapse
- [ ] Add 6-8 service-specific FAQs per service
- [ ] Implement search functionality for FAQs
- [ ] Include "Ask a Question" contact form at bottom

### Task 10: CTA Section

- [ ] Create split layout (consultation booking left, quote form right)
- [ ] Add calendar integration for booking appointments
- [ ] Build multi-step quote form (project type, size, timeline, contact)
- [ ] Include trust signals (certifications, guarantees, testimonials)

---

## PHASE 4: Navigation & Integration

### Task 11: Update Services Cards

- [ ] Add click handlers to service cards in `services-section.tsx`
- [ ] Implement smooth page transitions
- [ ] Add loading states for navigation
- [ ] Update hover states to indicate clickability

### Task 12: Breadcrumb Navigation

- [ ] Create reusable Breadcrumb component
- [ ] Add to service page layout with Home > Services > [Service Name]
- [ ] Style with proper spacing and hover effects
- [ ] Add structured data for breadcrumbs

---

## PHASE 5: SEO & Performance

### Task 13: SEO Optimization

- [ ] Add unique meta titles and descriptions for each service
- [ ] Implement structured data (LocalBusiness, Service schemas)
- [ ] Create Open Graph images for social sharing
- [ ] Add canonical URLs and internal linking

### Task 14: Responsive Design

- [ ] Test all components on mobile, tablet, desktop breakpoints
- [ ] Optimize image sizes and loading (next/image optimization)
- [ ] Ensure touch-friendly interactions on mobile
- [ ] Fix any layout issues or text readability problems

---

## PHASE 6: Testing & Polish

### Task 15: Final Testing

- [ ] Test all navigation flows and form submissions
- [ ] Verify image loading and carousel functionality
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Performance audit and Core Web Vitals optimization
- [ ] Cross-browser compatibility testing

---

## Example Content Structure

### Bathroom Tiling Service

**Process:** Consultation → Design → Waterproofing → Installation → Grouting → Sealing
**Materials:** Porcelain, Ceramic, Natural Stone, Mosaic options
**Pricing:** Basic ($X/sqft), Premium ($Y/sqft), Luxury ($Z/sqft)

### Kitchen Tiling Service

**Process:** Consultation → Design → Surface Prep → Installation → Grouting → Sealing
**Materials:** Subway tiles, Natural stone, Glass mosaics, Porcelain slabs
**Pricing:** Basic ($X/sqft), Premium ($Y/sqft), Luxury ($Z/sqft)

### Floor Tiling Service

**Process:** Consultation → Surface Assessment → Preparation → Installation → Grouting → Finishing
**Materials:** Ceramic, Porcelain, Natural stone, Luxury vinyl tile
**Pricing:** Basic ($X/sqft), Premium ($Y/sqft), Luxury ($Z/sqft)

---

## Timeline & Priority

**Estimated Timeline:** 3-4 days for complete implementation
**Priority Order:** Routes → Data → Hero → Overview → Navigation → Other sections → SEO/Polish

**Start with:** Task 1 (Create Service Routes)
