import { DiscoveredArtifact } from '@/types/team';
import { WheelCategory } from '@/types/question';

export interface ArtifactDefinition {
  id: string;
  name: string;
  type: string;
  era: string;
  categoryTag: WheelCategory;
  icon: string;
  description: string;
}

export const ARTIFACTS_CATALOG: ArtifactDefinition[] = [
  {
    id: "art_01",
    name: "Ashokan Edict Inscription",
    type: "Inscription",
    era: "c. 250 BCE",
    categoryTag: "sources",
    icon: "📜",
    description: "Carved into solid rock in Brahmi script, delivering Emperor Ashoka's royal message of Dhamma and peace directly to the people."
  },
  {
    id: "art_02",
    name: "Punch-Marked Silver Coin",
    type: "Coin",
    era: "c. 400 BCE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Ancient silver trade coin stamped with sun, tree, and hill symbols, showing early market exchange and metal skills."
  },
  {
    id: "art_03",
    name: "Harappan Terracotta Seal",
    type: "Seal",
    era: "c. 2500 BCE",
    categoryTag: "sources",
    icon: "🏺",
    description: "Square stone seal engraved with an animal and Harappan script, used by merchants to stamp bags of goods."
  },
  {
    id: "art_04",
    name: "Birch-Bark Manuscript",
    type: "Manuscript",
    era: "c. 1st Century CE",
    categoryTag: "sources",
    icon: "📑",
    description: "Ancient book carefully written by hand on layers of Himalayan birch bark (Bhurjapatra) with ink."
  },
  {
    id: "art_05",
    name: "Clay Timeline Tablet",
    type: "Tablet",
    era: "Ancient Mesopotamia",
    categoryTag: "timeline",
    icon: "🧱",
    description: "Baked clay tablet recording historical events, kings, and dates in chronological order."
  },
  {
    id: "art_06",
    name: "Arikamedu Roman Amphora Fragment",
    type: "Pottery",
    era: "c. 1st Century BCE",
    categoryTag: "connect-the-clues",
    icon: "🏺",
    description: "Broken pieces of a Roman wine jar found on the South Indian coast, proving sea trade with Rome."
  },
  {
    id: "art_07",
    name: "Bronze Dancing Figure",
    type: "Artifact",
    era: "c. 2300 BCE",
    categoryTag: "source-detective",
    icon: "🗽",
    description: "Famous bronze statue found at Mohenjo-daro, showing skilled metal-casting and artistic talent."
  },
  {
    id: "art_08",
    name: "Iron Pillar of Mehrauli",
    type: "Monument",
    era: "c. 400 CE",
    categoryTag: "sources",
    icon: "🏛️",
    description: "Over 1500-year-old iron pillar at Delhi that has stood in rain and sun without rusting away."
  },
  {
    id: "art_09",
    name: "Ancient World Map Scroll",
    type: "Map",
    era: "c. 150 CE",
    categoryTag: "what-can-we-know",
    icon: "🗺️",
    description: "Ancient world map showing how ancient travelers imagined continents, seas, and trade ports."
  },
  {
    id: "art_10",
    name: "Palm-Leaf Manuscript",
    type: "Manuscript",
    era: "c. 500 CE",
    categoryTag: "timeline",
    icon: "🌿",
    description: "Dried palm leaves tied with string, containing handwritten ancient knowledge and astronomical calculations."
  },
  {
    id: "art_11",
    name: "Gold Dinara of Chandragupta II",
    type: "Coin",
    era: "c. 380 CE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Pure gold coin showing Emperor Chandragupta II holding a bow, with Goddess Lakshmi on the reverse."
  },
  {
    id: "art_12",
    name: "Painted Grey Ware Pottery Bowl",
    type: "Pottery",
    era: "c. 1000 BCE",
    categoryTag: "before-or-after",
    icon: "🥣",
    description: "Fine grey clay bowl with painted black lines, used by early farming communities in northern India."
  },
  {
    id: "art_13",
    name: "Copper-Plate Land Grant Charter",
    type: "Inscription",
    era: "c. 600 CE",
    categoryTag: "connect-the-clues",
    icon: "📜",
    description: "Engraved copper plates joined with a royal seal ring, recording land grants and gifts from kings."
  },
  {
    id: "art_14",
    name: "Ancient Bead-Maker's Stone Drill",
    type: "Artifact",
    era: "c. 2400 BCE",
    categoryTag: "sources",
    icon: "💎",
    description: "Small stone drill used by craftspersons in Lothal to bore holes through shiny gemstone beads."
  },
  {
    id: "art_15",
    name: "Ivory Scale of Lothal",
    type: "Artifact",
    era: "c. 2200 BCE",
    categoryTag: "fix-the-timeline",
    icon: "📏",
    description: "Graduated measuring ruler made of ivory found at Lothal, showing standardized measurement units."
  },
  {
    id: "art_16",
    name: "Mesopotamian Lapis Lazuli Bead",
    type: "Artifact",
    era: "c. 2100 BCE",
    categoryTag: "history-blitz",
    icon: "🔷",
    description: "Bright blue gemstone bead traded from distant mines across ancient trade routes to royal cities."
  },
  {
    id: "art_17",
    name: "Monolithic Stupa Gateway Carving",
    type: "Monument",
    era: "c. 100 BCE",
    categoryTag: "source-detective",
    icon: "⛩️",
    description: "Intricately carved stone gateway of a Buddhist stupa showing scenes of ancient daily life and festivals."
  },
  {
    id: "art_18",
    name: "Royal Scribe's Inkpot & Stylus",
    type: "Artifact",
    era: "c. 700 CE",
    categoryTag: "timeline",
    icon: "🖋️",
    description: "Stone inkpot and reed pen used by ancient scribes to write royal chronicles and letters."
  },
  {
    id: "art_19",
    name: "Granary Foundation Brick",
    type: "Artifact",
    era: "c. 2600 BCE",
    categoryTag: "what-can-we-know",
    icon: "🧱",
    description: "Baked brick made with a standard ratio of 4:2:1, used to build granaries and planned houses in Harappa."
  },
  {
    id: "art_20",
    name: "Ancient Maritime Dockyard Bollard",
    type: "Monument",
    era: "c. 2300 BCE",
    categoryTag: "connect-the-clues",
    icon: "⚓",
    description: "Heavy stone anchor excavated at Lothal's dockyard, used to tie and secure sailing merchant ships."
  },
  {
    id: "art_21",
    name: "Silver Denarius of Augustus Caesar",
    type: "Coin",
    era: "c. 2 BCE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Silver coin of Roman Emperor Augustus found in India, proving trade of Indian spices for Roman coins."
  },
  {
    id: "art_22",
    name: "Terracotta Toy Cart with Wheels",
    type: "Artifact",
    era: "c. 2200 BCE",
    categoryTag: "sources",
    icon: "🛞",
    description: "Miniature clay ox-cart toy with wheels, showing how Harappan children played and traveled."
  },
  {
    id: "art_23",
    name: "Grand Pillar Capital of Sarnath",
    type: "Monument",
    era: "c. 250 BCE",
    categoryTag: "sources",
    icon: "🦁",
    description: "Polished sandstone pillar capital at Sarnath featuring four lions, adopted as India's national emblem."
  },
  {
    id: "art_24",
    name: "Ancient Astronomic Water Clock Fragment",
    type: "Artifact",
    era: "c. 300 BCE",
    categoryTag: "timeline",
    icon: "⏳",
    description: "Ancient bowl with a hole used to measure time by dripping water, an early water clock."
  }
];

export function getDiscoveryForCategory(category: WheelCategory, round: number): DiscoveredArtifact {
  const matches = ARTIFACTS_CATALOG.filter(a => a.categoryTag === category);
  const pool = matches.length > 0 ? matches : ARTIFACTS_CATALOG;
  const selected = pool[(round - 1) % pool.length];

  return {
    id: `${selected.id}_r${round}`,
    name: selected.name,
    type: selected.type,
    category: selected.categoryTag,
    era: selected.era,
    icon: selected.icon,
    description: selected.description,
    discoveredAtRound: round,
  };
}
