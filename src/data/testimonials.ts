export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Immigration Client",
    content: "Claudia at Skaff Legal made my partner visa application process smooth and stress-free. Her expertise and personal approach were exactly what I needed during such an important time in my life.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Property Investor",
    content: "I've used Skaff Legal for multiple property transactions, and they consistently deliver exceptional service. Their attention to detail and proactive approach have saved me from potential pitfalls more than once.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Wilson",
    position: "Family Law Client",
    content: "During what was probably the most difficult time in my life, Claudia provided not just legal expertise but genuine compassion. She simplified complex legal matters and always had my best interests at heart.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];