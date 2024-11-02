import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div className="text-indigo-600">
              <svg 
                viewBox="0 0 24 24" 
                className="h-8 w-8"
                fill="currentColor"
              >
                <path d="M12 4c1.11 0 2.17.44 2.95 1.22l4.83 4.83c.39.39.39 1.02 0 1.41l-4.83 4.83c-.78.78-1.84 1.22-2.95 1.22s-2.17-.44-2.95-1.22L4.22 11.46c-.39-.39-.39-1.02 0-1.41l4.83-4.83C9.83 4.44 10.89 4 12 4z" />
              </svg>
            </div>
            <p className="text-gray-600 max-w-xs">
              Making traveling easier than you think with Get Global Traveling Agency.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                <i className="fab fa-github"></i>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-600">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              {['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center group">
                    {item}
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {['Submit ticket', 'Documentation', 'Guides'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center group">
                    {item}
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center group">
                    {item}
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Get Global, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;