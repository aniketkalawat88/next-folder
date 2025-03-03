import React from 'react'

const Navbar = () => {
  return (
    
    <header className="bg-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
      <div className="text-xl font-bold text-gray-800">REZ MY TOUR</div>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="text-purple-600 font-semibold">
          Home
        </a>
        <a href="#">Packages</a>
        <a href="#">Tours</a>
        <a href="#">Gallery</a>
        <a href="#">Blogs</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="text-sm space-x-2 md:space-x-4 flex items-center">
        <span className="text-green-600">🇮🇳 +971565771119</span>
        <span className="text-green-600">🇦🇪 +971565771119</span>
      </div>
    </div>
  </header>
  )
}

export default Navbar