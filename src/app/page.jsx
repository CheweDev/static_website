import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
      <Header />
      <HeroSection stats={heroStats} />
      <MarketingServicesSection services={mainServices} />
      <WhyChooseUsSection items={whyChooseUsItems} />
      <TestimonialsGridSection testimonials={testimonialsData} />
      <QuoteFormSection />
      <Footer />
    </div>
  );
}
