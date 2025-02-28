export default function Newsletter() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest trends, exclusive offers, and new arrivals!
          </p>
  
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none"
            />
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    );
  }
  