export type CategoryKey =
  | 'carpentry'
  | 'electrical'
  | 'tiles'
  | 'plumbing'
  | 'wallpaper'
  | 'upvc'
  | 'painting'
  | 'waterproofing'
  | 'cleaning';

export const categories: { key: CategoryKey; label: string }[] = [
  { key: 'carpentry', label: 'Wooden Work' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'tiles', label: 'Tiles & Marble' },
  { key: 'plumbing', label: 'Plumbing' },
  { key: 'painting', label: 'Painting & Textures' },
  { key: 'wallpaper', label: 'Wallpaper' },
  { key: 'upvc', label: 'UPVC' },
  { key: 'waterproofing', label: 'Waterproofing' },
  { key: 'cleaning', label: 'Deep Cleaning' },
];

export const categoryLabel = (key: CategoryKey) =>
  categories.find((c) => c.key === key)?.label ?? key;

export type GalleryItem = {
  id: string; // photo id – file in public/images/<id>.jpg
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
  { id: 'px-5691550', title: 'Windows & Frames', category: 'upvc' },
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
  { id: 'px-6284232', title: 'Wooden Wall Panelling – Bedroom', category: 'wallpaper' },
  { id: 'px-33419833', title: 'Floral Wallpaper', category: 'wallpaper' },
  { id: 'px-3612406', title: 'UPVC Wall Cladding', category: 'upvc' },
  { id: 'px-5841908', title: 'Grooved Panel Finish', category: 'upvc' },
  { id: '1589939705384-5185137a7f0f', title: 'Workshop Joinery', category: 'carpentry' },
  { id: '1560448204-e02f11c3d0e2', title: 'Bright Open-Plan Living', category: 'upvc' },
  { id: '1556912172-45b7abe8b7e1', title: 'White Modular Kitchen', category: 'carpentry' },
  { id: '1540518614846-7eded433c457', title: 'Serene Bedroom', category: 'carpentry' },
  { id: '1616486338812-3dadae4b4ace', title: 'Neutral Lounge', category: 'wallpaper' },
  { id: 'px-7218579', title: 'Fresh Interior Painting', category: 'painting' },
  { id: '1615971677499-5467cbab01c0', title: 'Navy Accent Wall', category: 'painting' },
  { id: 'px-31544574', title: 'Exterior Facade Finish', category: 'painting' },
  { id: '1562259949-e8e7689d7828', title: 'Colour Application', category: 'painting' },
  { id: 'px-5777354', title: 'Waterproof Coating on Slab', category: 'waterproofing' },
  { id: '1632759145351-1d592919f522', title: 'Roof Leak Inspection', category: 'waterproofing' },
  { id: 'px-5691521', title: 'Window Frame Installation', category: 'upvc' },
  { id: 'px-5691544', title: 'Window Fitting & Drilling', category: 'upvc' },
  { id: 'px-8488029', title: 'Junction Box Wiring', category: 'electrical' },
  { id: 'px-28265032', title: 'Distribution Panel Wiring', category: 'electrical' },
  { id: 'px-18861859', title: 'Tile Setting & Layout', category: 'tiles' },
  { id: 'px-18764900', title: 'Patterned Floor Tiles', category: 'tiles' },
  { id: 'px-6419128', title: 'Pipe Fitting Work', category: 'plumbing' },
  { id: 'px-29226620', title: 'Pipework & Radiator Connection', category: 'plumbing' },
  { id: 'px-5493653', title: 'Ceiling & Wall Painting', category: 'painting' },
  { id: 'px-6474471', title: 'Interior Wall Roller Painting', category: 'painting' },
  { id: 'px-1917849', title: 'House Exterior Painting', category: 'painting' },
  { id: 'px-32009173', title: 'Facade Painting on Rope Access', category: 'painting' },
  { id: 'px-7493873', title: 'Spray Finish for Wood Panels', category: 'painting' },
  { id: 'px-1939485', title: 'Swirl Texture Wall Finish', category: 'painting' },
  { id: 'px-1774986', title: 'Trowel Texture Finish', category: 'painting' },
  { id: 'px-5974350', title: 'Hand Varnishing Woodwork', category: 'carpentry' },
  { id: 'px-5710754', title: 'Wood Sanding & Finishing', category: 'carpentry' },
  { id: 'px-2708106', title: 'Built-in Wardrobe', category: 'carpentry' },
  { id: 'px-5493673', title: 'Wall Surface Preparation', category: 'wallpaper' },
  { id: 'px-35570308', title: 'Wall Repair & Re-plastering', category: 'waterproofing' },
  { id: '1581578731548-c64695cc6952', title: 'Window & Shutter Cleaning', category: 'cleaning' },
  { id: '1628177142898-93e36e4e3a50', title: 'Surface Sanitising', category: 'cleaning' },
  { id: '1558317374-067fb5f30001', title: 'Floor & Carpet Cleaning', category: 'cleaning' },
  { id: '1527515637462-cff94eecc1ac', title: 'Deep Vacuuming', category: 'cleaning' },
];

/** Featured projects shown on the Projects page (placeholder descriptions). */
export const projects: GalleryItem[] = [
  // ── Carpentry ──
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
    id: 'px-2708106',
    title: 'Built-in Bedroom Wardrobe',
    category: 'carpentry',
    location: 'Gurugram',
    description:
      'Floor-to-ceiling three-door wardrobe, built to measure with sturdy handles and a clean flush finish.',
    scope: ['Wardrobes', 'Custom furniture', 'Hardware fitting'],
  },
  {
    id: 'px-5974350',
    title: 'Hand-Finished Woodwork',
    category: 'carpentry',
    location: 'Faridabad',
    description:
      'Solid-wood joinery finished by hand with a clear protective coat that brings out the grain.',
    scope: ['Joinery', 'Sanding', 'Clear finish'],
  },
  {
    id: '1556912172-45b7abe8b7e1',
    title: 'White Modular Kitchen with Island',
    category: 'carpentry',
    location: 'Delhi',
    description:
      'Handleless white cabinets, a stone-top island and warm timber stools in an open-plan kitchen.',
    scope: ['Modular cabinets', 'Island unit', 'Hardware fitting'],
  },
  {
    id: 'px-5710754',
    title: 'Panel Sanding & Surface Prep',
    category: 'carpentry',
    location: 'Gurugram',
    description:
      'Orbital sanding brings custom panels to a smooth, even surface before the final finish goes on.',
    scope: ['Sanding', 'Surface prep', 'Finishing'],
  },
  {
    id: '1589939705384-5185137a7f0f',
    title: 'On-Site Timber Joinery',
    category: 'carpentry',
    location: 'Faridabad',
    description:
      'Beams and boards measured, cut and joined on site with power tools and proper safety gear.',
    scope: ['Cutting', 'Joinery', 'Assembly'],
  },
  {
    id: '1556909172-54557c7e4fb7',
    title: 'Timber & Tile Kitchen',
    category: 'carpentry',
    location: 'Gurugram',
    description:
      'Timber worktops, open shelving and a tiled backsplash for a warm, farmhouse-style kitchen.',
    scope: ['Timber worktop', 'Shelving', 'Tiling'],
  },
  // ── Electrical ──
  {
    id: 'px-28265032',
    title: 'Distribution Panel Rewiring',
    category: 'electrical',
    location: 'Delhi',
    description:
      'Main distribution panel rewired with neatly routed cables, labelled circuits and individual meters.',
    scope: ['Rewiring', 'MCBs & meters', 'Circuit labelling'],
  },
  {
    id: 'px-8488029',
    title: 'Concealed Junction Box Wiring',
    category: 'electrical',
    location: 'Gurugram',
    description:
      'Concealed wiring with properly joined connections in a junction box during a full-home rewire.',
    scope: ['Concealed wiring', 'Junction boxes', 'Safety checks'],
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
    id: '1621905251189-08b45d6a269e',
    title: 'Meter & Switchgear Installation',
    category: 'electrical',
    location: 'Gurugram',
    description:
      'Electrician fitting and testing meters and switchgear with insulated gloves and correct ratings.',
    scope: ['Meters', 'Switchgear', 'Testing'],
  },
  {
    id: '1600121848594-d8644e57abab',
    title: 'Living Room Lighting Layout',
    category: 'electrical',
    location: 'Delhi',
    description:
      'Ceiling, lamp and cove points planned together so every corner of the room is evenly lit.',
    scope: ['Lighting plan', 'Wiring', 'Switches'],
  },
  // ── Tiles & Marble ──
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
    id: '1523413651479-597eb2da0ad6',
    title: 'Subway Tile Kitchen Splash',
    category: 'tiles',
    location: 'Gurugram',
    description:
      'Classic white metro tiles with neat grouting, finished with a polished chrome mixer tap.',
    scope: ['Tiling', 'Plumbing'],
  },
  {
    id: 'px-18861859',
    title: 'Patterned Floor Tile Laying',
    category: 'tiles',
    location: 'Gurugram',
    description:
      'Decorative patterned tiles laid with levelled joints, using spacers, trowels and a rubber mallet on site.',
    scope: ['Floor tiling', 'Levelling', 'Grouting'],
  },
  {
    id: 'px-18764900',
    title: 'Patterned Cement-Tile Floor',
    category: 'tiles',
    location: 'Delhi',
    description:
      'Vibrant patterned floor tiles laid in a repeating design with tight, even joints.',
    scope: ['Floor tiling', 'Pattern layout', 'Grouting'],
  },
  {
    id: '1507652313519-d4e9174996dd',
    title: 'Spa-Style Bathroom Surfaces',
    category: 'tiles',
    location: 'Gurugram',
    description:
      'Textured wall finish, pebble floor and a freestanding tub for a calm, spa-like bathroom.',
    scope: ['Wall finish', 'Tiling', 'Fittings'],
  },
  // ── Plumbing ──
  {
    id: 'px-6419128',
    title: 'Concealed Pipe Fitting',
    category: 'plumbing',
    location: 'Delhi',
    description:
      'Steel supply lines fitted and joined by hand, then pressure-tested before the walls are closed.',
    scope: ['Pipe work', 'Joints & fittings', 'Pressure test'],
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
    id: '1585704032915-c3400ca199e7',
    title: 'Bath Tap & Shower Fittings',
    category: 'plumbing',
    location: 'Gurugram',
    description:
      'Chrome tap and hand-shower set fitted, sealed and leak-tested.',
    scope: ['Fittings', 'Sealing', 'Leak test'],
  },
  {
    id: 'px-29226620',
    title: 'Radiator Pipework Connection',
    category: 'plumbing',
    location: 'Delhi',
    description:
      'Pipe joints tightened and connected to a radiator with the right tools and sealant.',
    scope: ['Pipework', 'Joints', 'Pressure test'],
  },
  {
    id: '1558618666-fcd25c85cd64',
    title: 'Soldered Pipe Joints',
    category: 'plumbing',
    location: 'Faridabad',
    description:
      'Pipe joints soldered by hand for strong, leak-free connections.',
    scope: ['Soldering', 'Joints', 'Testing'],
  },
  // ── Painting & Textures ──
  {
    id: 'px-5493653',
    title: 'Whole-Home Interior Repaint',
    category: 'painting',
    location: 'Gurugram',
    description:
      'Walls and ceilings prepared, primed and rolled with a smooth, even coat in a fully protected home.',
    scope: ['Surface preparation', 'Primer', 'Emulsion finish'],
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
    id: 'px-32009173',
    title: 'Weather-Ready Facade Repaint',
    category: 'painting',
    location: 'Delhi',
    description:
      'Exterior walls repainted with a weather-resistant finish, with the crew working safely on ropes and scaffolding.',
    scope: ['Surface repair', 'Exterior painting', 'Safe access'],
  },
  {
    id: 'px-7218579',
    title: 'Masked-Edge Wall Painting',
    category: 'painting',
    location: 'Gurugram',
    description:
      'Walls masked with tape for sharp, clean edges before the roller goes on.',
    scope: ['Masking', 'Rolling', 'Clean edges'],
  },
  {
    id: 'px-6474471',
    title: 'Roller Painting on Fresh Plaster',
    category: 'painting',
    location: 'Delhi',
    description:
      'First coat rolled over freshly plastered walls and ceiling in an empty room.',
    scope: ['Primer', 'Rolling', 'Ceiling'],
  },
  {
    id: 'px-1917849',
    title: 'House Exterior Repaint',
    category: 'painting',
    location: 'Sohna',
    description:
      'Ladder-reach painting of the exterior walls with a durable, weather-resistant coat.',
    scope: ['Surface prep', 'Exterior paint', 'Ladder access'],
  },
  {
    id: 'px-7493873',
    title: 'Spray Finish for Wood Panels',
    category: 'painting',
    location: 'Faridabad',
    description:
      'Duco spray finish applied in a protective suit for a smooth, mirror-like surface.',
    scope: ['Duco spray', 'Sanding', 'Protection'],
  },
  {
    id: 'px-1939485',
    title: 'Swirl Texture Wall Finish',
    category: 'painting',
    location: 'Gurugram',
    description:
      'A hand-worked swirl texture that gives a plain wall depth and character.',
    scope: ['Texture', 'Sealing', 'Finishing'],
  },
  // ── Wallpaper & Panelling ──
  {
    id: 'px-6284232',
    title: 'Wooden Wall Panelling – Bedroom',
    category: 'wallpaper',
    location: 'Gurugram',
    description:
      'Warm wood wall panels behind the bed, fitted flush to the ceiling with space for reading lights.',
    scope: ['Wall preparation', 'Wall panelling', 'Light points'],
  },
  {
    id: 'px-33419833',
    title: 'Floral Wallpaper Feature Wall',
    category: 'wallpaper',
    location: 'Faridabad',
    description:
      'Patterned wallpaper hung with matched seams on a prepared, smooth wall for a classic feature look.',
    scope: ['Wall preparation', 'Wallpaper', 'Pattern matching'],
  },
  {
    id: '1600607687939-ce8a6c25118c',
    title: 'Timber Feature Wall – Lounge',
    category: 'wallpaper',
    location: 'Gurugram',
    description:
      'A timber-clad feature wall beside the lounge, paired with a stone panel and clean lines.',
    scope: ['Wall panelling', 'Timber cladding', 'Finishing'],
  },
  {
    id: '1631679706909-1844bbd07221',
    title: 'Feature Wall & Mirrors',
    category: 'wallpaper',
    location: 'Gurugram',
    description:
      'Textured wall finish with decorative mirrors and a warm accent wall behind the sofa.',
    scope: ['Wall preparation', 'Wall finish', 'Mirrors'],
  },
  {
    id: 'px-5493673',
    title: 'Wall Boarding for Wallpaper & Panels',
    category: 'wallpaper',
    location: 'Faridabad',
    description:
      'Boards fitted and finished smooth so wallpaper and wall panels sit flat with no visible joins.',
    scope: ['Wall boarding', 'Putty & levelling', 'Wall finish'],
  },
  {
    id: '1615873968403-89e068629265',
    title: 'Deep Green Feature Wall',
    category: 'wallpaper',
    location: 'Delhi',
    description:
      'A rich green accent wall with framed art, prepared and finished for a bold statement look.',
    scope: ['Wall preparation', 'Accent finish', 'Styling'],
  },
  // ── UPVC ──
  {
    id: 'px-5691521',
    title: 'Villa Window Replacement',
    category: 'upvc',
    location: 'Sohna',
    description:
      'Old frames removed and new low-maintenance windows fitted, levelled and fixed across the house.',
    scope: ['Window fitting', 'Frame fixing', 'Finishing'],
  },
  {
    id: 'px-3612406',
    title: 'UPVC Exterior Wall Cladding',
    category: 'upvc',
    location: 'Delhi',
    description:
      'Low-maintenance horizontal panel cladding over the exterior walls, finished around new window frames.',
    scope: ['Wall cladding', 'Window frames', 'Finishing'],
  },
  {
    id: 'px-5841908',
    title: 'Grooved Panel Finish',
    category: 'upvc',
    location: 'Delhi',
    description:
      'Grooved wall panels fitted edge to edge for a clean, waterproof, easy-wipe surface.',
    scope: ['Panel fitting', 'Waterproof finish', 'Trim'],
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
    id: 'px-5691550',
    title: 'Window Frame Fitting',
    category: 'upvc',
    location: 'Gurugram',
    description:
      'Frame drilled, levelled and fixed into the wall opening for a tight, draught-free fit.',
    scope: ['Frame fixing', 'Levelling', 'Sealing'],
  },
  // ── Waterproofing ──
  {
    id: 'px-5777354',
    title: 'Terrace Slab Waterproof Coating',
    category: 'waterproofing',
    location: 'Gurugram',
    description:
      'Slab cleaned and a liquid waterproof coat brushed across the surface to stop seepage into the rooms below.',
    scope: ['Surface cleaning', 'Waterproof coating', 'Ponding test'],
  },
  {
    id: '1632759145351-1d592919f522',
    title: 'Roof Leak Inspection',
    category: 'waterproofing',
    location: 'Gurugram',
    description:
      'Roof edge and joints inspected to trace the source of leaks before sealing and recoating.',
    scope: ['Leak inspection', 'Crack sealing', 'Diagnosis'],
  },
  {
    id: 'px-35570308',
    title: 'Wall Seepage Repair & Re-plastering',
    category: 'waterproofing',
    location: 'Delhi',
    description:
      'Damp, damaged plaster stripped back and redone, then sealed and recoated to stop moisture returning.',
    scope: ['Plaster removal', 'Re-plastering', 'Sealing'],
  },
  // ── Deep Cleaning ──
  {
    id: '1581578731548-c64695cc6952',
    title: 'Post-Renovation Window Cleaning',
    category: 'cleaning',
    location: 'Gurugram',
    description:
      'Windows, frames and shutters scrubbed clean of paint splashes and dust once the renovation was complete.',
    scope: ['Window & frame cleaning', 'Paint-mark removal', 'Dust clearing'],
  },
  {
    id: '1628177142898-93e36e4e3a50',
    title: 'Surface Sanitising & Wipe-Down',
    category: 'cleaning',
    location: 'Gurugram',
    description:
      'Tables, counters and wooden surfaces treated with cleaner and wiped down for a fresh, hygienic finish.',
    scope: ['Surface cleaning', 'Sanitising', 'Wipe-down'],
  },
  {
    id: '1558317374-067fb5f30001',
    title: 'Floor & Carpet Deep Clean',
    category: 'cleaning',
    location: 'Delhi',
    description:
      'Hard floors and carpets vacuumed and cleaned thoroughly, including the edges and under the furniture.',
    scope: ['Floor scrubbing', 'Carpet vacuuming', 'Under-furniture cleaning'],
  },
  {
    id: '1527515637462-cff94eecc1ac',
    title: 'Deep Vacuuming Service',
    category: 'cleaning',
    location: 'Delhi',
    description:
      'Heavy-duty vacuuming to lift dust, debris and trapped dirt from rugs and soft flooring.',
    scope: ['Deep vacuuming', 'Debris removal', 'Rug cleaning'],
  },
];
