import { Booking } from '../types';

export const bookings: Booking[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '555-123-4567',
    eventType: 'corporate',
    eventDate: '2025-06-15',
    eventTime: '14:00',
    location: 'Johnson & Co. Headquarters, New York',
    attendees: 45,
    message: 'Company anniversary event',
    status: 'confirmed',
    createdAt: '2025-03-10T09:15:00Z'
  },
  {
    id: '2',
    customerName: 'Michael Roberts',
    email: 'michael.r@example.com',
    phone: '555-987-6543',
    eventType: 'exhibition',
    eventDate: '2025-07-22',
    eventTime: '10:00',
    location: 'City Convention Center, Los Angeles',
    attendees: 200,
    message: 'Fashion technology expo',
    status: 'pending',
    createdAt: '2025-03-15T14:30:00Z'
  },
  {
    id: '3',
    customerName: 'Emily Chen',
    email: 'emily.c@example.com',
    phone: '555-456-7890',
    eventType: 'wedding',
    eventDate: '2025-08-05',
    eventTime: '16:00',
    location: 'Rosewood Gardens, San Francisco',
    attendees: 80,
    message: 'We would like guests to be able to try on custom frames as part of the wedding favors',
    status: 'confirmed',
    createdAt: '2025-03-20T11:45:00Z'
  },
  {
    id: '4',
    customerName: 'David Wilson',
    email: 'david.w@example.com',
    phone: '555-789-0123',
    eventType: 'party',
    eventDate: '2025-06-30',
    eventTime: '20:00',
    location: 'Skyline Lounge, Chicago',
    attendees: 60,
    message: 'Summer gala with Egyptian theme',
    status: 'cancelled',
    createdAt: '2025-03-05T16:20:00Z'
  },
  {
    id: '5',
    customerName: 'Amanda Patel',
    email: 'amanda.p@example.com',
    phone: '555-234-5678',
    eventType: 'corporate',
    eventDate: '2025-09-18',
    eventTime: '13:30',
    location: 'Tech Park, Seattle',
    attendees: 120,
    message: 'Employee wellness day',
    status: 'pending',
    createdAt: '2025-03-25T10:10:00Z'
  }
];