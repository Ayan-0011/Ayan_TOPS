import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyStore</div>
        
        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-black transition">Mac</a>
          <a href="#" className="hover:text-black transition">iPad</a>
          <a href="#" className="hover:text-black transition">iPhone</a>
          <a href="#" className="hover:text-black transition">Watch</a>
          <a href="#" className="hover:text-black transition">AirPods</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <FiSearch size={20} className="hover:text-black cursor-pointer transition" />
          <FiShoppingCart size={20} className="hover:text-black cursor-pointer transition" />
        </div>

      </div>
    </header>
  );
}
