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
    description: "Carved into solid rock in Brahmi script, delivering royal moral edicts and administrative messages directly to the populace."
  },
  {
    id: "art_02",
    name: "Punch-Marked Silver Karshapana",
    type: "Coin",
    era: "c. 400 BCE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Ancient metallic trade currency stamped with sun, tree, and hill symbols, revealing market exchange and metallurgical skills."
  },
  {
    id: "art_03",
    name: "Harappan Terracotta Seal",
    type: "Seal",
    era: "c. 2500 BCE",
    categoryTag: "sources",
    icon: "🏺",
    description: "Square steatite seal engraved with a one-horned animal and undeciphered script, used to seal cargo bundles in ancient trade."
  },
  {
    id: "art_04",
    name: "Birch-Bark Buddhist Manuscript",
    type: "Manuscript",
    era: "c. 1st Century CE",
    categoryTag: "sources",
    icon: "📑",
    description: "Carefully inscribed on layers of Himalayan birch bark (Bhurjapatra), preserving philosophical discourses across generations."
  },
  {
    id: "art_05",
    name: "Clay Timeline Tablet",
    type: "Tablet",
    era: "Ancient Mesopotamia",
    categoryTag: "timeline",
    icon: "🧱",
    description: "Baked cuneiform tablet chronicling dynastic rulers, foundation years, and astronomical observations in exact chronological order."
  },
  {
    id: "art_06",
    name: "Arikamedu Roman Amphora Fragment",
    type: "Pottery",
    era: "c. 1st Century BCE",
    categoryTag: "connect-the-clues",
    icon: "🏺",
    description: "Ceramic Mediterranean wine jar shards unearthed on the Coromandel Coast, concrete proof of bustling Indo-Roman maritime commerce."
  },
  {
    id: "art_07",
    name: "Bronze Dancing Figure",
    type: "Artifact",
    era: "c. 2300 BCE",
    categoryTag: "source-detective",
    icon: "🗽",
    description: "Cast using the lost-wax technique in Mohenjo-daro, displaying sophisticated metallurgy and artistic posture."
  },
  {
    id: "art_08",
    name: "Iron Pillar of Mehrauli",
    type: "Monument",
    era: "c. 400 CE",
    categoryTag: "sources",
    icon: "🏛️",
    description: "Rust-resistant metallurgical marvel bearing Sanskrit poetic inscriptions dedicated to King Chandra."
  },
  {
    id: "art_09",
    name: "Ptolemaic World Map Scroll",
    type: "Map",
    era: "c. 150 CE",
    categoryTag: "what-can-we-know",
    icon: "🗺️",
    description: "Early cartographic projection showing how Mediterranean geographers visualized oceans, mountain ranges, and trade ports."
  },
  {
    id: "art_10",
    name: "Palm-Leaf Astronomical Treatise",
    type: "Manuscript",
    era: "c. 500 CE",
    categoryTag: "timeline",
    icon: "🌿",
    description: "Dried palm leaves bound with cord, recording solar eclipses and planetary alignments calculated by ancient astronomers."
  },
  {
    id: "art_11",
    name: "Gold Dinara of Chandragupta II",
    type: "Coin",
    era: "c. 380 CE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Pure gold coin depicting the emperor holding a bow with Goddess Lakshmi seated on a lotus on the reverse."
  },
  {
    id: "art_12",
    name: "Painted Grey Ware Pottery Bowl",
    type: "Pottery",
    era: "c. 1000 BCE",
    categoryTag: "before-or-after",
    icon: "🥣",
    description: "Fine grey tableware with geometric black painted designs, used by early Iron Age farming communities in the Indo-Gangetic divide."
  },
  {
    id: "art_13",
    name: "Copper-Plate Land Grant Charter",
    type: "Inscription",
    era: "c. 600 CE",
    categoryTag: "connect-the-clues",
    icon: "📜",
    description: "Engraved copper plates fastened with a royal seal ring, recording village boundaries, tax exemptions, and dynastic lineage."
  },
  {
    id: "art_14",
    name: "Ancient Bead-Maker's Stone Drill",
    type: "Artifact",
    era: "c. 2400 BCE",
    categoryTag: "sources",
    icon: "💎",
    description: "Ergonomic chert drill used in Lothal workshops to perforate delicate carnelian and agate gemstone beads."
  },
  {
    id: "art_15",
    name: "Ivory Scale of Lothal",
    type: "Artifact",
    era: "c. 2200 BCE",
    categoryTag: "fix-the-timeline",
    icon: "📏",
    description: "Graduated measuring ruler with millimeter-level divisions, demonstrating standardized weights and measures in urban planning."
  },
  {
    id: "art_16",
    name: "Mesopotamian Lapis Lazuli Bead",
    type: "Artifact",
    era: "c. 2100 BCE",
    categoryTag: "history-blitz",
    icon: "🔷",
    description: "Brilliant ultramarine gemstone mined in Badakhshan and traded across Zagros mountains to Sumerian temples."
  },
  {
    id: "art_17",
    name: "Monolithic Stupa Gateway Carving",
    type: "Monument",
    era: "c. 100 BCE",
    categoryTag: "source-detective",
    icon: "⛩️",
    description: "Intricately sculpted sandstone Torana depicting continuous narrative scenes of daily life, pilgrims, and flora."
  },
  {
    id: "art_18",
    name: "Royal Chronicler's Inkpot & Stylus",
    type: "Artifact",
    era: "c. 700 CE",
    categoryTag: "timeline",
    icon: "🖋️",
    description: "Stone inkwell and reed stylus used by court scribes to record genealogies and royal administrative decrees."
  },
  {
    id: "art_19",
    name: "Granary Foundation Brick",
    type: "Artifact",
    era: "c. 2600 BCE",
    categoryTag: "what-can-we-know",
    icon: "🧱",
    description: "Kiln-baked brick fired with strict 4:2:1 ratio proportions, illustrating disciplined civic masonry and grain management."
  },
  {
    id: "art_20",
    name: "Ancient Maritime Dockyard Bollard",
    type: "Monument",
    era: "c. 2300 BCE",
    categoryTag: "connect-the-clues",
    icon: "⚓",
    description: "Heavy stone anchor stone with boreholes excavated at Lothal tidal basin, designed to secure oceanic merchant vessels."
  },
  {
    id: "art_21",
    name: "Silver Denarius of Augustus Caesar",
    type: "Coin",
    era: "c. 2 BCE",
    categoryTag: "source-detective",
    icon: "🪙",
    description: "Found in Tamil Nadu hoard alongside local coins, documenting international luxury pepper and silk exchange."
  },
  {
    id: "art_22",
    name: "Terracotta Toy Cart with Wheels",
    type: "Artifact",
    era: "c. 2200 BCE",
    categoryTag: "sources",
    icon: "🛞",
    description: "Miniature ceramic ox-cart showing how ancient children played and revealing early vehicular technology."
  },
  {
    id: "art_23",
    name: "Grand Pillar Capital of Sarnath",
    type: "Monument",
    era: "c. 250 BCE",
    categoryTag: "sources",
    icon: "🦁",
    description: "Polished Chunar sandstone featuring four back-to-back lions and the Dharmachakra, symbol of sovereign righteousness."
  },
  {
    id: "art_24",
    name: "Ancient Astronomic Water Clock Fragment",
    type: "Artifact",
    era: "c. 300 BCE",
    categoryTag: "timeline",
    icon: "⏳",
    description: "Calibrated Clepsydra bowl with orifice indicating precise nocturnal hours for astronomical calculation."
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
