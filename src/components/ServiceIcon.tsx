import {
  FaBolt,
  FaBorderAll,
  FaDroplet,
  FaFaucetDrip,
  FaHouseChimney,
  FaLayerGroup,
  FaPalette,
  FaPaintbrush,
  FaPaintRoller,
  FaScrewdriverWrench,
  FaSprayCan,
  FaTree,
} from 'react-icons/fa6';
import type { ServiceIconKey } from '@/data/services';

const map = {
  carpentry: FaScrewdriverWrench,
  electrical: FaBolt,
  tiles: FaLayerGroup,
  plumbing: FaFaucetDrip,
  wallpaper: FaPaintRoller,
  upvc: FaBorderAll,
  painting: FaPaintbrush,
  exterior: FaHouseChimney,
  duco: FaSprayCan,
  texture: FaPalette,
  wood: FaTree,
  waterproofing: FaDroplet,
} as const;

export default function ServiceIcon({ name }: { name: ServiceIconKey }) {
  const Icon = map[name];
  return <Icon aria-hidden="true" />;
}
