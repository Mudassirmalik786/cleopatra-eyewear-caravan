import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 w-full">
            <Link 
              to={`/tryon/${product.id}`} 
              className="flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition-colors"
            >
              <Eye size={18} className="mr-2" />
              Try On
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-medium text-gray-900">{product.name}</h3>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.faceShapes.map(shape => (
            <span 
              key={shape} 
              className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full"
            >
              {shape}
            </span>
          ))}
        </div>
        <Link 
          to={`/products/${product.id}`} 
          className="block text-center w-full text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-1.5 rounded-md transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;