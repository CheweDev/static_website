const Stats = ({ stats }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Impact
          </h2>
          <p className="text-xl text-blue-100">
            Numbers don't lie. Here's the impact we've made for personal
            trainers across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
