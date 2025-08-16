import Nav from "@/components/layout/Nav";
import FootNote from "@/components/layout/FootNote";
import HeroSection from "@/components/sections/HeroSection";
import MarketingServicesSection from "@/components/sections/MarketingServicesSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsGridSection from "@/components/sections/TestimonialsGridSection";
import TrainerSpecialtiesSection from "@/components/sections/TrainerSpecialtiesSection";
import MarketingApproachSection from "@/components/sections/MarketingApproachSection";
import {
  heroStats,
  mainServices,
  whyChooseUsItems,
  testimonialsData,
} from "@/lib/data";

// SEO metadata for homepage
export const metadata = {
  title:
    "Leadlift | Personal Trainer Marketing Agency - Get More Clients with SEO & Digital Marketing",
  description:
    "We help boxing trainers, yoga instructors, prenatal specialists, and 35+ fitness specialties get found online. Proven SEO, website design, and digital marketing strategies for personal trainers nationwide.",
  keywords:
    "personal trainer marketing, fitness SEO, personal trainer website design, boxing trainer marketing, yoga instructor SEO, prenatal trainer marketing",
  openGraph: {
    title: "Leadlift - Marketing Agency for Personal Trainers",
    description:
      "Get more clients with proven digital marketing strategies designed specifically for personal trainers.",
    url: "https://leadlift.com",
    type: "website",
  },
  alternates: {
    canonical: "https://your-app-name.vercel.app",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Nav />
      <HeroSection stats={heroStats} />
      <MarketingServicesSection services={mainServices} />
      <TrainerSpecialtiesSection />
      <MarketingApproachSection />
      <WhyChooseUsSection items={whyChooseUsItems} />
      <TestimonialsGridSection testimonials={testimonialsData} />
      <QuoteFormSection />
      <FootNote />
    </div>
  );
}
