export type CategoryKey =
  | 'carpentry'
  | 'electrical'
  | 'tiles'
  | 'plumbing'
  | 'wallpaper'
  | 'upvc'
  | 'painting'
  | 'waterproofing';

export const categories: { key: CategoryKey; label: string }[] = [
  { key: 'carpentry', label: 'Carpentry' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'tiles', label: 'Tiles & Marble' },
  { key: 'plumbing', label: 'Plumbing' },
  { key: 'painting', label: 'Painting & Textures' },
  { key: 'wallpaper', label: 'Wallpaper' },
  { key: 'upvc', label: 'UPVC' },
  { key: 'waterproofing', label: 'Waterproofing' },
];

export const categoryLabel = (key: CategoryKey) =>
  categories.find((c) => c.key === key)?.label ?? key;

export type GalleryItem = {
  id: string; // unsplash photo id
  title: string;
  category: CategoryKey;
  description?: string;
  location?: string;
  scope?: string[];
};

/**
 * Gallery photos. NOTE: these are stock photos used as placeholders –
 * replace with photos of Home Style's real work.
 */
export const galleryItems: GalleryItem[] = [
  { id: '1600489000022-c2086d79f9d4', title: 'Modular Kitchen', category: 'carpentry' },
  { id: '1631679706909-1844bbd07221', title: 'Lounge Feature Wall', category: 'wallpaper' },
  { id: '1584622650111-993a426fbf0a', title: 'Bathroom Makeover', category: 'tiles' },
  { id: '1595526114035-0d45ed16cfbf', title: 'Master Bedroom', category: 'carpentry' },
  { id: '1615529182904-14819c35db37', title: 'Decorative Lighting', category: 'electrical' },
  { id: '1523413651479-597eb2da0ad6', title: 'Subway Tile Splash', category: 'tiles' },
  { id: '1558618666-fcd25c85cd64', title: 'Pipe & Fittings', category: 'plumbing' },
  { id: '1572120360610-d971b9d7767c', title: 'Windows & Frames', category: 'upvc' },
  { id: '1600121848594-d8644e57abab', title: 'Living Room Lighting', category: 'electrical' },
  { id: '1600210492486-724fe5c67fb0', title: 'Gallery Wall', category: 'wallpaper' },
  { id: '1556909172-54557c7e4fb7', title: 'Timber Kitchen', category: 'carpentry' },
  { id: '1560185007-cde436f6a4d0', title: 'Bay Window Dining', category: 'upvc' },
  { id: '1507652313519-d4e9174996dd', title: 'Spa-Style Bathroom', category: 'tiles' },
  { id: '1615873968403-89e068629265', title: 'Green Feature Wall', category: 'wallpaper' },
  { id: '1621905251189-08b45d6a269e', title: 'Wiring & Switchgear', category: 'electrical' },
  { id: '1585704032915-c3400ca199e7', title: 'Premium Tap Fittings', category: 'plumbing' },
  { id: '1565538810643-b5bdb714032a', title: 'Kitchen Sink Refit', category: 'plumbing' },
  { id: '1600607687939-ce8a6c25118c', title: 'Timber Wall Panelling', category: 'wallpaper' },
  { id: '1589939705384-5185137a7f0f', title: 'Workshop Joinery', category: 'carpentry' },
  { id: '1560448204-e02f11c3d0e2', title: 'Bright Open-Plan Living', category: 'upvc' },
  { id: '1556912172-45b7abe8b7e1', title: 'White Modular Kitchen', category: 'carpentry' },
  { id: '1540518614846-7eded433c457', title: 'Serene Bedroom', category: 'carpentry' },
  { id: '1616486338812-3dadae4b4ace', title: 'Neutral Lounge', category: 'wallpaper' },
  { id: '1595814433015-e6f5ce69614e', title: 'Fresh Interior Painting', category: 'painting' },
  { id: '1615971677499-5467cbab01c0', title: 'Navy Accent Wall', category: 'painting' },
  { id: '1600585154340-be6161a56a0c', title: 'Exterior Facade Finish', category: 'painting' },
  { id: '1562259949-e8e7689d7828', title: 'Colour Application', category: 'painting' },
  { id: '1632759145351-1d592919f522', title: 'Roof & Terrace Waterproofing', category: 'waterproofing' },
];

/** Featured projects shown on the Projects page (placeholder descriptions). */
export const projects: GalleryItem[] = [
  {
    id: '1600489000022-c2086d79f9d4',
    title: 'Contemporary Modular Kitchen',
    category: 'carpentry',
    location: 'Gurugram',
    description:
      'Full kitchen refit with dark base units, open shelving, a tiled splashback and under-cabinet lighting.',
    scope: ['Modular cabinets', 'Tiling', 'Electrical points'],
  },
  {
    id: '1595526114035-0d45ed16cfbf',
    title: 'Master Bedroom Suite',
    category: 'carpentry',
    location: 'Gurugram',
    description:
      'Custom bed with storage, bedside tables, wardrobe wall and a soft, neutral colour scheme.',
    scope: ['Custom furniture', 'Wardrobes', 'Ceiling lights'],
  },
  {
    id: '1584622650111-993a426fbf0a',
    title: 'Designer Bathroom Makeover',
    category: 'tiles',
    location: 'Delhi',
    description:
      'Glass shower enclosure, large-format wall tiles, floating vanity and concealed plumbing.',
    scope: ['Tiling', 'Plumbing', 'Fittings'],
  },
  {
    id: '1615529182904-14819c35db37',
    title: 'Statement Lighting – Living Room',
    category: 'electrical',
    location: 'Faridabad',
    description:
      'Layered lighting plan with woven pendants, wall lights and dimmable cove lighting.',
    scope: ['Lighting design', 'Rewiring', 'Switch plates'],
  },
  {
    id: '1631679706909-1844bbd07221',
    title: 'Feature Wall & Panelling',
    category: 'wallpaper',
    location: 'Gurugram',
    description:
      'Textured wall finish with decorative mirrors and a warm accent wall behind the sofa.',
    scope: ['Wall preparation', 'Wall finish', 'Panelling'],
  },
  {
    id: '1523413651479-597eb2da0ad6',
    title: 'Subway Tile Kitchen Splash',
    category: 'tiles',
    location: 'Gurugram',
    description:
      'Classic white metro tiles with neat grouting, finished with a polished chrome mixer tap.',
    scope: ['Tiling', 'Plumbing'],
  },
  {
    id: '1560185007-cde436f6a4d0',
    title: 'Bay Window Dining Area',
    category: 'upvc',
    location: 'Delhi',
    description:
      'Bright dining corner with bay windows, new ceiling finish and warm pendant lighting.',
    scope: ['UPVC work', 'Ceiling', 'Lighting'],
  },
  {
    id: '1572120360610-d971b9d7767c',
    title: 'Villa Window Replacement',
    category: 'upvc',
    location: 'Sohna',
    description:
      'Replacement of old frames with durable, low-maintenance UPVC windows across the house.',
    scope: ['UPVC windows', 'Finishing'],
  },
  {
    id: '1565538810643-b5bdb714032a',
    title: 'Kitchen Plumbing Refit',
    category: 'plumbing',
    location: 'Gurugram',
    description:
      'New sink, gold-finish tap, RO point and re-routed supply lines for a cleaner kitchen layout.',
    scope: ['Plumbing', 'Fittings', 'RO point'],
  },
  {
    id: '1615971677499-5467cbab01c0',
    title: 'Deep Navy Accent Wall',
    category: 'painting',
    location: 'Gurugram',
    description:
      'Bold navy feature wall with a smooth, even finish, paired with warm brass lighting and tan leather furniture.',
    scope: ['Wall preparation', 'Interior painting', 'Accent finish'],
  },
  {
    id: '1600585154340-be6161a56a0c',
    title: 'Weather-Ready Facade Repaint',
    category: 'painting',
    location: 'Delhi',
    description:
      'Crack repair and a weather-resistant exterior finish to refresh and protect the whole elevation.',
    scope: ['Surface repair', 'Exterior painting', 'Scaffolding'],
  },
  {
    id: '1632759145351-1d592919f522',
    title: 'Terrace Waterproofing',
    category: 'waterproofing',
    location: 'Gurugram',
    description:
      'Roof inspection, crack sealing and a waterproof coating system to stop seepage into the rooms below.',
    scope: ['Leak inspection', 'Waterproof coating', 'Ponding test'],
  },
];
