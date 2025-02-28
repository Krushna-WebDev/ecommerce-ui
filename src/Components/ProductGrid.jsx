export default function ProductGrid() {
    // Sample product data
    const products = [
      {
        id: 1,
        name: "Stylish Sneakers",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      },
      {
        id: 2,
        name: "Trendy Handbag",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 4,
        name: "Casual Jacket",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8MHwwfHx8MA%3D%3D",
      },
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Featured Products
          </h2>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-700 mt-4">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  