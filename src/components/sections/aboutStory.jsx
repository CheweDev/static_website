import Image from "next/image";

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
              lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur
              sodales ligula in libero. Sed dignissim lacinia nunc.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
              metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
              Quisque volutpat condimentum velit. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-white/15 to-transparent rounded-3xl backdrop-blur-sm z-0"></div>
            <div className="relative z-10">
              <Image
                src="https://placehold.co/600x400"
                alt="Professional personal trainer working with client"
                width={500}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="w-full h-auto rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
