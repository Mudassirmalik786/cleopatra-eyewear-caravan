import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { CalendarCheck, Truck, Heart, Trophy, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  // Get just the first 4 products for the featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50">
      <Hero />
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cleopatra Eyewear Caravan" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Luxury Eyewear <span className="text-purple-800">Experience on Wheels</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cleopatra Eyewear Caravan brings a unique eyewear shopping experience directly to your events. 
                Our beautifully designed mobile boutique offers premium frames, professional styling, and the convenience of trying on glasses at your chosen location.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-800">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Easy Booking</h3>
                    <p className="mt-2 text-base text-gray-600">Book our caravan for corporate events, exhibitions, parties, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-800">
                      <Truck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Mobile Service</h3>
                    <p className="mt-2 text-base text-gray-600">We come to your location with our complete eyewear collection.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-800">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Personalized Styling</h3>
                    <p className="mt-2 text-base text-gray-600">Get expert advice on frames that suit your face shape and style.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-800">
                      <Trophy className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Premium Brands</h3>
                    <p className="mt-2 text-base text-gray-600">Access to exclusive, high-quality eyewear collections.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link 
                  to="/booking" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-800 hover:bg-purple-900 transition-colors"
                >
                  Book an Experience
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Featured Eyewear
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover our most popular frames, meticulously crafted for style and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-purple-800 text-base font-medium rounded-md text-purple-800 bg-white hover:bg-purple-50 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-purple-200">
              We've helped hundreds of events provide a unique eyewear experience to their guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-xl text-gray-800 transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Corporate client"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Emma Thompson</h3>
                  <p className="text-purple-600">Event Planner, LuxEvents</p>
                </div>
              </div>
              <p className="italic">
                "The Cleopatra Eyewear Caravan was the highlight of our corporate gala. Guests loved trying on luxury frames and receiving personalized recommendations. Highly recommend!"
              </p>
              <div className="mt-4 flex text-amber-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-xl text-gray-800 transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Wedding client"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">James & Sarah Wilson</h3>
                  <p className="text-purple-600">Wedding Clients</p>
                </div>
              </div>
              <p className="italic">
                "Having the Cleopatra Eyewear Caravan at our wedding was such a unique touch! Our guests were thrilled to try on designer sunglasses for our outdoor reception."
              </p>
              <div className="mt-4 flex text-amber-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-xl text-gray-800 transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Exhibition client"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Michael Chen</h3>
                  <p className="text-purple-600">Director, FashionTech Expo</p>
                </div>
              </div>
              <p className="italic">
                "Partnering with Cleopatra Eyewear Caravan added tremendous value to our exhibition. Their virtual try-on technology and professional team impressed all attendees."
              </p>
              <div className="mt-4 flex text-amber-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold text-white mb-4">
                  Ready to elevate your next event?
                </h2>
                <p className="text-purple-200 mb-0 md:mb-0 max-w-2xl">
                  Book the Cleopatra Eyewear Caravan today and give your guests a memorable luxury experience.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                <Link
                  to="/booking"
                  className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;