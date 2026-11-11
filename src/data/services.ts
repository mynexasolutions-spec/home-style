import { IMG } from './images';

export type ServiceIconKey =
  | 'carpentry'
  | 'electrical'
  | 'tiles'
  | 'plumbing'
  | 'wallpaper'
  | 'upvc'
  | 'painting'
  | 'exterior'
  | 'duco'
  | 'texture'
  | 'wood'
  | 'waterproofing';

export type Service = {
  slug: string;
  icon: ServiceIconKey;
  title: string;
  short: string;
  image: string;
  intro: string;
  offerings: string[];
  highlights: { title: string; text: string }[];
  gallery: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'carpentry-work',
    icon: 'carpentry',
    title: 'Carpentry Work',
    short: 'Modular furniture, wardrobes, kitchens, doors & custom woodwork.',
    image: IMG.carpenter,
    intro:
      'Our carpenters design and build furniture and fittings that are made for your space – strong joinery, clean finishes and hardware that lasts for years.',
    offerings: [
      'Modular kitchens & cabinets',
      'Wardrobes & walk-in closets',
      'TV units & wall storage',
      'Doors, frames & partitions',
      'Beds, study tables & custom furniture',
      'False ceilings & wooden flooring',
      'Repairs, polishing & refurbishment',
    ],
    highlights: [
      { title: 'Made to measure', text: 'Every unit is measured on site and built to fit your room exactly.' },
      { title: 'Quality boards & hardware', text: 'Durable boards, laminates and soft-close fittings chosen for daily use.' },
      { title: 'Clean, tidy work', text: 'Dust-controlled cutting and a proper clean-up when the job is done.' },
    ],
    gallery: [
      '1600489000022-c2086d79f9d4',
      '1595526114035-0d45ed16cfbf',
      '1556909172-54557c7e4fb7',
      '1556912172-45b7abe8b7e1',
      '1540518614846-7eded433c457',
    ],
    faqs: [
      {
        q: 'Can you build furniture to my own design?',
        a: 'Yes. Share a sketch, a reference photo or just your idea and we will turn it into a workable design with measurements before we start.',
      },
      {
        q: 'Which materials do you use?',
        a: 'We work with plywood, MDF, laminates, veneers and solid wood. We will recommend the right option for each area and budget.',
      },
    ],
  },
  {
    slug: 'electrical-work',
    icon: 'electrical',
    title: 'Electrical Work',
    short: 'Complete electrical solutions including wiring, fittings, lighting and repairs.',
    image: IMG.electrician,
    intro:
      'From concealed wiring in a new home to fault-finding in an old one, our electricians deliver safe, tidy and code-compliant work.',
    offerings: [
      'New wiring & complete rewiring',
      'Switchboards, MCBs & distribution boards',
      'Decorative, cove & spot lighting',
      'Fan, geyser & AC point installation',
      'Inverter & backup wiring',
      'Fault finding & safety checks',
      'CCTV & smart-home point wiring',
    ],
    highlights: [
      { title: 'Safety first', text: 'Quality cables, correct ratings and proper earthing on every job.' },
      { title: 'Neat finishing', text: 'Concealed runs, labelled boards and switches aligned perfectly.' },
      { title: 'Fast repairs', text: 'Quick diagnosis and a clear explanation before we fix anything.' },
    ],
    gallery: [
      '1621905251189-08b45d6a269e',
      '1615529182904-14819c35db37',
      '1600121848594-d8644e57abab',
      '1600585152220-90363fe7e115',
      '1581092160562-40aa08e78837',
    ],
    faqs: [
      {
        q: 'Do you handle small repair jobs?',
        a: 'Yes – from a faulty switch to a tripping MCB. Tell us the problem and we will schedule a visit.',
      },
      {
        q: 'Can you plan lighting for my interiors?',
        a: 'Absolutely. We help you choose ceiling, cove, wall and accent lighting that suits each room and fits the false ceiling design.',
      },
    ],
  },
  {
    slug: 'tiles-and-marble',
    icon: 'tiles',
    title: 'Tiles & Marble',
    short: 'Premium tile installation, marble flooring, wall cladding and surface finishing.',
    image: IMG.bathroomGlass,
    intro:
      'Precise levelling, tight joints and a flawless finish – we install floor and wall surfaces that look beautiful and stand up to daily wear.',
    offerings: [
      'Floor & wall tile installation',
      'Marble & granite flooring',
      'Bathroom & kitchen tiling',
      'Polishing, grouting & repair',
      'Wall cladding & feature surfaces',
      'Surface preparation & waterproofing',
    ],
    highlights: [
      { title: 'Perfect levels', text: 'Careful levelling for flat floors and straight lines.' },
      { title: 'Tight, clean joints', text: 'Spacers, quality adhesive and neat grouting for a premium look.' },
      { title: 'Minimal wastage', text: 'Careful layout planning to reduce cuts and save material.' },
    ],
    gallery: [
      '1584622650111-993a426fbf0a',
      '1523413651479-597eb2da0ad6',
      '1507652313519-d4e9174996dd',
      '1565538810643-b5bdb714032a',
      '1600585152220-90363fe7e115',
    ],
    faqs: [
      {
        q: 'Can I supply my own tiles or marble?',
        a: 'Yes. We can install materials you have already bought, or help you select and source them.',
      },
      {
        q: 'Do you repair old tiles?',
        a: 'We replace cracked tiles, re-grout and polish worn marble so surfaces look fresh again.',
      },
    ],
  },
  {
    slug: 'plumbing-services',
    icon: 'plumbing',
    title: 'Plumbing Services',
    short: 'Installation, repair and maintenance of all types of plumbing systems and fittings.',
    image: IMG.tap,
    intro:
      'Leak-free pipework, properly fitted sanitaryware and quick repairs – our plumbers keep your water systems running smoothly.',
    offerings: [
      'Concealed & open pipe work',
      'Bathroom fittings & sanitaryware',
      'Kitchen sink & RO points',
      'Leak detection & repair',
      'Water tank & motor connections',
      'Drainage & blockage clearing',
    ],
    highlights: [
      { title: 'Leak-tested', text: 'Pressure-tested lines before walls are closed or tiled.' },
      { title: 'Quality fittings', text: 'Reliable pipes, taps and fixtures from trusted brands.' },
      { title: 'Prompt service', text: 'Quick attendance for urgent leaks and blockages.' },
    ],
    gallery: [
      '1585704032915-c3400ca199e7',
      '1558618666-fcd25c85cd64',
      '1565538810643-b5bdb714032a',
      '1584622650111-993a426fbf0a',
      '1507652313519-d4e9174996dd',
    ],
    faqs: [
      {
        q: 'Do you fix hidden leaks?',
        a: 'Yes. We trace the source of seepage or dampness and repair it with minimum damage to finished surfaces.',
      },
      {
        q: 'Can you plan plumbing for a new bathroom?',
        a: 'Yes – we plan supply and drain lines together with the tiling and fixture layout so everything fits first time.',
      },
    ],
  },
  {
    slug: 'interior-painting',
    icon: 'painting',
    title: 'Interior Painting',
    short: 'Smooth, long-lasting paint finishes for walls and ceilings, with proper surface preparation.',
    image: '1595814433015-e6f5ce69614e',
    intro:
      'A great paint job is 80% preparation. We repair, level, prime and then paint, so your walls and ceilings look flawless and the finish lasts.',
    offerings: [
      'Complete home & single-room painting',
      'Wall putty, crack filling & levelling',
      'Primer and premium emulsion finishes',
      'Ceiling & cove painting',
      'Accent & feature walls',
      'Repainting of old, damp-marked or peeling walls',
      'Shade advice & colour matching',
    ],
    highlights: [
      { title: 'Proper preparation', text: 'Cracks filled, surfaces sanded and primed before any colour goes on.' },
      { title: 'Furniture protected', text: 'Floors and furnishings are covered and masked before we start.' },
      { title: 'Clean finish', text: 'Sharp edges, even coats and a full clean-up when the job is done.' },
    ],
    gallery: [
      '1595814433015-e6f5ce69614e',
      '1562259949-e8e7689d7828',
      '1615971677499-5467cbab01c0',
      '1615873968403-89e068629265',
      '1616486338812-3dadae4b4ace',
    ],
    faqs: [
      {
        q: 'Do I need to move my furniture?',
        a: 'No. We shift and cover furniture ourselves, and put everything back once the paint is dry.',
      },
      {
        q: 'Can you help me choose colours?',
        a: 'Yes. Tell us the mood you want and we will suggest shades, finishes and combinations that suit your light and furniture.',
      },
    ],
  },
  {
    slug: 'exterior-painting',
    icon: 'exterior',
    title: 'Exterior Painting',
    short: 'Weather-resistant coatings that protect and refresh the outside of your home.',
    image: IMG.exterior,
    intro:
      'Sun, rain and dust are hard on a building. Our exterior painting repairs the surface and applies weather-resistant coatings that keep your facade protected and looking fresh.',
    offerings: [
      'Facade & boundary-wall painting',
      'Crack repair & surface treatment',
      'Weatherproof exterior emulsions',
      'Texture & stone-effect finishes',
      'Gates, grills & railing painting',
      'Balcony & terrace-wall painting',
    ],
    highlights: [
      { title: 'Weather-ready coatings', text: 'Paints chosen to cope with strong sun, heavy rain and dust.' },
      { title: 'Safe access', text: 'Proper scaffolding and equipment for upper floors.' },
      { title: 'Surface repair first', text: 'Cracks and damp patches treated so the new coat holds.' },
    ],
    gallery: [
      '1600585154340-be6161a56a0c',
      '1572120360610-d971b9d7767c',
      '1600607688969-a5bfcd646154',
      '1600566753190-17f0baa2a6c3',
      '1560185007-cde436f6a4d0',
    ],
    faqs: [
      {
        q: 'When is the best time to repaint the outside?',
        a: 'Dry, mild weather is ideal. We plan around the season so the paint cures properly.',
      },
      {
        q: 'Can you fix cracks and damp patches first?',
        a: 'Yes. We repair cracks and treat damp areas before painting, and can add waterproofing where needed.',
      },
    ],
  },
  {
    slug: 'texture-and-design',
    icon: 'texture',
    title: 'Texture & Design',
    short: 'Designer wall textures and decorative finishes that turn plain walls into statement features.',
    image: '1615971677499-5467cbab01c0',
    intro:
      'From subtle metallic shimmer to rugged concrete and soft clay effects, our texture and design finishes give your walls depth, character and a luxury feel.',
    offerings: [
      'Designer texture finishes',
      'Metallic & shimmer effects',
      'Concrete, marble & clay-look finishes',
      'Feature walls behind TV units & beds',
      'Custom patterns & stencil work',
      'Texture combined with accent lighting',
    ],
    highlights: [
      { title: 'Made to order', text: 'Pick a sample or a reference photo and we recreate it on your wall.' },
      { title: 'Skilled artisans', text: 'Texture work depends on craft – our team practises it daily.' },
      { title: 'Durable & washable', text: 'Sealed finishes that stay beautiful and are easy to maintain.' },
    ],
    gallery: [
      '1615971677499-5467cbab01c0',
      '1631679706909-1844bbd07221',
      '1615873968403-89e068629265',
      '1600210492486-724fe5c67fb0',
      '1616486338812-3dadae4b4ace',
    ],
    faqs: [
      {
        q: 'Can I see a sample before I decide?',
        a: 'Yes. We can prepare a small sample patch so you can judge the colour and texture in your own lighting.',
      },
      {
        q: 'Is textured paint hard to clean?',
        a: 'Most finishes are sealed and wipe clean with a soft cloth. We will advise on care for your chosen finish.',
      },
    ],
  },
  {
    slug: 'duco-painting',
    icon: 'duco',
    title: 'Duco Painting',
    short: 'Smooth, high-gloss spray finishes for furniture, doors, wardrobes and cabinetry.',
    image: '1600489000022-c2086d79f9d4',
    intro:
      'Duco (PU / lacquer) painting gives wood and board surfaces a mirror-smooth, high-gloss or matt finish in almost any colour – perfect for kitchens, wardrobes and doors.',
    offerings: [
      'Kitchen cabinets & wardrobes',
      'Doors, frames & panels',
      'Furniture & TV units',
      'High-gloss, semi-gloss & matt finishes',
      'Custom colour matching',
      'Re-finishing of old furniture',
    ],
    highlights: [
      { title: 'Glass-smooth finish', text: 'Multiple sanded coats sprayed in a controlled way for an even surface.' },
      { title: 'Any colour', text: 'Choose from a huge palette or match a sample you already have.' },
      { title: 'Durable surface', text: 'A hard-wearing coat that resists everyday knocks and stains.' },
    ],
    gallery: [
      '1600489000022-c2086d79f9d4',
      '1556912172-45b7abe8b7e1',
      '1595526114035-0d45ed16cfbf',
      '1556911220-bff31c812dba',
      '1565538810643-b5bdb714032a',
    ],
    faqs: [
      {
        q: 'Can old furniture be given a Duco finish?',
        a: 'Often yes. We strip, repair and prime the surface first so the new finish bonds well and looks new.',
      },
      {
        q: 'How long does Duco take to dry?',
        a: 'Each coat dries quickly, but the full process with sanding between coats takes a few days. We will give you a timeline after inspecting the work.',
      },
    ],
  },
  {
    slug: 'wood-polish-and-finishes',
    icon: 'wood',
    title: 'Wood Polish & Finishes',
    short: 'Polish, stain and protective coatings that bring out the grain and protect your woodwork.',
    image: '1556909172-54557c7e4fb7',
    intro:
      'Real wood deserves a finish that shows off its grain and protects it for years. We polish, stain and seal doors, furniture, flooring and panelling.',
    offerings: [
      'Door & window polish',
      'Furniture polishing & re-polishing',
      'Wooden flooring finishes',
      'Wood stains & natural shades',
      'PU & melamine finishes',
      'Restoration of faded or scratched wood',
    ],
    highlights: [
      { title: 'Grain-enhancing', text: 'Finishes chosen to highlight the natural character of the wood.' },
      { title: 'Protective coating', text: 'Sealed against moisture, stains and everyday wear.' },
      { title: 'Restoration expertise', text: 'We bring tired, scratched or faded wood back to life.' },
    ],
    gallery: [
      '1556909172-54557c7e4fb7',
      '1589939705384-5185137a7f0f',
      '1600607687939-ce8a6c25118c',
      '1540518614846-7eded433c457',
      '1600489000022-c2086d79f9d4',
    ],
    faqs: [
      {
        q: 'Can you change the colour of my wooden furniture?',
        a: 'Yes. We can strip the old finish and apply a new stain or polish in a darker, lighter or different tone.',
      },
      {
        q: 'How often does wood need to be re-polished?',
        a: 'It depends on use and exposure. Interior wood typically needs refreshing every few years; we will advise based on your pieces.',
      },
    ],
  },
  {
    slug: 'wallpaper-and-panelling',
    icon: 'wallpaper',
    title: 'Wallpaper & Panelling',
    short: 'Elegant wallpaper installation, wall panelling and modern interior wall finishes.',
    image: IMG.panelling,
    intro:
      'Add depth and personality to any room with beautifully installed wallpaper, textured panels and wooden wall panelling.',
    offerings: [
      'Wallpaper installation',
      'Textured & 3D wall panels',
      'Wooden & louvre wall panelling',
      'Fluted panels & feature walls',
      'Accent walls behind TV & beds',
      'Wall preparation, putty & finishing',
    ],
    highlights: [
      { title: 'Seamless pattern match', text: 'Careful alignment so patterns flow without visible joins.' },
      { title: 'Proper wall prep', text: 'Smooth, dry walls first – so the finish lasts.' },
      { title: 'Endless styles', text: 'Classic, floral, textured or modern – we help you choose.' },
    ],
    gallery: [
      '1615873968403-89e068629265',
      '1631679706909-1844bbd07221',
      '1600210492486-724fe5c67fb0',
      '1616486338812-3dadae4b4ace',
      '1600607687939-ce8a6c25118c',
    ],
    faqs: [
      {
        q: 'How long does wallpaper last?',
        a: 'With proper wall preparation and normal care, quality wallpaper stays fresh for many years.',
      },
      {
        q: 'Can panelling be combined with lighting?',
        a: 'Yes. We often integrate concealed LED strips with panelling for a warm, premium effect.',
      },
    ],
  },
  {
    slug: 'upvc-panelling',
    icon: 'upvc',
    title: 'UPVC Panelling',
    short: 'Durable, waterproof and low-maintenance UPVC panelling for walls and ceilings.',
    image: IMG.windows,
    intro:
      'UPVC panels are waterproof, termite-proof and easy to maintain – a smart choice for ceilings, bathrooms, kitchens and utility areas.',
    offerings: [
      'UPVC wall panelling',
      'UPVC ceiling panels',
      'Bathroom & kitchen cladding',
      'Balcony & utility area cladding',
      'UPVC partitions',
      'Repair & replacement of old panels',
    ],
    highlights: [
      { title: 'Waterproof', text: 'Resistant to moisture, so it stays smooth and clean.' },
      { title: 'Low maintenance', text: 'Wipe clean – no repainting, no termites.' },
      { title: 'Fast installation', text: 'Clean, quick fitting with minimal disruption.' },
    ],
    gallery: [
      '1560448204-e02f11c3d0e2',
      '1560185007-cde436f6a4d0',
      '1572120360610-d971b9d7767c',
      '1618221195710-dd6b41faaea6',
      '1600121848594-d8644e57abab',
    ],
    faqs: [
      {
        q: 'Is UPVC panelling suitable for bathrooms?',
        a: 'Yes. It is waterproof and does not warp or rot, which makes it ideal for humid areas.',
      },
      {
        q: 'How quickly can it be installed?',
        a: 'Most rooms are completed in a couple of days, depending on size and design.',
      },
    ],
  },
  {
    slug: 'waterproofing',
    icon: 'waterproofing',
    title: 'Waterproofing',
    short: 'Leak and dampness protection for terraces, roofs, walls, bathrooms and basements.',
    image: '1632759145351-1d592919f522',
    intro:
      'Water damage is easier and cheaper to prevent than to repair. We find the cause of leaks and dampness and seal your building against them.',
    offerings: [
      'Terrace & roof waterproofing',
      'Bathroom & balcony waterproofing',
      'Internal wall dampness treatment',
      'External wall & crack sealing',
      'Basement & water-tank waterproofing',
      'Leak inspection & diagnosis',
    ],
    highlights: [
      { title: 'Root-cause approach', text: 'We trace where the water is coming from instead of covering the symptom.' },
      { title: 'Quality systems', text: 'Proven coatings and membranes, applied by trained crews.' },
      { title: 'Tested on completion', text: 'Water-ponding tests on terraces and wet areas before handover.' },
    ],
    gallery: [
      '1632759145351-1d592919f522',
      '1584622650111-993a426fbf0a',
      '1600585154340-be6161a56a0c',
      '1507652313519-d4e9174996dd',
      '1600566753190-17f0baa2a6c3',
    ],
    faqs: [
      {
        q: 'How do I know if my wall or terrace needs waterproofing?',
        a: 'Peeling paint, damp patches, musty smells, efflorescence (white powder) and ceiling stains are common signs. A site inspection will confirm the cause.',
      },
      {
        q: 'Do you waterproof bathrooms before new tiling?',
        a: 'Yes. Waterproofing wet areas before tiles go down is the best time to do it, and we can combine it with our tiling and plumbing work.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
