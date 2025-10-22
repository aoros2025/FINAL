'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-pink-100 px-4 py-3 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* ===== Logo and Title ===== */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/CREAR Lab.png"
            alt="CREAR Lab logo"
            className="w-12 h-12 sm:w-10 sm:h-10 object-contain"
          />
          <h1 className="text-xl font-semibold text-gray-800">CREAR Lab</h1>
        </div>

        {/* ===== Hamburger Button (Mobile) ===== */}
        <button
          className="sm:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden sm:flex space-x-6 text-gray-800 font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/people" className="hover:underline">People</a>
          <a href="/research" className="hover:underline">Research</a>
          <a href="/community" className="hover:underline">Community</a>
          <a href="/andrea" className="hover:underline">Dr. Medrano</a>
          <a href="/keeping-up" className="hover:underline">Keeping Up with CREAR</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col items-center space-y-3 text-gray-800 font-medium bg-white/60 backdrop-blur-md rounded-md py-3 shadow-md">
          <a href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/people" className="hover:underline" onClick={() => setIsOpen(false)}>People</a>
          <a href="/research" className="hover:underline" onClick={() => setIsOpen(false)}>Research</a>
          <a href="/community" className="hover:underline" onClick={() => setIsOpen(false)}>Community</a>
          <a href="/andrea" className="hover:underline" onClick={() => setIsOpen(false)}>Dr. Medrano</a>
          <a href="/keeping-up" className="hover:underline" onClick={() => setIsOpen(false)}>Keeping Up with CREAR</a>
          <a href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}