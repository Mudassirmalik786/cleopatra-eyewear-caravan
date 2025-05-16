import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { bookings } from '../data/bookings';
import { Booking, BookingStatus } from '../types';
import { Check, X, Clock, CalendarClock, User, Users, MapPin, Mail, Phone } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeBookings, setActiveBookings] = useState<Booking[]>(bookings);
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'all'>('all');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  // Redirect if not authenticated or not admin
  React.useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);

  const filteredBookings = statusFilter === 'all' 
    ? activeBookings 
    : activeBookings.filter(booking => booking.status === statusFilter);

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    const updatedBookings = activeBookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    );
    setActiveBookings(updatedBookings);
    
    if (selectedBooking?.id === id) {
      setSelectedBooking({...selectedBooking, status});
    }
  };

  // Get counts for each status
  const pendingCount = activeBookings.filter(b => b.status === 'pending').length;
  const confirmedCount = activeBookings.filter(b => b.status === 'confirmed').length;
  const cancelledCount = activeBookings.filter(b => b.status === 'cancelled').length;

  const getStatusBadgeClasses = (status: BookingStatus) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: BookingStatus) => {
    switch(status) {
      case 'pending':
        return <Clock className="h-4 w-4 mr-1" />;
      case 'confirmed':
        return <Check className="h-4 w-4 mr-1" />;
      case 'cancelled':
        return <X className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  if (!isAuthenticated || user?.role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage bookings and events for the Cleopatra Eyewear Caravan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
            <h2 className="text-lg font-medium text-gray-900">Total Bookings</h2>
            <p className="text-3xl font-bold text-purple-800 mt-2">{activeBookings.length}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-400">
            <h2 className="text-lg font-medium text-gray-900">Pending</h2>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{pendingCount}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
            <h2 className="text-lg font-medium text-gray-900">Confirmed</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">{confirmedCount}</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
            <h2 className="text-lg font-medium text-gray-900">Cancelled</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">{cancelledCount}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-medium text-gray-900">Booking Requests</h2>
                  
                  <div className="mt-3 sm:mt-0 flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Filter:</span>
                    <select
                      value={statusFilter}
                      onChange={e => setStatusFilter(e.target.value as BookingStatus | 'all')}
                      className="border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                    >
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Details
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBookings.length > 0 ? (
                      filteredBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                                <div className="text-sm text-gray-500">{booking.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 capitalize">{booking.eventType}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(booking.eventDate).toLocaleDateString()} at {booking.eventTime}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{booking.location}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClasses(booking.status)}`}>
                              {getStatusIcon(booking.status)}
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => setSelectedBooking(booking)}
                              className="text-purple-600 hover:text-purple-900 mr-3"
                            >
                              View
                            </button>
                            
                            {booking.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                  className="text-green-600 hover:text-green-900 mr-3"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                          No bookings found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            {selectedBooking ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-purple-800 text-white">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-medium">Booking Details</h2>
                    <button
                      onClick={() => setSelectedBooking(null)}
                      className="text-white hover:text-gray-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Customer</h3>
                      <p className="text-base text-gray-900">{selectedBooking.customerName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="text-base text-gray-900">{selectedBooking.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                      <p className="text-base text-gray-900">{selectedBooking.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarClock className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Event Type</h3>
                      <p className="text-base text-gray-900 capitalize">{selectedBooking.eventType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarClock className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                      <p className="text-base text-gray-900">
                        {new Date(selectedBooking.eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedBooking.eventTime}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="text-base text-gray-900">{selectedBooking.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Attendees</h3>
                      <p className="text-base text-gray-900">{selectedBooking.attendees} people</p>
                    </div>
                  </div>
                  
                  {selectedBooking.message && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Additional Information</h3>
                      <p className="text-gray-900 text-sm">{selectedBooking.message}</p>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Current Status:</h3>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClasses(selectedBooking.status)}`}>
                        {getStatusIcon(selectedBooking.status)}
                        {selectedBooking.status}
                      </span>
                    </div>
                    
                    {selectedBooking.status === 'pending' && (
                      <div className="mt-4 flex space-x-3">
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'confirmed')}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'cancelled')}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          Cancel Booking
                        </button>
                      </div>
                    )}
                    
                    {selectedBooking.status === 'confirmed' && (
                      <div className="mt-4">
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'cancelled')}
                          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          Cancel Booking
                        </button>
                      </div>
                    )}
                    
                    {selectedBooking.status === 'cancelled' && (
                      <div className="mt-4">
                        <button
                          onClick={() => updateBookingStatus(selectedBooking.id, 'confirmed')}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                        >
                          Restore Booking
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Booking Selected</h3>
                  <p className="text-gray-600">Select a booking from the list to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;