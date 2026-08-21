export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  isSpecialist?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "stamp-duty",
    title: "Stamp Duty & Registration Specialist",
    subtitle: "Specialist in Property Documentation Work",
    description: "Complete end-to-end guidance for e-stamping, online registration, Index-2 document retrieval, and legal property transfers under Maharashtra Government standards.",
    iconName: "FileCheck2",
    features: [
      "Online & Offline Document Registration",
      "Stamp Duty Valuation & Calculation",
      "Index-2 & Certified True Copy Generation",
      "Power of Attorney & Gift Deed Registration"
    ],
    isSpecialist: true
  },
  {
    id: "property-sale-purchase",
    title: "Property Sale & Purchase",
    subtitle: "Flats, Shops, Row Houses & Plots",
    description: "Helping buyers find verified residential & commercial properties and sellers get maximum market value in Mira Road East, Sheetal Nagar & Thane region.",
    iconName: "Building2",
    features: [
      "1, 2, 3 BHK Residential Flats",
      "Main Road Commercial Shops & Outlets",
      "Luxurious Independent Row Houses",
      "100% Verified Legal Titles & Clear Records"
    ]
  },
  {
    id: "rental-lease",
    title: "Rental & Lease Agreements",
    subtitle: "Registered Leave & License Agreements",
    description: "Hassle-free landlord and tenant verification, biometric police verification setup, and registered leave & license agreement execution.",
    iconName: "KeyRound",
    features: [
      "Registered Leave & License Agreements",
      "Police Verification Documentation",
      "Biometric Registration Assistance",
      "Tenant Screening & Lease Renewal"
    ]
  },
  {
    id: "home-loan-paperwork",
    title: "Home Loan & Financial Paperwork",
    subtitle: "Complete Document Assistance for Home Loans",
    description: "Expert assistance with bank paper submission, chain deed compilation, society NOCs, and smooth loan sanctioning with top nationalized & private banks.",
    iconName: "BadgeIndianRupee",
    features: [
      "Chain of Title Deed Verification",
      "Co-operative Housing Society NOCs",
      "Bank File Preparation & Legal Audit",
      "Fast-Track Loan Approval Support"
    ]
  },
  {
    id: "title-search-legal",
    title: "Property Legal & Title Documentation",
    subtitle: "Safeguard Your Investment with Legal Precision",
    description: "20+ Years of deep legal expertise in analyzing property titles, society transfer papers, clearance certificates, and mutation entries.",
    iconName: "Scale",
    features: [
      "Title Search Report & Search Certificate",
      "Society Transfer & Share Certificate Support",
      "Will, Gift Deed & Conveyance Deed",
      "VVMC Property Tax Record Verification"
    ]
  }
];
