export default function WhyChooseUs() {
    const features = [
      {
        id: 1,
        title: "🚀 Fast Delivery",
        description: "Get your orders delivered in no time with our express shipping.",
      },
      {
        id: 2,
        title: "🔒 Secure Payment",
        description: "Safe and easy transactions with multiple payment options.",
      },
      {
        id: 3,
        title: "✨ Quality Products",
        description: "Handpicked items to ensure the best shopping experience.",
      },
      {
        id: 4,
        title: "📞 24/7 Support",
        description: "Our team is always ready to assist you anytime, anywhere.",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Us?
          </h2>
  
          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  