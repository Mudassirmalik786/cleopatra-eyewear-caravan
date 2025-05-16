import React, { useState } from 'react';
import { FaceShape } from '../types';

interface FaceShapeSelectorProps {
  onSelect: (faceShape: FaceShape) => void;
  selectedShape: FaceShape | null;
}

const faceShapes: { id: FaceShape; name: string; description: string; image: string }[] = [
  {
    id: 'oval',
    name: 'Oval',
    description: 'Balanced proportions with a slightly curved jawline and forehead.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'round',
    name: 'Round',
    description: 'Soft angles, full cheeks, and face width and length in similar proportions.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'square',
    name: 'Square',
    description: 'Strong jawline with angular features and forehead width similar to jaw width.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'heart',
    name: 'Heart',
    description: 'Wider forehead that narrows down to a pointed chin.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    description: 'Narrow forehead and jawline with wider cheekbones.',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    description: 'Longer face with forehead, cheeks, and jawline of similar width.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const FaceShapeSelector: React.FC<FaceShapeSelectorProps> = ({ onSelect, selectedShape }) => {
  const [hoveredShape, setHoveredShape] = useState<FaceShape | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {faceShapes.map((shape) => (
        <div 
          key={shape.id}
          className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
            selectedShape === shape.id 
              ? 'border-amber-500 shadow-lg shadow-amber-100' 
              : 'border-gray-200 hover:border-purple-300'
          }`}
          onClick={() => onSelect(shape.id)}
          onMouseEnter={() => setHoveredShape(shape.id)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          <div className="aspect-square">
            <img 
              src={shape.image} 
              alt={shape.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3 transition-opacity ${
              hoveredShape === shape.id || selectedShape === shape.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-white font-medium text-lg">{shape.name}</h3>
            <p className="text-gray-200 text-xs">{shape.description}</p>
          </div>
          {selectedShape === shape.id && (
            <div className="absolute top-2 right-2 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaceShapeSelector;