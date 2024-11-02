"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '..//../public/get_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services'},
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-[#F1F2F4] shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img 
              src="/public/get_logo.png" 
              alt="Company Logo" 
              className="h-20 w-auto"
            /> */}
            <Image src={logo} className='w-32 h-32' alt='Get Global Logo'/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#004882] hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded-md text-md font-medium flex items-center"
              >

                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-[#004882] hover:text-blue-800 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 block px-3 py-2 rounded-md text-base  font-medium  items-center"
                >
                
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;