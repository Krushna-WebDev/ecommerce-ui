export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold text-gray-800">
          TechStore
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-gray-900 hover:border-2 hover:rounded-3xl px-4 py-1 font-semibold tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Search Bar & Cart Icon */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 px-4 py-1 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 outline-none"
            />
          </div>

          {/* Cart Icon */}
          <a href="#" className="text-gray-600 hover:text-gray-900 transition text-xl">
            🛒
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}
