export interface ServiceType {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  image: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

export const serviceData: ServiceType[] = [
  {
    id: 1,
    title: "Visa & Immigration",
    slug: "visa-immigration",
    shortDescription: "Navigate through the complex Australian immigration system with confidence and ease.",
    longDescription: "At Skaff Legal, we offer comprehensive visa and immigration services to help individuals and families navigate through the complexities of the Australian immigration system. Our team of experienced immigration experts understands the challenges and emotional stress that can come with immigration processes. We provide personalized guidance and support to ensure a smooth and successful immigration journey. From initial consultation to final approval, we are with you every step of the way, making the process as straightforward and stress-free as possible.",
    icon: "globe",
    features: [
      "Partner and Family Visas",
      "Skilled Migration Visas",
      "Student Visas",
      "Business and Investor Visas",
      "Visa Appeals and Reviews",
      "Citizenship Applications",
      "Migration Planning"
    ],
    image: "https://images.pexels.com/photos/7613565/pexels-photo-7613565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      {
        title: "Expert Guidance",
        description: "Our specialized knowledge ensures you receive the most up-to-date and accurate advice."
      },
      {
        title: "Personalized Approach",
        description: "We tailor our services to your unique circumstances and needs."
      },
      {
        title: "Streamlined Process",
        description: "We handle all paperwork and communication with immigration authorities on your behalf."
      },
      {
        title: "Higher Success Rate",
        description: "Our expertise significantly improves your chances of a successful application."
      }
    ]
  },
  {
    id: 2,
    title: "Property & Conveyancing",
    slug: "property-conveyancing",
    shortDescription: "Buying or selling property? We ensure a smooth transaction with our comprehensive property and conveyancing services.",
    longDescription: "Property transactions can be complex, but with Skaff Legal's property and conveyancing services, you can rest assured that your interests are protected throughout the entire process. Our experienced team provides comprehensive support for all types of property transactions, from residential purchases and sales to commercial property deals. We conduct thorough property searches, prepare and review all necessary legal documents, and represent your interests during negotiations. Our goal is to make your property transaction as smooth and stress-free as possible, allowing you to focus on the excitement of your new property journey.",
    icon: "home",
    features: [
      "Residential Property Transactions",
      "Commercial Property Deals",
      "Contract Review and Preparation",
      "Property Searches and Due Diligence",
      "Settlement Services",
      "Title Transfers",
      "Lease Agreements"
    ],
    image: "https://images.pexels.com/photos/7578983/pexels-photo-7578983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      {
        title: "Legal Protection",
        description: "We identify and address potential legal issues before they become problems."
      },
      {
        title: "Cost-Effective Service",
        description: "Our efficient processes help you avoid unnecessary expenses and delays."
      },
      {
        title: "Peace of Mind",
        description: "With our expertise, you can be confident that all legal aspects are properly handled."
      },
      {
        title: "Clear Communication",
        description: "We explain complex legal concepts in simple, understandable terms."
      }
    ]
  },
  {
    id: 3,
    title: "Personal Legal Services",
    slug: "personal-legal",
    shortDescription: "Get expert legal advice and representation for your personal legal matters.",
    longDescription: "Life brings various legal challenges that require professional guidance and support. At Skaff Legal, we offer a wide range of personal legal services designed to help individuals navigate through these challenges with confidence. Our approach is client-centered, focusing on understanding your unique situation and providing tailored legal solutions that best serve your interests. From family law matters to estate planning, our experienced team is committed to providing compassionate and effective legal representation. We strive to make legal processes less intimidating and more accessible, ensuring that you understand your rights and options every step of the way.",
    icon: "user",
    features: [
      "Family Law Matters",
      "Wills and Estate Planning",
      "Power of Attorney",
      "Dispute Resolution",
      "Contract Reviews",
      "Legal Document Preparation",
      "General Legal Advice"
    ],
    image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      {
        title: "Personal Attention",
        description: "We take the time to understand your specific needs and concerns."
      },
      {
        title: "Practical Solutions",
        description: "Our advice is always practical and focused on achieving the best possible outcome."
      },
      {
        title: "Emotional Support",
        description: "We understand the emotional aspects of personal legal matters and provide supportive guidance."
      },
      {
        title: "Affordable Services",
        description: "We offer transparent pricing and flexible payment options."
      }
    ]
  }
];