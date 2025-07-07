export type Page = 'Home' | 'About' | 'Gallery' | 'Contact';

export interface Product {
  id: number;
  name: string;
  category: 'Marble' | 'Handicrafts' | 'Stone Articles';
  imageUrl: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  country: string;
}
