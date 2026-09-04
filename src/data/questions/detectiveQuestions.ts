import { SourceDetectiveQuestion } from '@/types/question';

export const DETECTIVE_QUESTIONS: SourceDetectiveQuestion[] = [
  {
    id: "det_001",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Ancient Silver Coin with a Royal Portrait and Greek Inscriptions",
      sourceType: "Coin",
      icon: "🪙",
      eraOrContext: "Northwest India, c. 150 BCE (Indo-Greek King Menander)",
      visualDescription: "A circular silver coin featuring the helmeted bust of a king on the obverse, surrounded by Greek letters, and an image of Goddess Athena holding a thunderbolt with Kharosthi script on the reverse.",
      badgeColor: "border-amber-400 bg-amber-50"
    },
    question: "What does this coin most directly prove to a historian studying this era?",
    options: [
      "There was cultural and political contact between Greek and Indian traditions in the northwest",
      "All citizens in ancient India spoke only ancient Greek as their home language",
      "Silver was the only metal ever mined on the entire Indian subcontinent",
      "The ancient people had electronic banking machines in their city squares"
    ],
    correctAnswer: "There was cultural and political contact between Greek and Indian traditions in the northwest",
    explanation: "The presence of both Greek and Kharosthi scripts alongside Greek and Indian motifs on official currency directly proves intercultural interaction and bilingual administrative rule.",
    deductionGuide: "Look at the dual scripts and artistic symbols on opposite faces of the coin."
  },
  {
    id: "det_002",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Ashokan Rock Edict Carved on a Mountain Cliff",
      sourceType: "Inscription",
      icon: "📜",
      eraOrContext: "Junagadh, Gujarat, c. 250 BCE",
      visualDescription: "Deeply chiselled lines of Brahmi script cut into the smooth granite face of a massive boulder, speaking directly of Dhamma, medical treatment for humans and animals, and planting shade trees along roads.",
      badgeColor: "border-stone-400 bg-stone-50"
    },
    question: "Why would an emperor carve proclamations into solid rock cliffs beside major travel highways?",
    options: [
      "To ensure royal messages remained permanent and visible to travelers and merchants passing through",
      "Because the emperor ran out of all tree leaves and animal skins in the empire",
      "To secretly hide the messages so no ordinary person could ever read them",
      "To decorate the mountain for an athletic tournament"
    ],
    correctAnswer: "To ensure royal messages remained permanent and visible to travelers and merchants passing through",
    explanation: "Carving into rock along busy trade routes guaranteed high public visibility, durability against weathering, and widespread communication across imperial provinces.",
    deductionGuide: "Think about the durability of stone and the location of major roads."
  },
  {
    id: "det_003",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Terracotta Female Figurine with Elaborate Headgear",
      sourceType: "Artifact",
      icon: "🏺",
      eraOrContext: "Mohenjo-daro, Indus Valley, c. 2400 BCE",
      visualDescription: "Hand-modelled baked clay figure adorned with heavy bead necklaces, a fan-shaped headdress with pannier cups, and bangles covering both arms.",
      badgeColor: "border-orange-400 bg-orange-50"
    },
    question: "What can a historian reasonably infer from this small terracotta sculpture?",
    options: [
      "Harappan craftspeople had skilled pottery techniques and wore distinctive ornaments and hairstyles",
      "The figurine records the exact constitution and written laws of the city",
      "The Indus Valley people only worshipped modern deities whose names we know",
      "Every single citizen in Harappa was required to wear identical terracotta hats"
    ],
    correctAnswer: "Harappan craftspeople had skilled pottery techniques and wore distinctive ornaments and hairstyles",
    explanation: "Sculptures and figurines illustrate attire, jewelry styles, personal adornment, and the kiln-firing mastery of ancient craft communities.",
    deductionGuide: "Observe the clay craftsmanship, ornaments, and headdress."
  },
  {
    id: "det_004",
    category: "source-detective",
    type: "source-detective",
    difficulty: "challenge",
    points: 15,
    source: {
      title: "Excavated Tidal Dockyard Basin with Sluice Gates",
      sourceType: "Monument",
      icon: "⚓",
      eraOrContext: "Lothal, Gujarat, c. 2200 BCE",
      visualDescription: "A massive trapezoidal brick basin measuring 214 x 36 meters, engineered with a water inlet channel connected to the ancient Sabarmati river, overflow spillways, and kiln-burnt waterproof bricks.",
      badgeColor: "border-blue-400 bg-blue-50"
    },
    question: "What does this monumental dockyard prove about the Indus Valley civilization?",
    options: [
      "They possessed sophisticated civil engineering knowledge and engaged in overseas maritime trade",
      "They built the first steam-powered passenger cruise ships in world history",
      "The city had no access to rivers or oceans and was located in the high Himalayas",
      "They only grew rice and never traded with any outside regions"
    ],
    correctAnswer: "They possessed sophisticated civil engineering knowledge and engaged in overseas maritime trade",
    explanation: "A brick-lined tidal dockyard with locks and sluices demonstrates understanding of tides, hydro-engineering, and active sea trade connecting with the Persian Gulf.",
    deductionGuide: "Analyze the connection between the brick basin, tidal water, and merchant shipping."
  },
  {
    id: "det_005",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "A Rusted Iron Ploughshare Unearthed in a Gangetic Settlement",
      sourceType: "Artifact",
      icon: "⛏️",
      eraOrContext: "Atranjikhera, c. 800 BCE",
      visualDescription: "A heavy, pointed triangular wedge made of smelted iron, designed to be fitted onto a wooden plough to turn heavy, alluvial soils.",
      badgeColor: "border-stone-500 bg-stone-100"
    },
    question: "How did the introduction of iron ploughshares transform ancient societies in the Ganga Valley?",
    options: [
      "It enabled farmers to break hard clay soil and clear dense forests, dramatically increasing agricultural food production",
      "It caused all farming to stop completely as people switched to stone hunting",
      "It was used exclusively as musical instruments during royal banquets",
      "It proved that electricity was used to power farm tractors in 800 BCE"
    ],
    correctAnswer: "It enabled farmers to break hard clay soil and clear dense forests, dramatically increasing agricultural food production",
    explanation: "Iron tools were harder and sharper than bronze or stone. Iron axes cleared dense forests, and iron ploughshares cut deep into fertile soil, producing crop surpluses that supported towns.",
    deductionGuide: "Connect the strength of iron metal to farming productivity."
  },
  {
    id: "det_006",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Steatite Seal Depicting a Bull and Harappan Symbols",
      sourceType: "Seal",
      icon: "🦬",
      eraOrContext: "Harappa, c. 2300 BCE",
      visualDescription: "A 3x3 cm polished stone seal with a relief carving of a humped zebu bull standing before a manger, topped by a row of distinct pictographic signs.",
      badgeColor: "border-yellow-500 bg-yellow-50"
    },
    question: "Why do historians believe these seals were pressed into wet clay stamped onto merchant cargo bundles?",
    options: [
      "Clay impressions with seal marks on one side and woven rope marks on the reverse have been excavated",
      "The ancient seals contain English instructions explaining how to mail packages",
      "Seals were made to be eaten as food during long ocean voyages",
      "Kings used seals only to play board games with their children"
    ],
    correctAnswer: "Clay impressions with seal marks on one side and woven rope marks on the reverse have been excavated",
    explanation: "Archaeologists found clay tags (sealings) bearing the impression of the seal on one side and the texture of hemp cloth/ropes on the other, proving they authenticated cargo packages.",
    deductionGuide: "Notice the physical evidence of clay tags attached to sacks."
  },
  {
    id: "det_007",
    category: "source-detective",
    type: "source-detective",
    difficulty: "challenge",
    points: 15,
    source: {
      title: "Burial Site with Pottery Pots and Polished Stone Axes",
      sourceType: "Artifact",
      icon: "🏺",
      eraOrContext: "Burzahom, Kashmir, c. 2500 BCE",
      visualDescription: "An excavated subterranean pit burial where a human skeleton was laid with grey pottery vessels containing grains and polished stone celts.",
      badgeColor: "border-stone-400 bg-stone-50"
    },
    question: "What conclusion about the community's beliefs does this archaeological burial most strongly support?",
    options: [
      "They believed in an afterlife and provided provisions and tools for the deceased person's journey",
      "They had no respect for the deceased and disposed of everyday trash in graves",
      "They used stone pots as currency to buy land in other countries",
      "The deceased was an astronomer who studied meteor showers"
    ],
    correctAnswer: "They believed in an afterlife and provided provisions and tools for the deceased person's journey",
    explanation: "Placing food pots, ornaments, and essential working tools inside graves shows ancient people conceived of some form of existence or journey after death.",
    deductionGuide: "Think about why precious food and tools would be intentionally buried with human remains."
  },
  {
    id: "det_008",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Gold Coin Depicting King Samudragupta Playing the Veena",
      sourceType: "Coin",
      icon: "🪙",
      eraOrContext: "Gupta Empire, c. 350 CE",
      visualDescription: "An exquisite gold dinara showing the ruler seated comfortably on a high-backed couch, playing a multi-stringed musical harp (veena).",
      badgeColor: "border-amber-400 bg-amber-50"
    },
    question: "What historical insight does this unique coin provide beyond the king's military power?",
    options: [
      "The emperor patronized arts and music, and wished to be remembered as an accomplished cultural figure",
      "The emperor was forbidden from ever commanding an army in battle",
      "Music was completely illegal for everyone except the royal family",
      "The empire had run out of metal to forge swords and shields"
    ],
    correctAnswer: "The emperor patronized arts and music, and wished to be remembered as an accomplished cultural figure",
    explanation: "Coins reveal not just political control, but royal ideology and cultural values. Samudragupta celebrated himself as both a mighty conqueror and a master musician.",
    deductionGuide: "Observe the musical instrument and the king's calm artistic posture."
  },
  {
    id: "det_009",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Microliths: Tiny Sharp Stone Blades Embedded in Wood or Bone",
      sourceType: "Artifact",
      icon: "🏹",
      eraOrContext: "Mesolithic (Middle Stone Age), c. 10,000 BCE",
      visualDescription: "Geometrically shaped flint flakes (1 to 5 cm long) fixed into wooden handles with tree resin to create composite serrated sickles and arrowheads.",
      badgeColor: "border-emerald-400 bg-emerald-50"
    },
    question: "What technological breakthrough do 'Microliths' represent in human prehistory?",
    options: [
      "The invention of composite multi-part tools that were lighter, sharper, and more versatile",
      "The development of electrical laser cutters for rock quarrying",
      "The abandonment of stone in favor of plastic materials",
      "The beginning of heavy industrial steel manufacturing"
    ],
    correctAnswer: "The invention of composite multi-part tools that were lighter, sharper, and more versatile",
    explanation: "Microliths were hafted onto bone or wood to make spears, arrows, and harvesting sickles — representing efficient, portable composite tool design.",
    deductionGuide: "Notice how tiny stone blades were fitted into wooden handles to create composite tools."
  },
  {
    id: "det_010",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Copper Plate Inscription with a Royal Seal Ring",
      sourceType: "Inscription",
      icon: "📜",
      eraOrContext: "Deccan Plateau, c. 5th Century CE",
      visualDescription: "Two rectangular copper plates engraved with Sanskrit text, joined by a heavy bronze ring sealed with the royal emblem of a charging boar (Varaha).",
      badgeColor: "border-amber-600 bg-amber-50"
    },
    question: "What was the legal purpose of binding engraved copper plates with a sealed metal ring?",
    options: [
      "To prevent unauthorized tampering or separation of legal land ownership and tax exemption records",
      "To make the plates float if they fell into a river",
      "To serve as wearable jewelry necklaces for royal bodyguards",
      "To melt the copper into soup bowls during famines"
    ],
    correctAnswer: "To prevent unauthorized tampering or separation of legal land ownership and tax exemption records",
    explanation: "Copper plates were durable legal title deeds (Tamra-shasana). The soldered royal seal guaranteed authenticity so no one could forge, add, or remove pages of the grant.",
    deductionGuide: "Consider how legal contracts prevent forgery."
  },
  {
    id: "det_011",
    category: "source-detective",
    type: "source-detective",
    difficulty: "challenge",
    points: 15,
    source: {
      title: "Excavated Granary with Raised Air-Ventilated Platforms",
      sourceType: "Monument",
      icon: "🌾",
      eraOrContext: "Mohenjo-daro & Harappa, c. 2400 BCE",
      visualDescription: "Massive brick foundation divided into rectangular blocks with air ducts beneath the floorboards to keep grain dry and prevent insect rot.",
      badgeColor: "border-yellow-600 bg-yellow-50"
    },
    question: "What does this large municipal granary demonstrate about the administration of Harappan cities?",
    options: [
      "The city had centralized civic planning to collect, store, and distribute grain against seasonal shortages",
      "Each family cooked food for the entire city on a single fireplace",
      "Citizens were not allowed to eat grain or bread",
      "The city had no farmers and imported all grain from Europe"
    ],
    correctAnswer: "The city had centralized civic planning to collect, store, and distribute grain against seasonal shortages",
    explanation: "Large public storage structures with humidity control require municipal organization, collection of grain as taxes or surplus, and redistribution to urban craftspeople.",
    deductionGuide: "Think about why a large city needs central storage for surplus food."
  },
  {
    id: "det_012",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Prehistoric Rock Painting of a Group Animal Hunt",
      sourceType: "Artifact",
      icon: "🎨",
      eraOrContext: "Bhimbetka Rock Shelters, Madhya Pradesh, c. 10,000 BCE",
      visualDescription: "Stick figures with bows, spears, and sticks surrounding running bisons and deer, painted with red ochre and white mineral pigments inside a natural sandstone shelter.",
      badgeColor: "border-red-400 bg-red-50"
    },
    question: "What can historians learn about prehistoric hunter-gatherers from these cave paintings?",
    options: [
      "The types of wildlife present, weapons used, and cooperative group hunting strategies",
      "The exact names and telephone numbers of the hunters",
      "The prices of goods sold in modern supermarkets",
      "The dates when iron trains were manufactured"
    ],
    correctAnswer: "The types of wildlife present, weapons used, and cooperative group hunting strategies",
    explanation: "Rock art offers an eyewitness snapshot of prehistoric fauna, communal teamwork in hunting, weapons, rituals, and the creative expression of early humans.",
    deductionGuide: "Observe the animals being surrounded and the hunting tools shown in red ochre."
  },
  {
    id: "det_013",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Pillar Inscription in Prakrit Language and Brahmi Script",
      sourceType: "Inscription",
      icon: "🏛️",
      eraOrContext: "Sarnath, c. 250 BCE",
      visualDescription: "Carefully aligned, evenly spaced letters incised onto polished chunar sandstone, issued by 'Devanampiya Piyadasi' (Beloved of the Gods).",
      badgeColor: "border-teal-500 bg-teal-50"
    },
    question: "Why did Emperor Ashoka compose his inscriptions in local dialects like Prakrit rather than complex court Sanskrit?",
    options: [
      "So ordinary townspeople and villagers could easily understand the message without needing scholars",
      "Because no other language existed on earth at that time",
      "To trick people into thinking the emperor was from a different continent",
      "Because royal stone carvers refused to chisel any Sanskrit letters"
    ],
    correctAnswer: "So ordinary townspeople and villagers could easily understand the message without needing scholars",
    explanation: "Prakrit was the spoken language of the common people. Ashoka chose it deliberately so his moral teachings (Dhamma) reached everyone, not just an elite priesthood.",
    deductionGuide: "Consider the target audience of a public message."
  },
  {
    id: "det_014",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Hoard of Roman Gold Coins Found in South Indian Coastal Villages",
      sourceType: "Coin",
      icon: "🪙",
      eraOrContext: "Kaveripattinam, Tamil Nadu, c. 1st Century CE",
      visualDescription: "Over 200 gold aurei minted in Rome under Emperors Augustus and Tiberius, discovered in an earthenware pot buried near an ancient port.",
      badgeColor: "border-amber-400 bg-amber-50"
    },
    question: "What does this discovery prove about the economy of ancient South India?",
    options: [
      "South Indian kingdoms had flourishing oceanic trade exporting spices (like pepper) and receiving Roman gold in payment",
      "The Roman army invaded and ruled all of southern India for 500 years",
      "Ancient Indians were not capable of manufacturing their own local coins",
      "Coins were carried across the ocean accidentally by migratory sea turtles"
    ],
    correctAnswer: "South Indian kingdoms had flourishing oceanic trade exporting spices (like pepper) and receiving Roman gold in payment",
    explanation: "The Roman writer Pliny the Elder even complained about the massive drain of Roman gold to India to buy black pepper ('black gold'), beryl gems, and fine cotton textiles.",
    deductionGuide: "Connect the foreign coins to trade goods and maritime shipping."
  },
  {
    id: "det_015",
    category: "source-detective",
    type: "source-detective",
    difficulty: "challenge",
    points: 15,
    source: {
      title: "Charred Barley Grains and Cattle Bone Marks in an Excavation Layer",
      sourceType: "Artifact",
      icon: "🌾",
      eraOrContext: "Mehrgarh, Balochistan, c. 7000 BCE",
      visualDescription: "Microscopic analysis reveals domesticated two-row barley seeds and cattle bones showing tell-tale cut marks from flint knives rather than predator tooth bites.",
      badgeColor: "border-amber-600 bg-amber-50"
    },
    question: "What momentous transition in human history does this botanical and zoological evidence establish?",
    options: [
      "The shift from nomadic foraging to settled agricultural food production and animal domestication",
      "The sudden collapse of all human settlements in the region",
      "The discovery of frozen food refrigeration techniques",
      "That prehistoric humans never consumed grains or meat"
    ],
    correctAnswer: "The shift from nomadic foraging to settled agricultural food production and animal domestication",
    explanation: "Cultivated grain seeds and butchery marks on domestic cattle bones are classic bioarchaeological proof of the Neolithic revolution — the dawn of farming and animal husbandry.",
    deductionGuide: "Notice the difference between wild vs domesticated plants and animal bones."
  }
];
