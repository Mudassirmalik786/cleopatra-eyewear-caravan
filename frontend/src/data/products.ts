import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cleopatra Gold',
    description: 'Elegant gold-rimmed frames inspired by ancient Egyptian royalty.',
    price: 299,
    imageUrl: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'luxury',
    faceShapes: ['oval', 'heart', 'diamond']
  },
  {
    id: '2',
    name: 'Nile Blue',
    description: 'Cool blue tones reminiscent of the mighty Nile river.',
    price: 249,
    imageUrl: 'https://images.pexels.com/photos/2811088/pexels-photo-2811088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    faceShapes: ['round', 'square', 'rectangle']
  },
  {
    id: '3',
    name: 'Sphinx',
    description: 'Bold and mysterious frames with a timeless appeal.',
    price: 279,
    imageUrl: 'https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'luxury',
    faceShapes: ['oval', 'rectangle', 'diamond']
  },
  {
    id: '4',
    name: 'Pharaoh',
    description: 'Commanding presence with regal design elements.',
    price: 329,
    imageUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'premium',
    faceShapes: ['square', 'rectangle', 'oval']
  },
  {
    id: '5',
    name: 'Alexandria',
    description: 'Intellectual and sophisticated frames named after the ancient city of knowledge.',
    price: 259,
    imageUrl: 'https://images.pexels.com/photos/2033479/pexels-photo-2033479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    faceShapes: ['round', 'heart', 'oval']
  },
  {
    id: '6',
    name: 'Oasis',
    description: 'Light and refreshing frames with a touch of green.',
    price: 239,
    imageUrl: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'casual',
    faceShapes: ['heart', 'oval', 'round']
  },
  {
    id: '7',
    name: 'Pyramid',
    description: 'Structured and angular frames with modern geometric lines.',
    price: 289,
    imageUrl: 'https://images.pexels.com/photos/3685271/pexels-photo-3685271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'premium',
    faceShapes: ['diamond', 'oval', 'heart']
  },
  {
    id: '8',
    name: 'Desert Rose',
    description: 'Soft blush tones that complement any complexion.',
    price: 269,
    imageUrl: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'luxury',
    faceShapes: ['round', 'heart', 'oval']
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'luxury', name: 'Luxury Collection' },
  { id: 'premium', name: 'Premium Collection' },
  { id: 'casual', name: 'Casual Collection' }
];

export const faceShapes = [
  { id: 'oval', name: 'Oval' },
  { id: 'round', name: 'Round' },
  { id: 'square', name: 'Square' },
  { id: 'heart', name: 'Heart' },
  { id: 'diamond', name: 'Diamond' },
  { id: 'rectangle', name: 'Rectangle' }
];