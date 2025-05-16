import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import FaceShapeSelector from '../components/FaceShapeSelector';
import { FaceShape } from '../types';
import { ArrowLeft, Info } from 'lucide-react';

const TryOnPage: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>();
  const [selectedFaceShape, setSelectedFaceShape] = useState<FaceShape | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  
  // Find the product if productId is provided
  const selectedProduct = productId 
    ? products.find(p => p.id === productId) 
    : null;

  // Filter products that match the selected face shape
  const recommendedProducts = selectedFaceShape
    ? products.filter(p => p.faceShapes.includes(selectedFaceShape))
    : [];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          {selectedProduct ? (
            <Link to="/products" className="inline-flex items-center text-purple-800 hover:text-purple-900">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Products
            </Link>
          ) : (
            <Link to="/" className="inline-flex items-center text-purple-800 hover:text-purple-900">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          )}
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            {selectedProduct ? `Try On: ${selectedProduct.name}` : 'Virtual Try-On Experience'}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find the perfect frames for your face shape with our virtual try-on tool.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex justify-between items-center bg-purple-800 text-white">
            <h2 className="text-xl font-medium">
              Step 1: Select Your Face Shape
            </h2>
            <button 
              onClick={() => setShowInfo(!showInfo)} 
              className="inline-flex items-center text-amber-300 hover:text-amber-200"
            >
              <Info className="h-5 w-5 mr-1" />
              How to determine your face shape
            </button>
          </div>
          
          {showInfo && (
            <div className="bg-purple-50 p-6 border-b border-purple-100">
              <h3 className="text-lg font-medium text-purple-900 mb-3">How to Determine Your Face Shape</h3>
              <p className="mb-4 text-purple-800">
                Look in the mirror and follow these simple steps to identify your face shape:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Oval Face</h4>
                  <p className="text-sm text-gray-600">
                    Forehead is slightly wider than your chin, with high cheekbones. Face length is about 1.5 times the width.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Round Face</h4>
                  <p className="text-sm text-gray-600">
                    Similar width and length with full cheeks and a rounded jawline. Soft angles throughout.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Square Face</h4>
                  <p className="text-sm text-gray-600">
                    Strong jawline with a similar width at forehead and jawline. Angular features.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Heart Face</h4>
                  <p className="text-sm text-gray-600">
                    Wider forehead and narrower chin with high cheekbones. May have a widow's peak.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Diamond Face</h4>
                  <p className="text-sm text-gray-600">
                    Narrow forehead and jawline with wide cheekbones. Face is most narrow at the chin.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-medium text-purple-900 mb-2">Rectangle Face</h4>
                  <p className="text-sm text-gray-600">
                    Longer face with similar width at forehead, cheeks, and jawline. Strong jawline.
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm text-purple-800">
                <strong>Pro tip:</strong> Take a photo of your face looking straight ahead and trace the outline to see your shape more clearly.
              </div>
            </div>
          )}
          
          <div className="p-6">
            <FaceShapeSelector onSelect={setSelectedFaceShape} selectedShape={selectedFaceShape} />
          </div>
        </div>
        
        {selectedFaceShape && (
          <div className="mt-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6 bg-purple-800 text-white">
                <h2 className="text-xl font-medium">
                  Step 2: Virtual Try-On {selectedProduct ? `(${selectedProduct.name})` : ''}
                </h2>
              </div>
              
              <div className="p-6">
                {selectedProduct ? (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <div className="relative">
                        <img 
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                          alt="Face model" 
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img 
                            src={selectedProduct.imageUrl} 
                            alt={selectedProduct.name} 
                            className="w-2/3 h-auto opacity-80"
                          />
                        </div>
                      </div>
                      <p className="text-center mt-4 text-gray-600 italic">
                        This is a simulated try-on. In our mobile caravan, you'll be able to physically try on these frames.
                      </p>
                    </div>
                    
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{selectedProduct.name}</h3>
                      <p className="text-xl text-purple-800 font-medium mb-4">${selectedProduct.price}</p>
                      <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Perfect for face shapes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.faceShapes.map(shape => (
                            <span 
                              key={shape} 
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                shape === selectedFaceShape 
                                  ? 'bg-amber-100 text-amber-800 border-2 border-amber-400' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {shape}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="flex-1 bg-purple-800 hover:bg-purple-900 text-white py-3 px-6 rounded-md font-medium transition-colors">
                          Reserve for In-Person Try-On
                        </button>
                        <Link 
                          to="/booking" 
                          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors text-center"
                        >
                          Book the Caravan
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-6">
                      Based on your {selectedFaceShape} face shape, here are our recommended frames. Click on "Try On" to see how they look!
                    </p>
                    
                    {recommendedProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedProducts.map(product => (
                          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <div className="relative h-48">
                              <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                                <div className="p-4 w-full">
                                  <h3 className="text-white font-medium">{product.name}</h3>
                                  <p className="text-gray-200 text-sm mb-3">${product.price}</p>
                                  <Link 
                                    to={`/tryon/${product.id}`} 
                                    className="block w-full bg-amber-500 hover:bg-amber-600 text-center text-white py-2 rounded-md transition-colors"
                                  >
                                    Try On
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600">Please select a face shape above to see recommended frames.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-purple-900 mb-4">
            Experience it in Person!
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-purple-800 mb-6">
            While our virtual try-on gives you a good idea, nothing beats trying on frames in person. 
            Book our mobile eyewear caravan for your next event!
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-800 hover:bg-purple-900 transition-colors"
          >
            Book the Caravan Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TryOnPage;