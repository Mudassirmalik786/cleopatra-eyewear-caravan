import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Calendar, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 text-white fixed w-full z-50 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-amber-300" />
              <span className="ml-2 text-xl font-serif font-bold">Cleopatra Eyewear</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-amber-200 transition-colors">
                Home
              </Link>
              <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-amber-200 transition-colors">
                Products
              </Link>
              <Link to="/booking" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-amber-200 transition-colors">
                Book the Caravan
              </Link>
              <Link to="/tryon" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-amber-200 transition-colors">
                Virtual Try-On
              </Link>
              
              {isAuthenticated ? (
                <>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="px-3 py-2 rounded-md text-sm font-medium bg-amber-600 hover:bg-amber-700 transition-colors">
                      Admin Dashboard
                    </Link>
                  )}
                  <button 
                    onClick={logout} 
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:text-amber-200 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium bg-amber-500 hover:bg-amber-600 transition-colors">
                  Login
                </Link>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-amber-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-amber-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Home
              </div>
            </Link>
            
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-amber-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Products
              </div>
            </Link>
            
            <Link 
              to="/booking" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-amber-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book the Caravan
              </div>
            </Link>
            
            <Link 
              to="/tryon" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-amber-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Virtual Try-On
              </div>
            </Link>
            
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="block px-3 py-2 rounded-md text-base font-medium bg-amber-600 hover:bg-amber-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }} 
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 hover:text-amber-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-amber-500 hover:bg-amber-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;