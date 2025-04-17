import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For icons


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-gray-900 dark:bg-gray-900 shadow-md flex items-center justify-center py-4 z-50 px-4 transition-all duration-300">
      
      {/* Logo */}
      <div className="absolute left-4 text-xl font-bold text-white dark:text-white">
        CAPUSBUDDY
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg text-white dark:text-gray-200">
        <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
        <a href="/profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Profile</a>
        <button  className="absolute right-16 md:right-4 text-sm">
  Toggle Dark 🌙
</button>

      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden absolute right-4 text-gray-100 dark:text-gray-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-gray-900 dark:bg-gray-800 rounded-md shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden text-gray-100 dark:text-gray-200 transition-all duration-300">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Profile</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
