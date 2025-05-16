import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { Booking } from '../types';
import { Calendar, CheckCircle, Clock, Users, MapPin } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<Booking | null>(null);

  const handleSubmit = (data: Booking) => {
    // In a real app, this would send the data to a backend
    setBookingDetails(data);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isSubmitted ? (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Booking Request Received!
              </h1>
              <p className="text-lg text-gray-600">
                Thank you for booking the Cleopatra Eyewear Caravan. We'll review your request and contact you shortly.
              </p>
            </div>
            
            {bookingDetails && (
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Your Booking Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Calendar className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Event Date</p>
                      <p className="text-base text-gray-900">{new Date(bookingDetails.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Event Time</p>
                      <p className="text-base text-gray-900">
                        {bookingDetails.eventTime}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Event Type</p>
                      <p className="text-base text-gray-900 capitalize">{bookingDetails.eventType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Number of Attendees</p>
                      <p className="text-base text-gray-900">{bookingDetails.attendees} people</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start md:col-span-2">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-purple-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="text-base text-gray-900">{bookingDetails.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    A confirmation email has been sent to {bookingDetails.email}. If you have any questions, please contact us.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-800 hover:bg-purple-900 transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Book the Cleopatra Eyewear Caravan
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Bring a unique eyewear experience to your next event. Our mobile caravan brings premium eyewear, professional styling, and a memorable experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-purple-900 px-6 py-10 text-white">
                    <h2 className="text-2xl font-medium mb-4">Why Book With Us?</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                        <span>Premium eyewear collection for all face shapes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                        <span>Professional stylists to assist your guests</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                        <span>Virtual try-on technology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                        <span>Branded experience for corporate events</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-300 mr-2 mt-0.5" />
                        <span>Unique addition to weddings and private parties</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Ideal For</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-purple-50 p-4 rounded-md text-center">
                        <p className="text-sm font-medium text-purple-800">Corporate Events</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-md text-center">
                        <p className="text-sm font-medium text-purple-800">Exhibitions</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-md text-center">
                        <p className="text-sm font-medium text-purple-800">Wedding Receptions</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-md text-center">
                        <p className="text-sm font-medium text-purple-800">Private Parties</p>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">What's Included</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Full access to our premium eyewear collection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Professional eyewear consultants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Virtual try-on technology station</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Branded experience (for corporate events)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Custom packaging for purchases</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        Have questions before booking? Contact us at{' '}
                        <a href="mailto:bookings@cleopatraeyewear.com" className="text-purple-800 hover:text-purple-900">
                          bookings@cleopatraeyewear.com
                        </a>{' '}
                        or call us at <span className="text-purple-800">+1 (555) 123-4567</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-6">
                    Book Your Cleopatra Eyewear Experience
                  </h2>
                  <BookingForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;