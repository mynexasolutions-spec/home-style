/**
 * DUMMY DATA – every name, title, quote, date and milestone below is a
 * placeholder. Replace with the real founders, team and company history.
 * Photos are Unsplash stock portraits.
 */

export type Founder = {
  name: string;
  role: string;
  photo: string;
  quote: string;
  bio: string;
  facts: { value: string; label: string }[];
};

export const founders: Founder[] = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & Managing Director',
    photo: '1507003211169-0a1dd7228f2d',
    quote: 'We treat every home as if it were our own – because to the family living in it, it is everything.',
    bio: 'Arjun started Home Style as a two-person carpentry crew after years of watching homeowners juggle five different contractors for one renovation. He built the company around a simple promise: one team, one point of contact, no excuses.',
    facts: [
      { value: '15+', label: 'Years in the trade' },
      { value: '500+', label: 'Homes completed' },
      { value: '1', label: 'Point of contact' },
    ],
  },
  {
    name: 'Kavita Rao',
    role: 'Co-Founder & Head of Design',
    photo: '1494790108377-be9c29b29330',
    quote: 'Good design is not about spending more. It is about knowing exactly where every rupee and every inch should go.',
    bio: 'Kavita leads design and finishes – from colour palettes and textures to lighting and layouts. She joined to bring a designer’s eye to the workshop floor, and still reviews every project in person before handover.',
    facts: [
      { value: '12+', label: 'Years in interiors' },
      { value: '200+', label: 'Layouts planned' },
      { value: '100%', label: 'Projects reviewed' },
    ],
  },
];

export type TeamMember = { name: string; role: string; photo: string };

export const team: TeamMember[] = [
  { name: 'Rohan Singh', role: 'Head of Carpentry', photo: '1500648767791-00dcc994a43e' },
  { name: 'Imran Khan', role: 'Lead Electrician', photo: '1621905252507-b35492cc74b4' },
  { name: 'Priya Nair', role: 'Interior Designer', photo: '1580489944761-15a19d654956' },
  { name: 'Vikram Chauhan', role: 'Project Manager', photo: '1531427186611-ecfd6d936c79' },
  { name: 'Sana Sheikh', role: 'Client Relations', photo: '1567532939604-b6b5b0db2604' },
  { name: 'Deepak Yadav', role: 'Plumbing Supervisor', photo: '1522529599102-193c0d76b5b6' },
  { name: 'Meera Joshi', role: 'Painting & Textures Lead', photo: '1438761681033-6461ffad8d80' },
  { name: 'Karan Malhotra', role: 'Site Supervisor', photo: '1568602471122-7832951cc4c5' },
];

export const valueCards = [
  {
    icon: 'craft',
    title: 'Craftsmanship',
    text: 'We sweat the small stuff – joints, edges, alignment – because that is what you notice every day.',
    image: '1589939705384-5185137a7f0f',
  },
  {
    icon: 'honesty',
    title: 'Honest Pricing',
    text: 'Itemised quotes and no hidden extras. What we quote is what you pay.',
    image: '1503387762-592deb58ef4e',
  },
  {
    icon: 'care',
    title: 'Respect for Your Home',
    text: 'Floors covered, dust controlled and a full clean-up. We leave your home better than we found it.',
    image: '1615873968403-89e068629265',
  },
  {
    icon: 'time',
    title: 'On-Time Delivery',
    text: 'A realistic schedule up front – and a team that sticks to it.',
    image: '1556912172-45b7abe8b7e1',
  },
] as const;
