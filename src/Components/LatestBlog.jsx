export default function LatestBlog() {
    const blogs = [
      {
        id: 1,
        title: "10 Must-Have Fashion Trends for 2025",
        date: "Feb 28, 2025",
        image: "https://images.pexels.com/photos/699588/pexels-photo-699588.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 2,
        title: "How to Style Casual Jackets Like a Pro",
        date: "Feb 20, 2025",
        image: "https://images.pexels.com/photos/7691074/pexels-photo-7691074.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 3,
        title: "Best Accessories to Elevate Your Outfit",
        date: "Feb 15, 2025",
        image: "https://images.pexels.com/photos/457075/pexels-photo-457075.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Latest Blog
          </h2>
  
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                  <h3 className="text-lg font-semibold text-gray-700">{blog.title}</h3>
                  <button className="mt-3 text-blue-600 hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  