'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Games', href: '#games' },
    { name: '3D Environments', href: '#environments' },
    { name: 'Models', href: '#models' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight transition-colors duration-300 text-blue-400 group-hover:text-blue-300">
                Atharva Sawant
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                3D Environment Artist & Game Developer
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-gray-200 hover:text-white'
                } group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col space-y-1 transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-current transition-all duration-300" />
            <span className="w-6 h-0.5 bg-current transition-all duration-300" />
            <span className="w-6 h-0.5 bg-current transition-all duration-300" />
          </button>
        </div>

        {/* Mobile Navigation - You can expand this later */}
        <div className="md:hidden mt-4 hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;