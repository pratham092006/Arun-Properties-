export interface Property {
  id: string;
  title: string;
  category: 'buy' | 'rent' | 'commercial' | 'rowhouse';
  type: '1 BHK' | '2 BHK' | '3 BHK' | 'Shop' | 'Row House';
  location: string;
  address: string;
  price: string;
  priceValue: number;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  legalStatus: string;
  image: string;
  featured: boolean;
  highlights: string[];
}

export const propertyData: Property[] = [
  {
    id: "prop-1",
    title: "Premium 2 BHK Modern Apartment",
    category: "buy",
    type: "2 BHK",
    location: "Sheetal Nagar, Mira Road East",
    address: "Near Woodland C Bldg, Station Rd, Sheetal Nagar",
    price: "₹ 78 Lakhs",
    priceValue: 7800000,
    area: "850 Sq.Ft.",
    bedrooms: 2,
    bathrooms: 2,
    legalStatus: "100% Clear Title | Stamp Duty Paid",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlights: ["2 Mins from Station", "24/7 Water Supply", "VVMC Approved", "Bank Loan Ready"]
  },
  {
    id: "prop-2",
    title: "Prime Commercial Main Road Shop",
    category: "commercial",
    type: "Shop",
    location: "Station Road, Mira Road East",
    address: "Station Road Market Hub, Mira Road East",
    price: "₹ 1.25 Crore",
    priceValue: 12500000,
    area: "420 Sq.Ft.",
    bathrooms: 1,
    legalStatus: "Shop & Establishment License Ready | Clear Chain Deed",
    image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlights: ["Heavy Footfall", "Road Facing", "Ideal for Retail/Office", "Immediate Possession"]
  },
  {
    id: "prop-3",
    title: "Luxurious 3 BHK Duplex Row House",
    category: "rowhouse",
    type: "Row House",
    location: "Beverly Park, Mira Road East",
    address: "Opp. Garden, Beverly Park Sector 3",
    price: "₹ 1.95 Crore",
    priceValue: 19500000,
    area: "1,850 Sq.Ft.",
    bedrooms: 3,
    bathrooms: 3,
    legalStatus: "Freehold Title | Society NOC Clearance",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlights: ["Private Garden Terrace", "Car Parking", "Gated Security", "Peaceful Locality"]
  },
  {
    id: "prop-4",
    title: "Affordable Cozy 1 BHK Apartment",
    category: "buy",
    type: "1 BHK",
    location: "Kanakia Park, Mira Road East",
    address: "Kanakia Road, Near RBK School",
    price: "₹ 48 Lakhs",
    priceValue: 4800000,
    area: "580 Sq.Ft.",
    bedrooms: 1,
    bathrooms: 1,
    legalStatus: "OC Received | Ready Document Work",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    featured: false,
    highlights: ["High Floor", "Modular Kitchen", "Low Maintenance", "School Nearby"]
  },
  {
    id: "prop-5",
    title: "Furnished 2 BHK Flat for Rent",
    category: "rent",
    type: "2 BHK",
    location: "Sheetal Nagar, Mira Road East",
    address: "Station Road, Sheetal Nagar",
    price: "₹ 24,000 / month",
    priceValue: 24000,
    area: "750 Sq.Ft.",
    bedrooms: 2,
    bathrooms: 2,
    legalStatus: "Registered Rent Agreement Included",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    featured: false,
    highlights: ["Fully Furnished", "Lift & Power Backup", "Family Preferred", "Ready to Move"]
  },
  {
    id: "prop-6",
    title: "Spacious Commercial Office Space",
    category: "commercial",
    type: "Shop",
    location: "Station Road, Sheetal Nagar",
    address: "Woodland Building Complex, Station Rd",
    price: "₹ 45,000 / month",
    priceValue: 45000,
    area: "600 Sq.Ft.",
    bathrooms: 1,
    legalStatus: "Commercial Lease Agreement Verified",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    featured: false,
    highlights: ["AC Cabins Fitted", "Reception Area", "Glass Frontage", "Prime Location"]
  }
];
