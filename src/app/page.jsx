import Nav from "@/components/layout/Nav";
import FootNote from "@/components/layout/FootNote";
import HeroSection from "@/components/sections/HeroSection";
import MarketingServicesSection from "@/components/sections/MarketingServicesSection";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsGridSection from "@/components/sections/TestimonialsGridSection";
import {
  heroStats,
  mainServices,
  whyChooseUsItems,
  testimonialsData,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Nav />
      <HeroSection stats={heroStats} />
      <MarketingServicesSection services={mainServices} />
      <WhyChooseUsSection items={whyChooseUsItems} />
      <TestimonialsGridSection testimonials={testimonialsData} />
      <QuoteFormSection />
      <FootNote />
    </div>
  );
}
