export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface ProductItem {
  title: string;
  description: string;
  features: string[];
}

export interface ProjectCityOption {
  value: string;
  label: string;
}

export interface PanelTypeOption {
  value: string;
  label: string;
}

export interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  projectCity: string;
  panelType: string;
  areaQuantity: string;
}