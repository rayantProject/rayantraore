import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItem {
  title: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

export const CONTACT_INFO: Record<string, ContactItem> = {
  email: {
    title: "Email",
    value: "contact@rayantraore.me",
    href: "mailto:contact@rayantraore.me",
    icon: Mail,
  },
  phone: {
    title: "Phone",
    value: "+33 7 78 68 57 69",
    href: "tel:+33778685769",
    icon: Phone,
  },
  location: {
    title: "Location",
    value: "France",
    icon: MapPin,
  },
  availability: {
    title: "Availability",
    value: "Open to opportunities",
    icon: Clock,
  },
};

export const CONTACT_CONTENT = {
  header: {
    title: "Get In Touch",
    description:
      "Have a project in mind? Let's create something amazing together. I'm always excited to work on new challenges and innovative ideas.",
  },
  sections: {
    connect: {
      title: "Let's Connect",
    },
    responseTime: {
      title: "Response Time",
      description:
        "I typically respond to messages within 24 hours. For urgent matters, please mention it in your subject line.",
    },
  },
} as const;

// Export individual contact items for easy access
export const contactItems = Object.values(CONTACT_INFO);

// Export specific contact info
export const { email, phone, location, availability } = CONTACT_INFO;
