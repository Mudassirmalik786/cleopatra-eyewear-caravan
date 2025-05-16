// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  faceShapes: FaceShape[];
}

export type FaceShape = 'oval' | 'round' | 'square' | 'heart' | 'diamond' | 'rectangle';

// Booking Types
export interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  eventType: EventType;
  eventDate: string;
  eventTime: string;
  location: string;
  attendees: number;
  message?: string;
  status: BookingStatus;
  createdAt: string;
}

export type EventType = 'corporate' | 'exhibition' | 'party' | 'wedding' | 'other';
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'customer';

// Auth Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}