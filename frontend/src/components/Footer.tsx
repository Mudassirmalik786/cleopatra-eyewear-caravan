import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-amber-300">Cleopatra Eyewear</h3>
            <p className="text-sm text-gray-300">
              Bringing luxury eyewear experiences directly to your events with our mobile caravan service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-amber-300 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-amber-300 transition-colors">Book the Caravan</Link>
              </li>
              <li>
                <Link to="/tryon" className="text-gray-300 hover:text-amber-300 transition-colors">Virtual Try-On</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-amber-300" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-amber-300" />
                <a href="mailto:info@cleopatraeyewear.com" className="text-gray-300 hover:text-amber-300 transition-colors">
                  info@cleopatraeyewear.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-amber-300" />
                <span className="text-gray-300">123 Fashion Avenue, New York, NY 10001</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-purple-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-800">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Cleopatra Eyewear Caravan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;