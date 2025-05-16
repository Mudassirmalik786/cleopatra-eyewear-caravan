import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories, faceShapes } from '../data/products';
import { Filter, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFaceShape, setSelectedFaceShape] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by category
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      
      // Filter by face shape
      if (selectedFaceShape && !product.faceShapes.includes(selectedFaceShape as any)) {
        return false;
      }
      
      // Filter by search term
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }, [selectedCategory, selectedFaceShape, searchTerm]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedFaceShape('');
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedFaceShape !== '' || searchTerm !== '';

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Our Eyewear Collection
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our premium collection of eyewear, designed for style and comfort.
          </p>
        </div>
        
        {/* Mobile filter button */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <span className="ml-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {(selectedCategory !== 'all' ? 1 : 0) + (selectedFaceShape ? 1 : 0) + (searchTerm ? 1 : 0)}
              </span>
            )}
          </button>
          
          <div className="relative w-2/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters for desktop */}
          <div className="hidden md:block md:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      id={`category-${category.id}`}
                      name="category"
                      type="radio"
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-3 block text-sm text-gray-700"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Face Shape</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="face-shape-any"
                    name="faceShape"
                    type="radio"
                    checked={selectedFaceShape === ''}
                    onChange={() => setSelectedFaceShape('')}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <label
                    htmlFor="face-shape-any"
                    className="ml-3 block text-sm text-gray-700"
                  >
                    Any Shape
                  </label>
                </div>
                {faceShapes.map((shape) => (
                  <div key={shape.id} className="flex items-center">
                    <input
                      id={`face-shape-${shape.id}`}
                      name="faceShape"
                      type="radio"
                      checked={selectedFaceShape === shape.id}
                      onChange={() => setSelectedFaceShape(shape.id)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <label
                      htmlFor={`face-shape-${shape.id}`}
                      className="ml-3 block text-sm text-gray-700"
                    >
                      {shape.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
          
          {/* Mobile filter drawer */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileFilterOpen(false)}></div>
              <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                  <div className="h-full bg-white shadow-xl flex flex-col">
                    <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="overflow-y-auto flex-1 px-4 py-6 space-y-6">
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-3">Categories</h3>
                        <div className="space-y-3">
                          {categories.map((category) => (
                            <div key={category.id} className="flex items-center">
                              <input
                                id={`mobile-category-${category.id}`}
                                name="category"
                                type="radio"
                                checked={selectedCategory === category.id}
                                onChange={() => setSelectedCategory(category.id)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                              />
                              <label
                                htmlFor={`mobile-category-${category.id}`}
                                className="ml-3 block text-sm text-gray-700"
                              >
                                {category.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-3">Face Shape</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input
                              id="mobile-face-shape-any"
                              name="faceShape"
                              type="radio"
                              checked={selectedFaceShape === ''}
                              onChange={() => setSelectedFaceShape('')}
                              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                            />
                            <label
                              htmlFor="mobile-face-shape-any"
                              className="ml-3 block text-sm text-gray-700"
                            >
                              Any Shape
                            </label>
                          </div>
                          {faceShapes.map((shape) => (
                            <div key={shape.id} className="flex items-center">
                              <input
                                id={`mobile-face-shape-${shape.id}`}
                                name="faceShape"
                                type="radio"
                                checked={selectedFaceShape === shape.id}
                                onChange={() => setSelectedFaceShape(shape.id)}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                              />
                              <label
                                htmlFor={`mobile-face-shape-${shape.id}`}
                                className="ml-3 block text-sm text-gray-700"
                              >
                                {shape.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6">
                      <div className="flex space-x-3">
                        <button
                          onClick={resetFilters}
                          className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Reset All
                        </button>
                        <button
                          onClick={() => setIsMobileFilterOpen(false)}
                          className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-800 hover:bg-purple-900"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Product grid */}
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">{filteredProducts.length} products</p>
                  
                  {hasActiveFilters && (
                    <div className="hidden md:flex items-center">
                      <p className="text-sm text-gray-700 mr-2">Active filters:</p>
                      {selectedCategory !== 'all' && (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mr-2">
                          {categories.find(c => c.id === selectedCategory)?.name}
                          <button
                            onClick={() => setSelectedCategory('all')}
                            className="ml-1.5 inline-flex text-purple-500 hover:text-purple-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      )}
                      {selectedFaceShape && (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mr-2">
                          {faceShapes.find(s => s.id === selectedFaceShape)?.name}
                          <button
                            onClick={() => setSelectedFaceShape('')}
                            className="ml-1.5 inline-flex text-purple-500 hover:text-purple-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      )}
                      {searchTerm && (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          "{searchTerm}"
                          <button
                            onClick={() => setSearchTerm('')}
                            className="ml-1.5 inline-flex text-purple-500 hover:text-purple-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;