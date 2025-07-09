import { Page, Product, GalleryImage, Testimonial } from './types';

export const NAV_LINKS: Page[] = ['Home', 'About', 'Gallery', 'Contact'];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: 'Elegant Marble Collection',
    category: 'Marble',
    src="public/images/G01.png",
    description: 'A refined blend of contemporary toned and classic charm for modern spaces.'
  },
  {
    id: 2,
    name: 'Earthy & Warm Marble Collection',
    category: 'Marble',
    src="public/images/G02.png",
    description: 'Infused with natural texture and warm hues, perfect for timeless interiors.'
  },
  {
    id: 3,
    name: 'Premium Designer Marble',
    category: 'Marble',
    src="public/images/G03.png",
    description: 'Bold aesthetics and statement patterns to elevate any architectural vision.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src:"public/images/G01.png", alt: '' },
  { id: 2, src:'public/images/G02.png', alt: '' },
  { id: 3, src:'public/images/G03.png', alt: '' },
  { id: 4, src:'public/images/G04.png', alt: '' },
  { id: 5, src:'public/images/G05.png', alt: '' },
  { id: 6, src:'public/images/G06.png', alt: '' },
  { id: 7, src:'public/images/G07.png', alt: '' },
  { id: 8, src:'public/images/G08.png', alt: '' },
  { id: 9, src:'public/images/G09.png', alt: '' },
  { id: 10, src:'public/images/G10.png', alt: '' },
  { id: 11, src:'public/images/G11.png', alt: '' },
  { id: 12, src:'public/images/G12.png', alt: '' },
  { id: 13, src:'public/images/G13.png', alt: '' },
  { id: 14, src:'public/images/G14.png', alt: '' },
  { id: 15, src:'public/images/G15.png', alt: '' },
  { id: 16, src:'public/images/G16.png', alt: '' },
  { id: 17, src:'public/images/G17.png', alt: '' },
  { id: 18, src:'public/images/G18.png', alt: '' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "The quality of the marble we received was exceptional, exceeding our expectations. The entire process from inquiry to delivery was seamless. Highly recommended!",
    author: "Ahmed Al Fayed",
    country: "Dubai, UAE"
  },
  {
    quote: "Para International provided us with beautiful handcrafted items that have become best-sellers in our shop. Their attention to detail and craftsmanship is remarkable.",
    author: "Fatima Al-Kuwari",
    country: "Doha, Qatar"
  },
  {
    quote: "We were looking for a reliable supplier for stone articles and found a great partner in Para International. Professional, timely, and excellent quality products.",
    author: "Yusuf Al-Bader",
    country: "Riyadh, Saudi Arabia"
  }
];
