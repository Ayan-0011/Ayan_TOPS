import { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiSearch, HiHeart, HiShoppingCart, HiUser } from "react-icons/hi";
import Banner from "./pages/Banner";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Shop<span className="text-gray-800">Mate</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 border rounded-full px-4 py-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full"
          />
          <HiSearch size={22} className="text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <HiHeart size={25} className="cursor-pointer" />

          <div className="relative cursor-pointer">
            <HiShoppingCart size={25} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          <HiUser size={25} className="cursor-pointer" />

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <HiOutlineMenu size={28} />
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="hidden md:flex justify-center bg-gray-100 py-3">
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">Men</li>
          <li className="hover:text-blue-600 cursor-pointer">Women</li>
          <li className="hover:text-blue-600 cursor-pointer">Kids</li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-40 md:hidden">
          <div className="w-64 h-full bg-white px-6 py-5 shadow-xl">
            
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <HiOutlineX size={26} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="mt-5 space-y-5 text-gray-700 font-semibold text-lg">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Shop</li>
              <li className="hover:text-blue-600 cursor-pointer">Men</li>
              <li className="hover:text-blue-600 cursor-pointer">Women</li>
              <li className="hover:text-blue-600 cursor-pointer">Kids</li>
            </ul>
          </div>
        </div>
      )}
    </header>
 
<Banner/>
  </>
  );
}
