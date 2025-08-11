export default function WhyChooseUsSection({ items }) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Personal Trainers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your dedicated
            partners in building a thriving fitness business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
