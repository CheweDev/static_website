import Nav from "@/components/layout/Nav";
import FootNote from "@/components/layout/FootNote";
import BlogPostsGridSection from "@/components/sections/BlogPostsGridSection";
import CtaSection from "@/components/sections/CtaSection";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Nav />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Resources for Personal Trainers
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our expert articles, guides, and
              insights on marketing, business growth, and industry trends for
              fitness professionals.
            </p>
          </div>
        </div>
      </section>

      <BlogPostsGridSection posts={blogPosts} />
      <CtaSection
        title="Ready to Grow Your Training Business?"
        description="Join hundreds of successful personal trainers who trust us to handle their marketing while they focus on changing lives."
        primaryLink="/contact"
        primaryText="Get Your Free Consultation"
      />
      <FootNote />
    </div>
  );
}
