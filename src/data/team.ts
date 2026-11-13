export type Founder = {
  name: string;
  role: string;
  photo: string; // file in public/images/<photo>.jpg
  quote?: string;
  bio: string;
  facts?: { value: string; label: string }[];
};

export const founders: Founder[] = [
  {
    name: 'Mohd Ushman',
    role: 'Founder',
    photo: 'mohd-ushman',
    bio: 'Mohd Ushman founded Home Style in Gurugram to bring wooden work, electrical, tiling, plumbing, painting and finishing together under one team – so homeowners deal with a single point of contact instead of juggling five contractors.',
  },
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
    image: '1581092160562-40aa08e78837',
  },
] as const;
