export default function Testimonials() {
    const testimonials = [
      {
        id: 1,
        name: "Alice Johnson",
        review: "Amazing products! The quality is top-notch and delivery was super fast.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 2,
        name: "Michael Smith",
        review: "Loved the experience! Secure payment and great customer support.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 3,
        name: "Sophie Williams",
        review: "The best shopping platform! Highly recommended for quality products.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            What Our Customers Say
          </h2>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
                
                {/* Star Ratings */}
                <div className="flex justify-center my-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">⭐</span>
                  ))}
                </div>
  
                <p className="text-gray-600 mt-2">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  