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
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
              reprehenderit voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <p className="text-lg text-gray-600">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit anim id est laborum.
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
