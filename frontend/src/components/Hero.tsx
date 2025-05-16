import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-purple-900 to-purple-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          <span className="block">Premium Eyewear</span>
          <span className="block mt-2 text-amber-300">On Wheels</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10">
          Experience our luxurious mobile eyewear caravan at your next event. 
          From corporate gatherings to private parties — we bring the boutique to you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link to="/booking" className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center">
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/products" className="flex-1 bg-transparent hover:bg-white/10 text-white border border-white py-3 px-6 rounded-md font-medium transition-colors">
            Explore Products
          </Link>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <p className="text-amber-200 font-medium mb-4">Trusted by</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="h-12 flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold opacity-70 hover:opacity-100 transition-opacity">LuxEvents</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold opacity-70 hover:opacity-100 transition-opacity">StyleCorp</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold opacity-70 hover:opacity-100 transition-opacity">FashionFête</span>
            </div>
            <div className="h-12 flex items-center justify-center">
              <span className="text-white text-xl font-serif font-bold opacity-70 hover:opacity-100 transition-opacity">GlassMasters</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;