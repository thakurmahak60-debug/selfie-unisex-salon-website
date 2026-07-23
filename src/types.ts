export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'bridal' | 'nails' | 'grooming';
  description: string;
  priceStartingFrom: number;
  duration: string;
  image: string;
  popular?: boolean;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  avatar: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'hair' | 'skincare' | 'bridal' | 'nails';
  image: string;
  description: string;
}

export interface PricingPackage {
  id: string;
  category: string;
  name: string;
  price: number;
  duration: string;
  includes: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  validUntil: string;
  code: string;
  image: string;
  description: string;
  perks: string[];
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  gender: 'women' | 'men' | 'couple';
  notes?: string;
}
