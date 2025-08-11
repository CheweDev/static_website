import Image from "next/image";

export default function AboutStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, LeadLift was born from a simple observation:
              personal trainers are experts at transforming bodies and lives,
              but many struggle with the digital marketing needed to grow their
              businesses in today's competitive landscape.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our founders, former personal trainers themselves, understood the
              unique challenges facing fitness professionals. They combined
              their industry knowledge with cutting-edge digital marketing
              expertise to create a specialized agency that speaks the language
              of fitness while delivering measurable results.
            </p>
            <p className="text-lg text-gray-600">
              Today, we've helped over 500+ personal trainers across the country
              build thriving businesses through strategic SEO, targeted
              advertising, and conversion-optimized websites.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.png"
              alt="FitPro Trainers team meeting"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
