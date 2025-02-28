export default function HeroSection() {
    return (
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Discover the Best Deals
            </h1>
            <p className="mt-4 text-gray-600">
              Shop the latest trends with amazing discounts. Elevate your style effortlessly.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
            >
              Shop Now
            </a>
          </div>
  
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80"
              alt="Shopping"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  }
  