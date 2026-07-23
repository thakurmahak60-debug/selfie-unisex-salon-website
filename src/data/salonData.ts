import { ServiceItem, TeamMember, Testimonial, GalleryItem, PricingPackage, SpecialOffer } from '../types';

export const SALON_INFO = {
  name: "Selfie Unisex Salon",
  tagline: "Indore's Premier Destination for Luxury Hair, Beauty & Bridal Spa",
  address: "TI Mall (Treasure Island Mall), 3rd Floor, Mahatma Gandhi Road, Indore, Madhya Pradesh 452001",
  landmark: "Opposite High Court, MG Road, Indore",
  phone: "+91 98930 12345",
  alternatePhone: "+91 731 400 1234",
  whatsappNumber: "919893012345",
  email: "concierge@selfiesalonindore.com",
  googleRating: 4.9,
  reviewCount: 680,
  operatingHours: "10:00 AM - 9:00 PM (All Days)",
  instagram: "@selfieunisexsalon_indore",
  facebook: "SelfieUnisexSalonIndore",
};

// Curated high quality beauty and salon photos with soft blush / cream / turquoise aesthetic
export const SALON_IMAGES = {
  // Main interior photo representation
  mainInterior: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
  reception: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  hairSpaStation: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
  bridalStudio: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  facialSuite: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  nailStudio: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  mensGrooming: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  products: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
  bridalBride: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
  hairColoring: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircut-styling',
    title: 'Precision Haircut & Styling',
    category: 'hair',
    description: 'Bespoke hair consultation, relaxing head massage, precision cut, and signature blowout styling tailored to your face structure.',
    priceStartingFrom: 599,
    duration: '45 - 60 mins',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Face-shape consultation', 'Kerastase hair wash', 'Signature hot-brush finish', 'Hair texture serum finish']
  },
  {
    id: 'hair-spa-botox',
    title: 'Luxury Hair Spa & Botox Treatment',
    category: 'hair',
    description: 'Deep nutritive therapy infused with argan oil, silk proteins, and hyaluronic acid to restore dry, frizzy, or chemically treated locks.',
    priceStartingFrom: 1499,
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Scalp detox therapy', 'Steam infusion', 'Deep tissue head massage', 'Frizz protection shield']
  },
  {
    id: 'keratin-smoothening',
    title: 'Keratin & Protein Smoothening',
    category: 'hair',
    description: 'Transforms unruly hair into silky, smooth, glossy tresses with ultra-long lasting shine and frizz elimination.',
    priceStartingFrom: 3499,
    duration: '120 - 180 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    features: ['Formaldehyde-free formula', 'Thermal bond protection', 'Up to 6 months durability', 'Complimentary post-treatment wash']
  },
  {
    id: 'balayage-global-color',
    title: 'Global Hair Color & Balayage',
    category: 'hair',
    description: 'Artisanal hand-painted highlights, dimensional balayage, or vibrant global shades using ammonia-free Italian hair color pigments.',
    priceStartingFrom: 2499,
    duration: '90 - 150 mins',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Ammonia-free pigments', 'Olaplex bond builder included', 'Custom shade formulation', 'Color seal shine gloss']
  },
  {
    id: 'hydra-facial-skincare',
    title: 'Signature Rose & Gold Hydra-Facial',
    category: 'skin',
    description: 'Advanced multi-step facial combining vortex extraction, deep hydration infusion, LED light therapy, and pure 24K gold rose mask.',
    priceStartingFrom: 2199,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Vortex pore cleansing', 'Hyaluronic acid infusion', 'Lymphatic drainage massage', 'Collagen boost therapy']
  },
  {
    id: 'glow-cleanup-detox',
    title: 'D-Tan & Instant Radiance Cleanup',
    category: 'skin',
    description: 'Removes sun tan, dead skin cells, and pollution residue, leaving your skin visibly brighter, soft, and refreshed.',
    priceStartingFrom: 899,
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    features: ['Fruit enzymic scrub', 'Cooling botanical pack', 'Soothing ice roller massage', 'SPF 50 UV shield']
  },
  {
    id: 'hd-bridal-makeup',
    title: 'HD Royal Bridal Makeup',
    category: 'bridal',
    description: 'Camera-ready high-definition makeup crafting a flawless, luminous skin finish that withstands heat and stays perfect all night.',
    priceStartingFrom: 11999,
    duration: '180 mins',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Pre-bridal skin glow prep', 'MAC & Huda Beauty products', 'Lashes & hairstyle included', 'Saree & dupatta draping']
  },
  {
    id: 'airbrush-bridal-makeup',
    title: '3D Airbrush Glamour Bridal Package',
    category: 'bridal',
    description: 'Lightweight micro-pigment airbrush application offering weightless coverage, porcelain radiance, and waterproof perfection.',
    priceStartingFrom: 15999,
    duration: '210 mins',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    features: ['TEMPTU Airbrush makeup', 'Custom bridal hair extension styling', 'Nail art included', 'Groom makeup trial discount']
  },
  {
    id: 'nail-extensions-art',
    title: 'Luxury Acrylic Gel Nail Extensions & 3D Art',
    category: 'nails',
    description: 'Custom sculpted acrylic or gel extensions decorated with Swarovski crystals, chrome finish, or hand-painted nail artistry.',
    priceStartingFrom: 1299,
    duration: '60 - 90 mins',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Chip-resistant gel lock', 'Cuticle care oil treatment', 'Custom nail art selection', '2-week shine guarantee']
  },
  {
    id: 'spa-manicure-pedicure',
    title: 'Aroma Rose Spa Manicure & Pedicure',
    category: 'nails',
    description: 'Pampering rose-petal soak, organic scrub exfoliation, hot candle wax massage, and nail shaping with long-lasting polish.',
    priceStartingFrom: 999,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    features: ['Rose essential oil soak', 'Dead skin exfoliation', 'Aromatherapy pressure point massage', 'OPI polish finish']
  },
  {
    id: 'mens-executive-grooming',
    title: "Men's Executive Haircut & Beard Architecture",
    category: 'grooming',
    description: 'Precision fade or classic scissor cut paired with hot towel beard line sculpting, charcoal facial cleanse, and styling.',
    priceStartingFrom: 699,
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: ['Hot towel steam relaxer', 'Beard oil nourishment', 'Scalp invigorating wash', 'Matte clay styling']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'stylist-1',
    name: 'Ananya Sharma',
    role: 'Creative Director & Master Hair Artist',
    experience: '11+ Years',
    specialization: 'Balayage, Keratin, Precision Cuts & Hair Botox',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Trained at Vidal Sassoon London & L’Oréal Academy. Ananya brings global hair fashion trends to Indore with bespoke hair consultation.'
  },
  {
    id: 'stylist-2',
    name: 'Rohit Verma',
    role: 'Senior Celebrity Stylist & Grooming Specialist',
    experience: '9+ Years',
    specialization: "Men's Styling, Hair Color Transformations & Scalp Therapies",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Rohit is celebrated for his meticulous attention to facial architecture, sharp scissor work, and custom beard crafting.'
  },
  {
    id: 'stylist-3',
    name: 'Pooja Malhotra',
    role: 'Lead Bridal Makeup & HD Airbrush Artist',
    experience: '8+ Years',
    specialization: 'HD Bridal Makeup, Airbrush, Engagement & Glamour Looks',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Has styled over 600+ glowing brides across Madhya Pradesh. Specializes in luminous, natural skin finish with mesmerizing eye artistry.'
  },
  {
    id: 'stylist-4',
    name: 'Meenal Joshi',
    role: 'Aesthetic Skin Consultant & Nail Studio Lead',
    experience: '7+ Years',
    specialization: 'Hydra-Facials, Chemical Peels, Acrylic Extensions & 3D Nail Art',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    bio: 'Certified clinical aesthetician delivering glowing, rejuvenated skin treatments and flawless nail artistry.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Dr. Shivani Kulkarni',
    rating: 5,
    date: 'July 2026',
    comment: 'Selfie Unisex Salon is without a doubt the most luxurious salon in Indore! The soft aesthetic ambience, floral wallpaper, and comfortable teal chairs make you feel like royalty. Got my Hair Botox and Hydra-facial here—my hair is glowing!',
    serviceUsed: 'Hair Botox & Rose Hydra-Facial',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 't-2',
    clientName: 'Priyanka & Varun Sethi',
    rating: 5,
    date: 'June 2026',
    comment: 'Booked Selfie Salon for our bridal and groom package at TI Mall MG Road. Pooja and her team did an unbelievable job! The HD Airbrush makeup lasted through our entire reception without needing touchups. Highly recommended!',
    serviceUsed: 'Royal Couple Bridal Package',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 't-3',
    clientName: 'Aishwarya Saxena',
    rating: 5,
    date: 'May 2026',
    comment: 'The ambience is so relaxing, hygienic, and calm. I visited for Balayage hair coloring and nail extensions. Ananya guided me on the perfect caramel tone that suits my skin shade. The staff is polite and professional!',
    serviceUsed: 'Caramel Balayage & Gel Nails',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 't-4',
    clientName: 'Rohan Mehta',
    rating: 5,
    date: 'April 2026',
    comment: 'Best grooming salon for men in TI Mall! Great executive haircut, scalp massage, and beard styling. Very hygienic, premium products, and great coffee served during the session.',
    serviceUsed: "Executive Men's Grooming",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Selfie Salon Luxury Interior & Styling Stations',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    description: 'Chic cream floral wallpaper, crystal chandeliers, ornate gold mirrors, and plush turquoise chairs at TI Mall Indore.'
  },
  {
    id: 'g-2',
    title: 'HD Royal Bridal Glow Transformation',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'Flawless HD bridal makeup finish with soft nude blush tones and intricate hair drape.'
  },
  {
    id: 'g-3',
    title: 'Dimensional Honey Caramel Balayage',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    description: 'Sun-kissed dimensional balayage highlights done with premium ammonia-free hair colors.'
  },
  {
    id: 'g-4',
    title: 'Signature 24K Gold Rose Hydra-Facial Suite',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    description: 'Soothing facial treatment room equipped with collagen therapy and relaxing ambient lighting.'
  },
  {
    id: 'g-5',
    title: 'Swarovski Crystal French Gel Nail Extensions',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    description: 'Handcrafted acrylic nail extensions with delicate chrome detailing and crystal accents.'
  },
  {
    id: 'g-6',
    title: 'Luxury Grooming & Executive Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious, relaxed grooming environment for gentlemen seeking top-tier hair and beard styling.'
  },
  {
    id: 'g-7',
    title: 'Airbrush Glamour Bride with Jewel Drape',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
    description: 'Lightweight airbrush makeup designed for all-day radiance and sweat-proof comfort.'
  },
  {
    id: 'g-8',
    title: 'Glossy Keratin Smoothening Finish',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    description: 'Mirror-like sleek straight hair after our signature keratin protein treatment.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-1',
    category: 'Hair Care',
    name: 'Style & Repair Combo',
    price: 1899,
    duration: '90 mins',
    includes: ['Style Cut & Blowout', 'Deep Conditioning Hair Spa', 'Scalp Detox Therapy', 'Serum Protection'],
    recommendedFor: 'Dry or Frizzy Hair needing instant bounce and shine',
    isPopular: true
  },
  {
    id: 'pkg-2',
    category: 'Skin & Facials',
    name: 'Glow Goddess Spa Pack',
    price: 2499,
    duration: '75 mins',
    includes: ['24K Rose Hydra-Facial', 'Under-eye Brightening Mask', 'D-Tan Neck & Hand Cleanse', 'Ice Roller Massager'],
    recommendedFor: 'Event prep & instant radiant complexion'
  },
  {
    id: 'pkg-3',
    category: 'Bridal Luxury',
    name: 'Pre-Bridal Radiance Ritual',
    price: 8999,
    duration: '2 Sessions (6 Hours)',
    includes: ['Body Polishing & Scrub', 'Full Body Waxing & D-Tan', 'Hydra Facial & Collagen Mask', 'Aroma Spa Mani-Pedi', 'Hair Spa & Trim'],
    recommendedFor: 'Brides 1-2 weeks prior to wedding events',
    isPopular: true
  },
  {
    id: 'pkg-4',
    category: 'Bridal Makeup',
    name: 'Signature HD Bridal Glam',
    price: 12999,
    duration: '3.5 Hours',
    includes: ['HD Waterproof Bridal Makeup', 'Designer Hairstyle & Hair Extensions', 'Saree & Dupatta Draping', 'Mink Eyelashes', 'Nail Color'],
    recommendedFor: 'Weddings, Receptions & Engagement events'
  },
  {
    id: 'pkg-5',
    category: 'Men Grooming',
    name: 'Gentleman Executive Care',
    price: 1299,
    duration: '60 mins',
    includes: ['Executive Haircut', 'Beard Spa & Sculp Line', 'Charcoal Detox Cleanup', 'Head & Shoulder Relaxation Massage'],
    recommendedFor: 'Weekly or monthly grooming refresh'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Royal Bridal Early Bird Delight',
    subtitle: 'Flat 20% OFF on All Complete Bridal & Engagement Packages',
    discountBadge: '20% OFF',
    validUntil: 'Limited Period Offer',
    code: 'BRIDALGLOW20',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    description: 'Book your bridal dates 30 days in advance and unlock complimentary HD pre-wedding trial makeup & bridesmaid discount vouchers.',
    perks: ['Free Makeup Consultation', 'Complementary Hair Trial', '25% Off for Mother of Bride']
  },
  {
    id: 'offer-2',
    title: 'Monsoon Hair Transformation Fest',
    subtitle: 'Keratin / Botox Hair Smoothening Starting @ ₹2,999 Only',
    discountBadge: 'SPECIAL ₹2999',
    validUntil: 'Valid Mon - Thu',
    code: 'SMOOTHHAIR',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    description: 'Say goodbye to frizz with our imported formaldehyde-free keratin smoothening and botox shine therapies.',
    perks: ['Free Post Wash Shampoo Pack', '3 Months Gloss Warranty', 'Olaplex Bond Protection']
  },
  {
    id: 'offer-3',
    title: 'Selfie VIP Elite Annual Membership',
    subtitle: 'Pay ₹5,000 & Get ₹8,500 Service Credits + 15% Flat Off All Year',
    discountBadge: '40% EXTRA VALUE',
    validUntil: 'Annual Pass',
    code: 'VIPELITE',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Enjoy exclusive priority appointments, complimentary valet assistance at TI Mall, and birthday month pampering treats.',
    perks: ['Priority Slot Booking', 'Shareable with Family', 'Free Monthly Head Massage']
  }
];

export const FAQS = [
  {
    question: "Where is Selfie Unisex Salon located in Indore?",
    answer: "We are conveniently located on the 3rd Floor of Treasure Island Mall (TI Mall), Mahatma Gandhi Road (MG Road), opposite the High Court in Indore. Ample mall parking and valet assistance are available."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While we do welcome walk-in guests based on availability, we strongly recommend booking an advance appointment—especially on weekends and for bridal services—to ensure immediate service with your preferred master stylist."
  },
  {
    question: "What safety, sanitation, and hygiene protocols do you follow?",
    answer: "Hygiene is our top priority. All tools and shears are sterilized in UV autoclaves between each client. We use single-use disposable towels, capes, and sanitized stations for maximum safety and comfort."
  },
  {
    question: "Which hair and skin beauty brands do you use?",
    answer: "We exclusively use world-renowned premium brands including L'Oréal Professionnel, Kérastase, Olaplex, Schwarzkopf, MAC Cosmetics, Huda Beauty, Temptu Airbrush, Dermalogica, and O.P.I."
  },
  {
    question: "Do you provide customized bridal trials before the wedding day?",
    answer: "Yes! We offer personal bridal consultations and trial makeup sessions in our private bridal suite. Our lead makeup artist Pooja Malhotra will discuss your skin type, outfit colors, and hair preferences to design your dream wedding look."
  },
  {
    question: "What payment options are accepted at Selfie Salon?",
    answer: "We accept all major payment methods including Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, Cash, and Selfie VIP Membership Wallet."
  }
];
