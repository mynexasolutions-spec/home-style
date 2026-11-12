/** Photo ids used across the site (files live in /public/images). */
export const IMG = {
  heroLiving: '1618221195710-dd6b41faaea6',
  carpenter: '1589939705384-5185137a7f0f',
  electrician: '1621905251189-08b45d6a269e',
  bathroomGlass: '1584622650111-993a426fbf0a',
  bathroomTub: '1507652313519-d4e9174996dd',
  tap: '1585704032915-c3400ca199e7',
  plumber: '1558618666-fcd25c85cd64',
  kitchenSink: '1565538810643-b5bdb714032a',
  panelling: '1600607687939-ce8a6c25118c',
  windows: '1560448204-e02f11c3d0e2',
  kitchenIsland: '1600585152220-90363fe7e115',
  drill: '1504148455328-c376907d081c',
  plans: '1503387762-592deb58ef4e',
  blueprint: '1581092160562-40aa08e78837',
  kitchenWhite: '1556911220-bff31c812dba',
  kitchenModular: '1556912172-45b7abe8b7e1',
  livingGreen: '1615873968403-89e068629265',
  bedroom: '1540518614846-7eded433c457',
  sofa: '1493663284031-b7e3aefcae8e',
  chair: '1567538096630-e0c55bd6374c',
  ctaLiving: '1616486338812-3dadae4b4ace',
  paintRoller: '1562259949-e8e7689d7828',
  exterior: '1600585154340-be6161a56a0c',
  livingNeutral: '1631679706909-1844bbd07221',
} as const;

/**
 * Resolves a photo id to its self-hosted file in /public/images.
 * - `px-<number>` → Pexels photo (free licence, no attribution required)
 * - anything else → Unsplash photo id (Unsplash licence)
 * Files are stored as `<id>.jpg` (1600px wide); next/image resizes them per screen.
 * To add a photo: save it as public/images/<id>.jpg and use <id> here or in the data files.
 */
export const photoUrl = (id: string) => `/images/${id}.jpg`;
