import { ConnectCluesQuestion } from '@/types/question';

export const CLUE_QUESTIONS: ConnectCluesQuestion[] = [
  {
    id: "clue_001",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "The Lost Port of Lothal",
    scenario: "Archaeologists excavating the ancient Harappan town of Lothal in Gujarat uncover three intriguing finds:",
    clues: [
      {
        label: "Clue 1: Tidal Dockyard Tank",
        category: "Architecture",
        finding: "A massive brick basin connected by a channel to the river where boats and ships could enter from the sea.",
        icon: "⚓"
      },
      {
        label: "Clue 2: Bead Factory",
        category: "Crafts",
        finding: "A workshop containing raw carnelian stones, stone drills, and half-made bead necklaces.",
        icon: "💎"
      },
      {
        label: "Clue 3: Clay Sealings",
        category: "Trade Evidence",
        finding: "Clay tags with seal impressions stamped over knotted ropes used on cargo sacks.",
        icon: "🏷️"
      }
    ],
    question: "What overall conclusion is proven when these three clues are connected?",
    options: [
      "Lothal was a bustling port and craft center where goods were manufactured and shipped across the sea",
      "Lothal was a mountain fortress where people hid from rain",
      "The city had no access to any rivers or oceans",
      "The people of Lothal never made any crafts or jewelry"
    ],
    correctAnswer: "Lothal was a bustling port and craft center where goods were manufactured and shipped across the sea",
    explanation: "The dockyard allowed ships to dock, the workshop produced beads, and clay sealings secured cargo for sea trade.",
    synthesisSummary: "Dockyard basin + bead workshop + cargo sealings = Busy maritime port and manufacturing hub."
  },
  {
    id: "clue_002",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "Life in the Old Stone Age",
    scenario: "Archaeologists investigating early human sites in central and southern India discover:",
    clues: [
      {
        label: "Clue 1: Rock Shelters at Bhimbetka",
        category: "Shelter",
        finding: "Natural sandstone caves overlooking the Narmada Valley that protected people from rain and wind.",
        icon: "🏞️"
      },
      {
        label: "Clue 2: Cave Wall Paintings",
        category: "Art",
        finding: "Paintings in red and white pigments showing running deer, wild animals, and hunters with spears.",
        icon: "🎨"
      },
      {
        label: "Clue 3: Ash Traces at Kurnool",
        category: "Fire",
        finding: "Traces of wood ash found inside caves, proving early humans used and controlled fire.",
        icon: "🔥"
      }
    ],
    question: "Connecting these clues proves that early humans in the Old Stone Age:",
    options: [
      "Lived as hunter-gatherers using caves for shelter, fire for warmth and light, and painted their daily life on rock walls",
      "Lived in modern concrete apartment buildings",
      "Grew wheat and rice on large farms with iron tractors",
      "Could not survive in the wild and stayed only on boats"
    ],
    correctAnswer: "Lived as hunter-gatherers using caves for shelter, fire for warmth and light, and painted their daily life on rock walls",
    explanation: "Bhimbetka provided natural shelter, Kurnool ash proves the mastery of fire, and cave paintings depict wild hunting.",
    synthesisSummary: "Rock shelters + hunting paintings + ash traces = Nomadic hunter-gatherer life using fire and cave shelters."
  },
  {
    id: "clue_003",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "The First Farmers of Mehrgarh",
    scenario: "Near the Bolan Pass in Balochistan, archaeologists excavating the ancient site of Mehrgarh find:",
    clues: [
      {
        label: "Clue 1: Food Grains",
        category: "Agriculture",
        finding: "Charred seeds of wheat and barley preserved in ancient soil layers.",
        icon: "🌾"
      },
      {
        label: "Clue 2: Animal Bones",
        category: "Herding",
        finding: "Bones of domesticated sheep, goats, and cattle showing animals were tamed for milk and meat.",
        icon: "🐐"
      },
      {
        label: "Clue 3: Mud-Brick Houses",
        category: "Architecture",
        finding: "Square and rectangular houses made of mud-bricks, with rooms used for storing grain.",
        icon: "🏠"
      }
    ],
    question: "What major turning point in human history do these clues reveal?",
    options: [
      "Humans stopped wandering and began settled farming, animal herding, and living in village homes",
      "People abandoned all food and lived only on drinking water",
      "All animals in ancient India were wild and never tamed",
      "Farming was invented in the 21st century"
    ],
    correctAnswer: "Humans stopped wandering and began settled farming, animal herding, and living in village homes",
    explanation: "Mehrgarh is one of the earliest known farming villages where people grew wheat and barley, herded animals, and lived in permanent houses.",
    synthesisSummary: "Wheat/barley seeds + sheep/goat bones + mud houses = Transition to settled agriculture and village life."
  },
  {
    id: "clue_004",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "Urban Planning in Harappan Cities",
    scenario: "Excavations across Harappan cities like Mohenjo-daro and Harappa reveal:",
    clues: [
      {
        label: "Clue 1: Citadel and Lower Town",
        category: "Town Layout",
        finding: "Cities divided into two parts: a higher Citadel in the west and a larger Lower Town in the east.",
        icon: "🏰"
      },
      {
        label: "Clue 2: Grid Street Pattern",
        category: "Streets",
        finding: "Wide, straight avenues that crossed each other at neat right angles like a chessboard.",
        icon: "📐"
      },
      {
        label: "Clue 3: Covered Brick Drains",
        category: "Sanitation",
        finding: "Straight brick-lined drains running along streets with removable stone covers for cleaning.",
        icon: "🚰"
      }
    ],
    question: "What does this evidence prove about Harappan cities?",
    options: [
      "Harappan cities were carefully planned by skilled engineers and managed by an organized municipal government",
      "The cities were built by accident without any plan",
      "People lived in huts that were knocked down every week",
      "The cities had no rulers or public workers"
    ],
    correctAnswer: "Harappan cities were carefully planned by skilled engineers and managed by an organized municipal government",
    explanation: "Standardized city divisions, grid streets, and citywide covered drainage demonstrate advanced urban planning.",
    synthesisSummary: "Two-part city division + grid streets + covered drainage = Highly organized city planning."
  },
  {
    id: "clue_005",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "The Emperor Who Gave Up War (Ashoka)",
    scenario: "Historians studying Emperor Ashoka discover three unique pieces of historical evidence:",
    clues: [
      {
        label: "Clue 1: Rock Edict XIII",
        category: "War Inscription",
        finding: "Ashoka expresses deep sorrow over the bloodshed, suffering, and deaths caused by the Kalinga war.",
        icon: "📜"
      },
      {
        label: "Clue 2: Pillar Edicts on Public Welfare",
        category: "Good Works",
        finding: "Ashoka describes building hospitals for humans and animals, digging roadside wells, and planting shade trees.",
        icon: "🌳"
      },
      {
        label: "Clue 3: Language for the People",
        category: "Script & Language",
        finding: "Edicts were written in simple Prakrit and Brahmi script so common people could understand them.",
        icon: "✍️"
      }
    ],
    question: "Connecting these clues reveals which remarkable change in Emperor Ashoka?",
    options: [
      "He gave up war and conquest, dedicating his rule to peace, moral duty (Dhamma), and the welfare of all living beings",
      "He decided to conquer every country in the world",
      "He retired to a jungle and stopped caring about his people",
      "He banned all languages except Greek"
    ],
    correctAnswer: "He gave up war and conquest, dedicating his rule to peace, moral duty (Dhamma), and the welfare of all living beings",
    explanation: "Horrified by the violence in Kalinga, Ashoka gave up military conquest and chose conquest by Dhamma (righteousness).",
    synthesisSummary: "Sorrow over Kalinga + roadside welfare + edicts in common language = Ashoka's devotion to peace and Dhamma."
  },
  {
    id: "clue_006",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "Indo-Roman Trade at Arikamedu",
    scenario: "Archaeologists excavating the coastal site of Arikamedu near Puducherry find:",
    clues: [
      {
        label: "Clue 1: Amphorae Pottery",
        category: "Mediterranean Import",
        finding: "Shards of tall two-handled clay jars used in Rome for holding wine and olive oil.",
        icon: "🏺"
      },
      {
        label: "Clue 2: Arretine Ware",
        category: "Stamped Ceramics",
        finding: "Red-glazed luxury pottery made in Italy stamped with maker designs.",
        icon: "🍽️"
      },
      {
        label: "Clue 3: Roman Coin Hoards",
        category: "Currency",
        finding: "Gold and silver Roman coins bearing portraits of Roman emperors found in coastal Tamil Nadu.",
        icon: "🪙"
      }
    ],
    question: "What does this evidence tell us about ancient Indian traders?",
    options: [
      "Indian coastal ports had active sea trade with the Roman Empire, exchanging spices and cloth for Roman gold and wine",
      "Rome invaded and ruled all of southern India",
      "Indian merchants were afraid of sailing into the sea",
      "Ancient ships could not carry pottery across water"
    ],
    correctAnswer: "Indian coastal ports had active sea trade with the Roman Empire, exchanging spices and cloth for Roman gold and wine",
    explanation: "Arikamedu was a bustling port where Roman merchants sailed across the Arabian Sea to buy Indian spices, gems, and textiles.",
    synthesisSummary: "Wine amphorae + stamped Italian pottery + Roman gold coins = Active Indo-Roman maritime commerce."
  },
  {
    id: "clue_007",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "Secrets of Megalith Burials",
    scenario: "At Megalith sites like Brahmagiri and Adichanallur in South India, archaeologists discover:",
    clues: [
      {
        label: "Clue 1: Stone Boulders",
        category: "Burial Marker",
        finding: "Huge stone boulders placed in circles around underground grave pits (cists).",
        icon: "🪨"
      },
      {
        label: "Clue 2: Iron Tools & Weapons",
        category: "Artifacts",
        finding: "Iron daggers, swords, axes, and horse equipment buried alongside human skeletons.",
        icon: "⚔️"
      },
      {
        label: "Clue 3: Differences in Wealth",
        category: "Grave Goods",
        finding: "One grave contained 33 gold beads and copper bangles, while other nearby graves had only simple clay pots.",
        icon: "💍"
      }
    ],
    question: "What do these clues show about Megalithic society?",
    options: [
      "They used iron tools and weapons, and there were differences in wealth and power between chiefs and ordinary people",
      "Everyone in the community had identical wealth and status",
      "They had never seen or used any metal tools",
      "The dead were always buried in deep ocean water"
    ],
    correctAnswer: "They used iron tools and weapons, and there were differences in wealth and power between chiefs and ordinary people",
    explanation: "Megaliths were marked by large stone boulders. Rich graves with gold and weapons show that chiefs held higher status than poor villagers.",
    synthesisSummary: "Stone circle graves + iron weapons + unequal grave goods = Iron Age society with social hierarchy."
  },
  {
    id: "clue_008",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "How Magadha Became the Most Powerful Kingdom",
    scenario: "Historians investigating why Magadha became the leading Mahajanapada find three geographical advantages:",
    clues: [
      {
        label: "Clue 1: River Highways",
        category: "Water & Transport",
        finding: "Rivers Ganga and Son flowed through Magadha, providing drinking water, water for crops, and easy boat transport.",
        icon: "🌊"
      },
      {
        label: "Clue 2: Iron Ore Mines",
        category: "Metal Resources",
        finding: "Rich deposits of iron ore in nearby hills provided metal to forge sharp weapons and iron ploughshares.",
        icon: "⛏️"
      },
      {
        label: "Clue 3: Forest Resources",
        category: "Army & Building",
        finding: "Dense forests provided timber for building houses and carts, as well as wild elephants trained for the king's army.",
        icon: "🐘"
      }
    ],
    question: "Connecting these three clues explains why:",
    options: [
      "Magadha had great natural advantages that helped its rulers build a wealthy kingdom and a mighty army",
      "Magadha was completely deserted because people disliked rivers",
      "The people of Magadha refused to use iron or elephants",
      "Magadha was conquered by early cave-dwellers"
    ],
    correctAnswer: "Magadha had great natural advantages that helped its rulers build a wealthy kingdom and a mighty army",
    explanation: "NCERT Class 6 Chapter 5 highlights rivers for water and transport, iron ore for weapons, and forest elephants as key reasons for Magadha's power.",
    synthesisSummary: "River transport/water + iron mines + timber and war elephants = Rise of Magadha as the greatest kingdom."
  },
  {
    id: "clue_009",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "How Scholars Deciphered Ashoka's Inscriptions",
    scenario: "In the 1830s, scholars trying to read ancient Indian stone inscriptions gathered three clues:",
    clues: [
      {
        label: "Clue 1: Bilingual Coins",
        category: "Numismatics",
        finding: "Coins had the same king's name written in Greek letters on one side and Brahmi letters on the other.",
        icon: "🪙"
      },
      {
        label: "Clue 2: Matching Letters & Sounds",
        category: "Script Analysis",
        finding: "Scholars compared Greek letters with Brahmi letters to figure out the sound of each letter (like 'A' for king Apollodotus).",
        icon: "🔤"
      },
      {
        label: "Clue 3: James Prinsep's Discovery",
        category: "Breakthrough",
        finding: "In 1837, James Prinsep matched the letters and successfully read the name 'Piyadasi' on Ashoka's pillars.",
        icon: "🔍"
      }
    ],
    question: "What historical breakthrough was achieved when these clues came together?",
    options: [
      "Scholars deciphered the ancient Brahmi script and could finally read Ashoka's royal edicts across India",
      "Scholars proved that Ashoka never existed",
      "All ancient stone inscriptions were found to be modern fakes",
      "It was discovered that ancient Indians wrote backwards"
    ],
    correctAnswer: "Scholars deciphered the ancient Brahmi script and could finally read Ashoka's royal edicts across India",
    explanation: "By matching known Greek names with unknown Brahmi letters on coins, James Prinsep unlocked the Brahmi script in 1837.",
    synthesisSummary: "Bilingual coins + comparing letters + James Prinsep = Decipherment of Brahmi script and Ashokan edicts."
  },
  {
    id: "clue_010",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "easy",
    points: 15,
    title: "Living in Cold Kashmir: The Burzahom Pit-Houses",
    scenario: "Archaeologists digging at Burzahom in Kashmir uncover an unusual village layout:",
    clues: [
      {
        label: "Clue 1: Dug-Out Pit Rooms",
        category: "Shelter",
        finding: "Circular rooms dug deep into the ground with steps leading down inside.",
        icon: "🕳️"
      },
      {
        label: "Clue 2: Double Cooking Hearths",
        category: "Daily Life",
        finding: "Fireplaces for cooking found both inside the pit-house and outside on the surface ground.",
        icon: "🍲"
      },
      {
        label: "Clue 3: Stone and Bone Tools",
        category: "Work",
        finding: "Polished stone axes and sharp animal-bone needles found on the dirt floor.",
        icon: "🦴"
      }
    ],
    question: "Connecting these clues explains how the people of Burzahom lived:",
    options: [
      "They dug pit-houses to stay warm in freezing winters, cooking indoors when cold and outdoors in pleasant weather",
      "They were trapped underground and could never climb out",
      "They lived only in the ocean and ate only seaweed",
      "They built pit-houses to store sports cars"
    ],
    correctAnswer: "They dug pit-houses to stay warm in freezing winters, cooking indoors when cold and outdoors in pleasant weather",
    explanation: "Pit-houses dug into the soil insulated people against bitter Himalayan cold, while hearths both inside and outside showed seasonal cooking.",
    synthesisSummary: "Underground pits + indoor/outdoor hearths + bone tools = Adaptation to cold climate in Neolithic Kashmir."
  },
  {
    id: "clue_011",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "The Music-Loving Emperor Samudragupta",
    scenario: "Historians studying the Gupta Empire examine different pieces of evidence about King Samudragupta:",
    clues: [
      {
        label: "Clue 1: The Prayag Prashasti (Allahabad Pillar)",
        category: "Inscription",
        finding: "A long poem in classical Sanskrit by Harishena praising the king as an undefeated warrior and poet.",
        icon: "📜"
      },
      {
        label: "Clue 2: Gold Coins Playing Veena",
        category: "Coinage",
        finding: "Gold coins depicting the king sitting on a couch and playing a stringed musical instrument called the veena.",
        icon: "🪙"
      },
      {
        label: "Clue 3: Title of Kaviraja",
        category: "Court Literature",
        finding: "Titles in inscriptions praising the king for composing poetry and enjoying fine arts.",
        icon: "👑"
      }
    ],
    question: "Connecting these clues proves what about King Samudragupta?",
    options: [
      "He was a multifaceted ruler who was both a courageous military conqueror and a cultured artist who loved music",
      "He was defeated in every battle and only knew how to play songs",
      "He forbade all his subjects from listening to music",
      "The coins were made by enemies to make fun of him"
    ],
    correctAnswer: "He was a multifaceted ruler who was both a courageous military conqueror and a cultured artist who loved music",
    explanation: "Samudragupta was famous both for expanding the Gupta Empire and for his love of poetry and music, as depicted on his gold coins.",
    synthesisSummary: "Harishena's pillar inscription + veena-playing gold coins + artistic titles = Warrior-king with high cultural talent."
  },
  {
    id: "clue_012",
    category: "connect-the-clues",
    type: "connect-clues",
    difficulty: "medium",
    points: 15,
    title: "How We Know What Harappans Ate",
    scenario: "Archaeologists piecing together daily life in Harappan cities find:",
    clues: [
      {
        label: "Clue 1: Plant Seeds",
        category: "Botany",
        finding: "Burnt grains of wheat, barley, pulses, peas, rice, and sesame seeds found in kitchen jars.",
        icon: "🌾"
      },
      {
        label: "Clue 2: Farming Tools",
        category: "Farming",
        finding: "Clay toy models of ploughs and real ploughed furrow marks found on farm fields at Kalibangan.",
        icon: "🚜"
      },
      {
        label: "Clue 3: Animal Bones",
        category: "Food",
        finding: "Bones of cattle, sheep, goats, buffalo, and fish found in residential trash heaps.",
        icon: "🥩"
      }
    ],
    question: "What complete picture of Harappan diet and food production emerges?",
    options: [
      "Harappans ploughed fields to grow crops, kept domestic animals for milk and meat, and enjoyed a varied, nutritious diet",
      "Harappans ate only raw wild grass and had no farmed food",
      "Harappans did not know how to cook or prepare food",
      "Harappans bought all their food from modern supermarkets"
    ],
    correctAnswer: "Harappans ploughed fields to grow crops, kept domestic animals for milk and meat, and enjoyed a varied, nutritious diet",
    explanation: "Plant seeds prove crop varieties; ploughed fields and toy ploughs prove agricultural methods; and animal bones prove herding and meat consumption.",
    synthesisSummary: "Grains + ploughed fields + domestic animal bones = Advanced farming, animal rearing, and balanced diet."
  }
];
