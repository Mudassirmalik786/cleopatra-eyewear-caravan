import React, { useState } from 'react';
import { EventType } from '../types';

interface BookingFormProps {
  onSubmit: (data: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    eventType: 'corporate' as EventType,
    eventDate: '',
    eventTime: '',
    location: '',
    attendees: 0,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.customerName.trim()) newErrors.customerName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventTime) newErrors.eventTime = 'Event time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (formData.attendees <= 0) newErrors.attendees = 'Number of attendees is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'attendees' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit({
        ...formData,
        id: `booking-${Date.now()}`,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      
      // Reset form after successful submission
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        eventType: 'corporate',
        eventDate: '',
        eventTime: '',
        location: '',
        attendees: 0,
        message: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            value={formData.customerName}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.customerName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.customerName && (
            <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
            Event Type*
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="corporate">Corporate Event</option>
            <option value="exhibition">Exhibition</option>
            <option value="party">Party</option>
            <option value="wedding">Wedding</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date*
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.eventDate ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-red-600">{errors.eventDate}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-1">
            Event Time*
          </label>
          <input
            id="eventTime"
            name="eventTime"
            type="time"
            value={formData.eventTime}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.eventTime ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.eventTime && (
            <p className="mt-1 text-sm text-red-600">{errors.eventTime}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Attendees*
          </label>
          <input
            id="attendees"
            name="attendees"
            type="number"
            min="1"
            value={formData.attendees || ''}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.attendees ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.attendees && (
            <p className="mt-1 text-sm text-red-600">{errors.attendees}</p>
          )}
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Event Location*
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className={`block w-full px-4 py-3 rounded-md border ${
              errors.location ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location}</p>
          )}
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the <a href="#" className="text-purple-600 hover:text-purple-500">terms and conditions</a>
        </label>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-800 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-900'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
};

export default BookingForm;