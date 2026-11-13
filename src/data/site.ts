export const site = {
  name: 'Home Style',
  tagline: 'Transforming Spaces, Enhancing Lives',
  description:
    'Home Style – one-stop home improvement and interior solutions in Gurugram. Wooden work, electrical, tiles & marble, plumbing, painting, textures, wood polish, wallpaper, panelling, UPVC, waterproofing and deep cleaning under one roof.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  phone: '+91 88027 05070',
  phoneHref: 'tel:+918802705070',
  /** Digits only (country code + number) – the format wa.me expects */
  whatsappNumber: '918802705070',
  whatsapp: 'https://wa.me/918802705070',
  whatsappQuote:
    'https://wa.me/918802705070?text=Hi%20Home%20Style%2C%20I%27d%20like%20a%20free%20quote.',
  email: 'mushman530@gmail.com',
  address: {
    street: 'Plot No. 55/A7, Gali No. 7, Devilal Colony',
    city: 'Gurugram',
    region: 'Haryana',
    postalCode: '122001',
    country: 'IN',
  },
  addressLine: 'Plot No. 55/A7, Gali No. 7, Devilal Colony, Gurugram, Haryana – 122001',
  mapEmbed: 'https://www.google.com/maps?q=Devilal+Colony,+Gurugram,+Haryana+122001&output=embed',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
] as const;
