export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

export const reviewsData: Review[] = [
  {
    id: "1",
    name: "Vaishali Gajjar",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 month ago",
    text: "I am very happy with your service and trusted people in legal document work",
    tag: "Legal Documentation & Stamp Duty"
  },
  {
    id: "2",
    name: "Vernon Mark Sequeira",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 months ago",
    text: "The best place if you are looking for an expert into real-estate.",
    tag: "Flat Purchase & Advisory"
  },
  {
    id: "3",
    name: "Luiza D'souza",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "3 months ago",
    text: "Arun helped us with all the paperwork also the documents needed for a home loan.",
    tag: "Home Loan & Paperwork"
  },
  {
    id: "4",
    name: "Rahul Sharma",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 months ago",
    text: "Got my 2BHK flat in Sheetal Nagar registered smoothly without any hassle. Arun Consultancy handles all legal paperwork with utmost transparency.",
    tag: "Flat Purchase & Registration"
  },
  {
    id: "5",
    name: "Meena Patel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "5 months ago",
    text: "Superb experience! They found a great commercial shop for my business near Mira Road Station and handled the lease agreement in 24 hours.",
    tag: "Shop Rental & Lease Agreement"
  }
];
