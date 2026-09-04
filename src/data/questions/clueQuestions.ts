import { ConnectCluesQuestion } from '@/types/question';

export const CLUE_QUESTIONS: ConnectCluesQuestion[] = [
  {
    id: "clue_001",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "The Mystery of the Ancient Maritime Route",
    scenario: "Archaeologists working at an ancient coastal site uncover three distinct pieces of evidence:",
    clues: [
      {
        label: "Clue A: Ceramic Shards",
        category: "Artifact",
        finding: "Fragments of Roman double-handled wine amphorae and fine red-glazed Arretine pottery.",
        icon: "🏺"
      },
      {
        label: "Clue B: Monetary Hoard",
        category: "Coin",
        finding: "Hundreds of Roman gold and silver denarii bearing portraits of Emperor Augustus and Tiberius.",
        icon: "🪙"
      },
      {
        label: "Clue C: Classical Greek Text",
        category: "Literary Record",
        finding: "The 'Periplus of the Erythraean Sea' describes Greek sailors waiting for seasonal monsoon winds to sail to Indian ports.",
        icon: "📜"
      }
    ],
    question: "Which conclusion is best supported when all three clues are connected?",
    options: [
      "There was a well-organized, direct maritime trade network between the Mediterranean Roman world and ancient Indian coasts",
      "Roman armies marched on foot across the Himalayas to conquer southern Indian kingdoms",
      "Ancient Indian pottery styles were secretly copied from Greek pirate ships",
      "The Roman coins were merely dropped accidentally by a lost Roman tourist"
    ],
    correctAnswer: "There was a well-organized, direct maritime trade network between the Mediterranean Roman world and ancient Indian coasts",
    explanation: "Connecting pottery (imports), coinage (payments), and navigational literature (trade routes) provides comprehensive proof of organized trans-oceanic commerce.",
    synthesisSummary: "Physical imports + currency hoards + contemporary sailing manuals = Flourishing oceanic trade."
  },
  {
    id: "clue_002",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "Urban Planning in the Indus Basin",
    scenario: "Excavations across multiple Harappan cities hundreds of kilometers apart reveal:",
    clues: [
      {
        label: "Clue 1: Standardized Masonry",
        category: "Architecture",
        finding: "Baked bricks found in Mohenjo-daro, Harappa, and Kalibangan all have an identical ratio of 4:2:1 (length : breadth : thickness).",
        icon: "🧱"
      },
      {
        label: "Clue 2: Street Layout",
        category: "Urban Design",
        finding: "Main avenues run precisely north-south and east-west, intersecting at clean 90-degree right angles in a grid system.",
        icon: "📐"
      },
      {
        label: "Clue 3: Covered Sanitation",
        category: "Public Health",
        finding: "Every private house connects to an underground brick drain system equipped with inspection manholes and soak pits.",
        icon: "🚰"
      }
    ],
    question: "What overall conclusion can historians draw from synthesizing these three clues?",
    options: [
      "Harappan society had centralized municipal administration, strict civic codes, and standardized measurement standards",
      "The cities were built by independent nomadic wanderers who never communicated with each other",
      "Every house in Harappa was designed by a different foreign king",
      "The cities were flooded and rebuilt every single month"
    ],
    correctAnswer: "Harappan society had centralized municipal administration, strict civic codes, and standardized measurement standards",
    explanation: "Standardized brick dimensions across 1,000 km, strict grid plans, and unified drainage systems demonstrate remarkable central governance and municipal discipline.",
    synthesisSummary: "Universal brick ratio + grid street plan + citywide drainage = Centralized civic administration."
  },
  {
    id: "clue_003",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "challenge",
    points: 15,
    title: "The Emergence of Early Territorial Kingdoms (Janapadas)",
    scenario: "Historians investigating northern India around 600 BCE assemble several lines of evidence:",
    clues: [
      {
        label: "Clue A: Metallurgy",
        category: "Artifact",
        finding: "Dense clusters of iron axes, ploughshares, and sickle blades found at archaeological sites in Bihar and Uttar Pradesh.",
        icon: "⛏️"
      },
      {
        label: "Clue B: Fortifications",
        category: "Monuments",
        finding: "Massive mud-brick ramparts and moats surrounding capital cities like Rajgir, Kaushambi, and Ujjain.",
        icon: "🏰"
      },
      {
        label: "Clue C: Early Coins",
        category: "Numismatics",
        finding: "Punch-marked silver pieces used to pay professional standing armies and state officials.",
        icon: "🪙"
      }
    ],
    question: "Connecting these clues reveals which major historical transformation?",
    options: [
      "Agricultural surpluses enabled by iron tools allowed powerful rulers to build fortified capitals, collect taxes, and maintain standing armies",
      "People abandoned cities and returned to living as isolated cave-dwellers",
      "All kingdoms in India agreed to dissolve their borders and stop using tools",
      "Warfare was permanently abolished throughout the subcontinent"
    ],
    correctAnswer: "Agricultural surpluses enabled by iron tools allowed powerful rulers to build fortified capitals, collect taxes, and maintain standing armies",
    explanation: "Iron tools created surplus grain, surplus grain allowed states to collect taxes, and taxes paid for monumental fort walls and professional armies recorded in coinage.",
    synthesisSummary: "Iron technology + agricultural surplus + fortifications + coinage = Rise of powerful territorial states."
  },
  {
    id: "clue_004",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "The Craft Workshop of Lothal",
    scenario: "In an excavated quarter of the Harappan port town of Lothal, archaeologists find:",
    clues: [
      {
        label: "Clue 1: Raw Materials",
        category: "Minerals",
        finding: "Lumps of raw carnelian stone, jasper, and lapis lazuli shipped from distant mines.",
        icon: "💎"
      },
      {
        label: "Clue 2: Specialized Tools",
        category: "Technology",
        finding: "Fine micro-drills made of tough chert stone and circular clay kilns with heating ash.",
        icon: "🔧"
      },
      {
        label: "Clue 3: Discarded Debris",
        category: "Workshop Waste",
        finding: "Half-drilled beads, chipped rock flakes, and broken bead blanks swept into a corner pile.",
        icon: "📿"
      }
    ],
    question: "Which conclusion is unequivocally proven by these three clues?",
    options: [
      "The excavated structure was an active bead-manufacturing workshop where specialized artisans shaped jewelry",
      "The building was a royal throne room where emperors gave speeches",
      "The beads were naturally formed by ocean waves and required no human labor",
      "Lothal did not have any skilled craftsmen or trading connections"
    ],
    correctAnswer: "The excavated structure was an active bead-manufacturing workshop where specialized artisans shaped jewelry",
    explanation: "Finding raw materials, precision manufacturing tools, and manufacturing waste in the same room is definitive archaeological proof of a bead factory.",
    synthesisSummary: "Raw stone + drills and kilns + workshop debris = Bead manufacturing center."
  },
  {
    id: "clue_005",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "challenge",
    points: 15,
    title: "Deciphering Ancient Royal Ideology",
    scenario: "Historians studying Emperor Ashoka compare multiple sources across vast territories:",
    clues: [
      {
        label: "Clue A: Rock Edict XIII",
        category: "Epigraphy",
        finding: "Expresses profound sorrow and remorse over the slaughter, death, and deportation during the Kalinga war.",
        icon: "📜"
      },
      {
        label: "Clue B: Pillar Edict VII",
        category: "Civic Projects",
        finding: "Lists banyan trees planted along roads, mango groves, wells dug every half-kos, and rest houses for travelers and animals.",
        icon: "🌳"
      },
      {
        label: "Clue C: Buddhist Chronicles (Mahavamsa)",
        category: "Literature",
        finding: "Records the emperor's patronage of the Third Buddhist Council at Pataliputra and dispatching peace emissaries to Sri Lanka and Greece.",
        icon: "🕊️"
      }
    ],
    question: "What overarching historical conclusion emerges when these sources are connected?",
    options: [
      "Ashoka underwent a moral transformation, turning away from military expansion toward the welfare of all living beings and ethical governance",
      "Ashoka lost all his territory and was forced into exile by his neighbors",
      "The emperor banned all religions and ordered monuments destroyed",
      "The inscriptions were written hundreds of years after the empire ceased to exist"
    ],
    correctAnswer: "Ashoka underwent a moral transformation, turning away from military expansion toward the welfare of all living beings and ethical governance",
    explanation: "Edict remorse + public welfare infrastructure + peace missions in chronicles corroborate a documented shift from conquest by force (Bherighosha) to conquest by moral duty (Dhammaghosha).",
    synthesisSummary: "Remorse over war + public welfare works + ethical missions = Shift to moral governance."
  },
  {
    id: "clue_006",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "Investigating Ancient Climate and Agriculture",
    scenario: "Environmental archaeologists examining sediment cores near an ancient riverbed find:",
    clues: [
      {
        label: "Clue 1: Pollen Grains",
        category: "Palaeobotany",
        finding: "Fossilized pollen belonging to cultivated wheat and barley found trapped in soil layers dated to 2500 BCE.",
        icon: "🌾"
      },
      {
        label: "Clue 2: Terracotta Model",
        category: "Artifact",
        finding: "A miniature clay toy plough excavated at Banawali, showing a beam, handle, and ploughshare.",
        icon: "🚜"
      },
      {
        label: "Clue 3: Furrow Marks",
        category: "Archaeology",
        finding: "A preserved ploughed field surface at Kalibangan showing two sets of criss-cross grid furrows.",
        icon: "🌱"
      }
    ],
    question: "Connecting these clues proves that the ancient farmers:",
    options: [
      "Used wooden ploughs pulled by draft animals and planted two different crops simultaneously in intersecting furrows",
      "Only gathered wild weeds from riverbanks and never understood farming",
      "Used metal airplanes to drop chemical pesticides on their crops",
      "Imported all their food from faraway foreign planets"
    ],
    correctAnswer: "Used wooden ploughs pulled by draft animals and planted two different crops simultaneously in intersecting furrows",
    explanation: "Pollen confirms crop types; the clay toy models the tool; and grid furrows show the farming practice of growing two crops together with different water needs.",
    synthesisSummary: "Crop pollen + plough model + ploughed furrow field = Advanced systematic agriculture."
  },
  {
    id: "clue_007",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "The Mystery of the Buried Skeleton",
    scenario: "At Inamgaon (Maharashtra), archaeologists excavating an early farming settlement uncover a unique burial:",
    clues: [
      {
        label: "Clue A: Burial Position & House",
        category: "Excavation",
        finding: "The body was buried inside a five-room house in the center of the settlement, seated cross-legged in a large four-legged clay jar.",
        icon: "🏠"
      },
      {
        label: "Clue B: Associated Grave Goods",
        category: "Artifacts",
        finding: "Accompanied by a granary in the same courtyard, copper chisels, and terracotta figurines.",
        icon: "🏺"
      },
      {
        label: "Clue C: Comparison with Other Graves",
        category: "Social Hierarchy",
        finding: "Most other skeletons were buried in plain pits in the earth with only a few simple pots.",
        icon: "⚖️"
      }
    ],
    question: "What social reality of this ancient community does this contrast in evidence reveal?",
    options: [
      "There was social differentiation and hierarchy; this individual was likely an important village chief or leader",
      "Every single citizen was treated identically with equal resources",
      "The buried person was a foreign invader who accidentally fell into a jar",
      "The villagers had no concept of leadership or family homes"
    ],
    correctAnswer: "There was social differentiation and hierarchy; this individual was likely an important village chief or leader",
    explanation: "A massive central home, a courtyard granary, and an elaborate burial jar compared to modest pit graves for others indicates significant differences in social status and authority.",
    synthesisSummary: "Central mansion burial + abundant grave goods + contrast with simple graves = Social stratification."
  },
  {
    id: "clue_008",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "challenge",
    points: 15,
    title: "Tracing the Spread of Writing (Scripts)",
    scenario: "Epigraphists comparing ancient scripts across South Asia and Central Asia notice:",
    clues: [
      {
        label: "Clue 1: Brahmi Script on Inscriptions",
        category: "Epigraphy",
        finding: "Found across India in 3rd Century BCE edicts; letters represent phonetic syllables (aksharas).",
        icon: "✍️"
      },
      {
        label: "Clue 2: Devanagari & Dravidian Scripts",
        category: "Palaeography",
        finding: "Modern Indian alphabets (Devanagari, Tamil, Kannada, Bengali) share letter structures traceable directly to ancient Brahmi.",
        icon: "🔤"
      },
      {
        label: "Clue 3: James Prinsep's Breakthrough",
        category: "Historiography",
        finding: "In 1837, James Prinsep deciphered Brahmi by comparing bilingual coins and matching repeated royal titles.",
        icon: "🔍"
      }
    ],
    question: "Connecting these clues explains which major insight about historical scripts?",
    options: [
      "Brahmi is the ancestral mother script from which most modern Indian writing systems evolved over centuries",
      "Ancient Indians never wrote down their thoughts until the 19th century",
      "All world languages were originally invented by Greek sailors",
      "Scripts can never change their shape once invented"
    ],
    correctAnswer: "Brahmi is the ancestral mother script from which most modern Indian writing systems evolved over centuries",
    explanation: "James Prinsep's decipherment unlocked the family tree of writing: Ashokan Brahmi gradually branched and evolved into nearly all major modern indigenous Indian scripts.",
    synthesisSummary: "Ancient Brahmi + script evolution + decipherment = Parentage of modern Indian scripts."
  },
  {
    id: "clue_009",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "Identifying a Prehistoric Factory Site",
    scenario: "Archaeologists surveying a hillside near a flint outcrop in Karnataka discover:",
    clues: [
      {
        label: "Clue A: Raw Material Nodules",
        category: "Geology",
        finding: "Large natural boulders of high-quality quartzite stone with hammer-impact marks.",
        icon: "🪨"
      },
      {
        label: "Clue B: Heavy Hammerstones",
        category: "Tools",
        finding: "Rounded river stones with battered edges used to strike and shape cores.",
        icon: "🔨"
      },
      {
        label: "Clue C: Piles of Discarded Flakes",
        category: "Debris",
        finding: "Thousands of chipped stone flakes and unfinished handaxes covering the hillside.",
        icon: "🪓"
      }
    ],
    question: "Historians classify this archaeological location as a:",
    options: [
      "Factory-cum-habitation site where prehistoric toolmakers quarried stone and manufactured tools",
      "Modern iron ore processing plant",
      "Temple dedicated to ancient mountain gods",
      "Natural landslide area where humans never set foot"
    ],
    correctAnswer: "Factory-cum-habitation site where prehistoric toolmakers quarried stone and manufactured tools",
    explanation: "Abundant raw stone cores, heavy hammerstones for striking, and thousands of discarded waste flakes define a prehistoric stone tool manufacturing factory.",
    synthesisSummary: "Quarry rocks + striking hammers + heaps of chipped waste = Tool manufacturing site."
  },
  {
    id: "clue_010",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "The Mystery of the River Saraswati",
    scenario: "Geological and archaeological mapping across northwestern India and Pakistan reveals:",
    clues: [
      {
        label: "Clue 1: Dry River Paleochannels",
        category: "Satellite Imagery",
        finding: "Radar imagery shows an immense dried river valley (the Ghaggar-Hakra) running parallel to the Indus.",
        icon: "🛰️"
      },
      {
        label: "Clue 2: Settlement Density",
        category: "Archaeological Surveys",
        finding: "Hundreds of Mature Harappan sites (like Kalibangan, Rakhigarhi, and Ganweriwala) are clustered along this dry channel.",
        icon: "📍"
      },
      {
        label: "Clue 3: Rigvedic Hymns",
        category: "Literary Memory",
        finding: "Vedic hymns celebrate the Saraswati as a mighty, perennial river flowing 'from the mountains to the sea'.",
        icon: "📜"
      }
    ],
    question: "Connecting these geological, archaeological, and literary clues suggests that:",
    options: [
      "A once-mighty river supported dense ancient settlements before geological shifts and tectonic movements dried up its flow",
      "The Harappans lived exclusively in wooden houseboats and never built cities on dry land",
      "Satellite maps are always completely inaccurate when studying geography",
      "Ancient rivers had no relationship to where human beings decided to live"
    ],
    correctAnswer: "A once-mighty river supported dense ancient settlements before geological shifts and tectonic movements dried up its flow",
    explanation: "Satellite dry channels + hundreds of settlements along the banks + literary praise in ancient poetry confirm a major lost river system that sustained Bronze Age urban centers.",
    synthesisSummary: "Satellite dry beds + dense urban ruins + ancient poetry = Lost river basin and environmental change."
  },
  {
    id: "clue_011",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "International Seal Exchange",
    scenario: "Archaeologists working at Ur and Kish in ancient Mesopotamia (modern Iraq) make a startling discovery:",
    clues: [
      {
        label: "Clue A: Mesopotamian Excavation",
        category: "Artifact",
        finding: "Square steatite seals engraved with Indus humped bulls and Indus script discovered in Mesopotamian warehouses.",
        icon: "🏷️"
      },
      {
        label: "Clue B: Cuneiform Clay Tablets",
        category: "Writing",
        finding: "Sumerian records mention trading ships arriving from a distant eastern maritime land called 'Meluhha'.",
        icon: "📜"
      },
      {
        label: "Clue C: Persian Gulf Island Seals",
        category: "Trade Depot",
        finding: "Circular seals found on Bahrain (ancient Dilmun) combining both Mesopotamian and Indus iconography.",
        icon: "🏝️"
      }
    ],
    question: "Synthesizing these clues provides undeniable evidence that:",
    options: [
      "The Indus Valley civilization ('Meluhha') conducted long-distance maritime trade with Mesopotamian cities through Persian Gulf middlemen",
      "Mesopotamian kings conquered Harappa and ruled it as a military colony",
      "The Indus people only traded with cities within a 5-kilometer walking radius",
      "Ancient ships were unable to sail in ocean salt water"
    ],
    correctAnswer: "The Indus Valley civilization ('Meluhha') conducted long-distance maritime trade with Mesopotamian cities through Persian Gulf middlemen",
    explanation: "Harappan seals in Iraqi cities + Sumerian trade texts mentioning Meluhha + intermediate trade seals on Bahrain prove long-distance maritime trading networks.",
    synthesisSummary: "Indus seals in Mesopotamia + cuneiform trade records + Bahrain transit seals = International Bronze Age trade."
  },
  {
    id: "clue_012",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "challenge",
    points: 15,
    title: "The Iron Pillar's Metallurgical Mystery",
    scenario: "Scientists and historians analyze the famous 4th-century CE Iron Pillar standing at Mehrauli, Delhi:",
    clues: [
      {
        label: "Clue 1: Chemical Composition",
        category: "Metallurgy",
        finding: "Made of wrought iron with an unusually high phosphorus content and low sulphur and manganese.",
        icon: "🔬"
      },
      {
        label: "Clue 2: Protective Film",
        category: "Preservation",
        finding: "A thin microscopic passive film of iron hydrogen phosphate hydrate (misawite) shields the core iron from atmospheric rust.",
        icon: "🛡️"
      },
      {
        label: "Clue 3: Sanskrit Inscription",
        category: "Epigraphy",
        finding: "A poetic eulogy dedicated to King Chandra carved in Brahmi script, standing exposed to rains for over 1,600 years without corroding away.",
        icon: "📜"
      }
    ],
    question: "What conclusion does this multi-disciplinary investigation prove?",
    options: [
      "Ancient Indian metallurgists possessed advanced technical mastery in forge-welding corrosion-resistant wrought iron",
      "The pillar was brought from the planet Mars by futuristic visitors",
      "The pillar was actually manufactured out of painted plastic in 1950",
      "Rainwater in ancient times was completely incapable of causing iron to rust"
    ],
    correctAnswer: "Ancient Indian metallurgists possessed advanced technical mastery in forge-welding corrosion-resistant wrought iron",
    explanation: "Scientific metallurgy combined with epigraphy proves that 4th-century artisans mastered deliberate chemical composition and forge-welding that resisted rust for over 16 centuries.",
    synthesisSummary: "Phosphorus-rich wrought iron + protective misawite barrier + 1600-year exposure = High metallurgical mastery."
  }
];
