import { SourceDetectiveQuestion } from '@/types/question';

export const DETECTIVE_QUESTIONS: SourceDetectiveQuestion[] = [
  {
    id: "det_001",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Ashokan Rock Inscription",
      sourceType: "Inscription",
      icon: "📜",
      eraOrContext: "Gujarat, about 2300 years ago (c. 250 BCE)",
      visualDescription: "Carefully carved lines of Brahmi script cut into the smooth surface of a huge rock boulder, talking about Dhamma, kindness to animals, and planting shade trees along roads.",
      badgeColor: "border-stone-400 bg-stone-50"
    },
    question: "Why did Emperor Ashoka carve his messages on rocks along public highways?",
    options: [
      "So that travelers and common people passing by could easily read his message of Dhamma and peace",
      "Because he ran out of paper and palm leaves in his kingdom",
      "To hide his messages so no one could find them",
      "To decorate the mountain for an athletic tournament"
    ],
    correctAnswer: "So that travelers and common people passing by could easily read his message of Dhamma and peace",
    explanation: "Ashoka wanted his message of peace, non-violence, and kindness to reach everyone, so he had edicts carved on permanent rocks and pillars where travelers could see them.",
    deductionGuide: "Think about why kings place messages on big rocks beside busy roads."
  },
  {
    id: "det_002",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "The Great Bath of Mohenjo-daro",
      sourceType: "Monument",
      icon: "🏛️",
      eraOrContext: "Indus Valley, about 4700 years ago (c. 2500 BCE)",
      visualDescription: "A large rectangular pool built of baked bricks, coated with plaster, and made water-tight with a layer of natural tar (bitumen), with steps leading down from two sides.",
      badgeColor: "border-teal-500 bg-teal-50"
    },
    question: "What does the construction of the Great Bath prove about Harappan builders?",
    options: [
      "They were skilled engineers who knew how to make waterproof brick tanks for special bathing rituals",
      "They had modern electric swimming pool pumps",
      "They never used water and kept the tank completely empty",
      "The tank was built by visiting space aliens"
    ],
    correctAnswer: "They were skilled engineers who knew how to make waterproof brick tanks for special bathing rituals",
    explanation: "As described in NCERT Class 6, the Great Bath was lined with bricks, coated with plaster, and sealed with natural tar (bitumen) to hold water for special ritual baths.",
    deductionGuide: "Notice the baked bricks and natural tar used to make the pool waterproof."
  },
  {
    id: "det_003",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Square Harappan Seal with a Humped Bull",
      sourceType: "Seal",
      icon: "🦬",
      eraOrContext: "Harappa, about 4700 years ago (c. 2500 BCE)",
      visualDescription: "A small square stone seal showing a carved humped bull and a line of pictographic signs along the top edge.",
      badgeColor: "border-amber-400 bg-amber-50"
    },
    question: "How did Harappan merchants use seals according to NCERT Class 6?",
    options: [
      "They pressed seals onto wet clay on bags of goods to ensure they were not opened or tampered with during travel",
      "They used them as coins to buy sweets in school canteens",
      "They wore them as glasses to see in the dark",
      "They ate them as food during long journeys"
    ],
    correctAnswer: "They pressed seals onto wet clay on bags of goods to ensure they were not opened or tampered with during travel",
    explanation: "NCERT Class 6 explains that seals were stamped onto wet clay (sealings) tied to bags of goods. If the seal impression remained intact, the buyer knew the goods were safe.",
    deductionGuide: "Think about how we stamp or seal packages today to keep them safe."
  },
  {
    id: "det_004",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Birch-Bark Manuscript from Kashmir",
      sourceType: "Manuscript",
      icon: "📑",
      eraOrContext: "Ancient India (Himalayan region)",
      visualDescription: "Thin, dried layers of Himalayan birch bark (bhurjapatra) with neat rows of handwritten Sanskrit text written using black ink.",
      badgeColor: "border-amber-200 bg-amber-50"
    },
    question: "What does this manuscript teach us about ancient Indian books?",
    options: [
      "Before paper was available, ancient books were written by hand on specially prepared tree bark and palm leaves",
      "Ancient people only used printed newspapers",
      "All books in ancient India were made of plastic",
      "People never wrote down any poems or stories"
    ],
    correctAnswer: "Before paper was available, ancient books were written by hand on specially prepared tree bark and palm leaves",
    explanation: "NCERT Class 6 Chapter 1 explains that manuscripts were handwritten books written on palm leaves or birch bark (bhurjapatra) from the Himalayas.",
    deductionGuide: "Look at the natural tree bark and handwritten ink letters."
  },
  {
    id: "det_005",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Cave Wall Painting at Bhimbetka",
      sourceType: "Artifact",
      icon: "🎨",
      eraOrContext: "Madhya Pradesh, Old Stone Age (Palaeolithic)",
      visualDescription: "A painting drawn on cave rock using red ochre and white mineral paint, showing stick-figure hunters with spears chasing running wild animals.",
      badgeColor: "border-red-400 bg-red-50"
    },
    question: "What do the paintings inside Bhimbetka caves tell us about early humans?",
    options: [
      "They lived in natural rock shelters and hunted wild animals for food, drawing their daily life on cave walls",
      "They drove automobiles and lived in modern apartments",
      "They grew crops using modern farm tractors",
      "They lived only in deep ocean waters"
    ],
    correctAnswer: "They lived in natural rock shelters and hunted wild animals for food, drawing their daily life on cave walls",
    explanation: "NCERT Class 6 describes Bhimbetka as rock shelters where early hunter-gatherers lived to escape rain, heat, and wind, painting scenes of animals and hunts on the walls.",
    deductionGuide: "Look at the wild animals and the simple tools used by the painted hunters."
  },
  {
    id: "det_006",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Terracotta Toy Plough from Banawali",
      sourceType: "Artifact",
      icon: "🚜",
      eraOrContext: "Indus Valley (Haryana), about 4500 years ago",
      visualDescription: "A small baked clay toy model shaped like a wooden farming plough with a beam, handle, and curved ploughshare.",
      badgeColor: "border-orange-400 bg-orange-50"
    },
    question: "Why is this little clay toy plough important to archaeologists?",
    options: [
      "Real wooden ploughs rotted away in the soil, so this clay toy proves Harappan farmers used ploughs to till the land",
      "It proves that Harappans had electric robotic tractors",
      "It was used as money to pay taxes to the king",
      "It was an instrument used by musicians in concerts"
    ],
    correctAnswer: "Real wooden ploughs rotted away in the soil, so this clay toy proves Harappan farmers used ploughs to till the land",
    explanation: "NCERT Class 6 Chapter 3 notes that while real wooden ploughs have decayed, toy plough models found in excavations show that ploughs were used for farming.",
    deductionGuide: "Wood rots over thousands of years, but baked clay toys survive to show us what ancient tools looked like."
  },
  {
    id: "det_007",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Gold Coin of King Samudragupta Playing the Veena",
      sourceType: "Coin",
      icon: "🪙",
      eraOrContext: "Gupta Empire, about 1650 years ago (c. 350 CE)",
      visualDescription: "A golden coin showing King Samudragupta sitting comfortably on a couch and playing a stringed musical instrument called the veena.",
      badgeColor: "border-yellow-400 bg-yellow-50"
    },
    question: "What does this coin reveal about King Samudragupta?",
    options: [
      "Besides being a mighty warrior and ruler, he was fond of music and skilled at playing the veena",
      "He was banned from ever ruling his kingdom",
      "Music was illegal throughout his empire",
      "The king could not afford to make any metal swords"
    ],
    correctAnswer: "Besides being a mighty warrior and ruler, he was fond of music and skilled at playing the veena",
    explanation: "NCERT Class 6 Chapter 10 highlights this famous coin, showing that Samudragupta was celebrated not only as a conqueror but also as an accomplished musician and poet.",
    deductionGuide: "Notice the king seated on a couch playing the musical instrument."
  },
  {
    id: "det_008",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Bead-Making Remains at Lothal",
      sourceType: "Artifact",
      icon: "💎",
      eraOrContext: "Gujarat, about 4500 years ago",
      visualDescription: "An excavated room containing chunks of red carnelian stone, stone drills, half-drilled beads, and finished shiny necklaces.",
      badgeColor: "border-rose-400 bg-rose-50"
    },
    question: "What was this building in Lothal used for?",
    options: [
      "It was a workshop where craftspersons shaped, drilled, and polished stone beads for jewelry",
      "It was a kitchen where soldiers baked bread",
      "It was a stadium for wrestling matches",
      "It was a stable for keeping royal horses"
    ],
    correctAnswer: "It was a workshop where craftspersons shaped, drilled, and polished stone beads for jewelry",
    explanation: "NCERT Class 6 describes Lothal as an important center for making objects out of stone, shell, and metal, where raw carnelian stones, drills, and finished beads were found together.",
    deductionGuide: "Finding raw stones, drills, and half-finished beads shows it was a craft workshop."
  },
  {
    id: "det_009",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Neolithic Burial with a Goat at Mehrgarh",
      sourceType: "Artifact",
      icon: "🏺",
      eraOrContext: "Near Bolan Pass (Pakistan), about 8000 years ago",
      visualDescription: "An ancient grave pit where a human skeleton was buried alongside skeletons of goats and clay pots containing food grains.",
      badgeColor: "border-stone-400 bg-stone-50"
    },
    question: "Why did the people of Mehrgarh bury goats with dead people according to NCERT Class 6?",
    options: [
      "They believed in life after death and buried food to serve the dead person in the next world",
      "They had no other place to throw garbage",
      "They used dried goats as pillows for sleeping",
      "They accidentally dropped animals into the pit"
    ],
    correctAnswer: "They believed in life after death and buried food to serve the dead person in the next world",
    explanation: "NCERT Class 6 Chapter 2 explains that several burial sites were found at Mehrgarh where dead persons were buried with goats, probably meant to serve as food in the next world.",
    deductionGuide: "Think about why valuable domestic animals and food pots were placed inside graves."
  },
  {
    id: "det_010",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Ancient Iron Axe and Ploughshare",
      sourceType: "Artifact",
      icon: "⛏️",
      eraOrContext: "Northern India, about 2500 years ago (c. 500 BCE)",
      visualDescription: "Heavy iron axe heads used for chopping wood and sharp iron ploughshares fitted onto wooden ploughs.",
      badgeColor: "border-stone-600 bg-stone-100"
    },
    question: "How did iron tools help the kingdoms of the Ganga Valley (like Magadha) grow so powerful?",
    options: [
      "Iron axes cleared dense forests for farmland, and iron ploughshares dug deep into heavy soil to produce more grain",
      "Iron tools were used as musical instruments in village bands",
      "People stopped farming and only collected wild roots",
      "Iron was used only to build toy dollhouses"
    ],
    correctAnswer: "Iron axes cleared dense forests for farmland, and iron ploughshares dug deep into heavy soil to produce more grain",
    explanation: "NCERT Class 6 explains that around 2500 years ago, iron axes helped clear forests and iron ploughshares increased crop yields, leading to surplus food and powerful kingdoms.",
    deductionGuide: "Connect the hardness of iron to clearing forests and tilling hard soil."
  },
  {
    id: "det_011",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Brick Drainage System of Mohenjo-daro",
      sourceType: "Monument",
      icon: "🚰",
      eraOrContext: "Indus Valley, about 4700 years ago",
      visualDescription: "Covered brick drains running along straight streets, connecting private house bathrooms and kitchens to main street drains with inspection holes.",
      badgeColor: "border-teal-600 bg-teal-50"
    },
    question: "What does this underground drainage network prove about Harappan cities?",
    options: [
      "The cities were very carefully planned with high standards of cleanliness, health, and sanitation",
      "The citizens drank dirty drain water every day",
      "Nobody in the city ever bathed or washed dishes",
      "The houses were built without any walls or roofs"
    ],
    correctAnswer: "The cities were very carefully planned with high standards of cleanliness, health, and sanitation",
    explanation: "NCERT Class 6 notes that Harappan houses, drains, and streets were planned and built at the same time, with covered drains and inspection holes for cleaning.",
    deductionGuide: "Notice how covered drains with inspection covers show careful city planning."
  },
  {
    id: "det_012",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Punch-Marked Silver Coin",
      sourceType: "Coin",
      icon: "🪙",
      eraOrContext: "Ancient India, about 2500 years ago (c. 500 BCE)",
      visualDescription: "A small, irregularly shaped silver piece stamped with symbols of a sun, a tree in railing, and hills.",
      badgeColor: "border-amber-400 bg-amber-50"
    },
    question: "Why are these ancient coins called 'punch-marked' coins in NCERT Class 6?",
    options: [
      "Because symbols were punched or stamped into the metal surface using dies",
      "Because people had to punch each other to win them",
      "Because they were made out of fruit punch juice",
      "Because they had round holes punched through their centers"
    ],
    correctAnswer: "Because symbols were punched or stamped into the metal surface using dies",
    explanation: "NCERT Class 6 Chapter 8 states that punch-marked coins were so called because designs were punched onto the metal (silver or copper).",
    deductionGuide: "Look at the stamped symbols punched onto the silver metal."
  },
  {
    id: "det_013",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Megalith Grave Circle with Gold Beads",
      sourceType: "Artifact",
      icon: "🪨",
      eraOrContext: "Deccan (Karnataka), about 3000 years ago",
      visualDescription: "A burial site encircled by big boulders (megaliths). One skeleton was buried with 33 gold beads and copper bangles, while other skeletons nearby had only a few clay pots.",
      badgeColor: "border-stone-500 bg-stone-50"
    },
    question: "What did archaeologists learn from the difference in items found in these graves?",
    options: [
      "There was a difference in social status and wealth; some people were rich chiefs while others were poor",
      "All people in the village were treated exactly the same",
      "People buried their gold only to play hide-and-seek",
      "The dead person with gold was a visiting Roman sailor"
    ],
    correctAnswer: "There was a difference in social status and wealth; some people were rich chiefs while others were poor",
    explanation: "NCERT Class 6 Chapter 4 explains that at Brahmagiri, one skeleton had 33 gold beads while others had only pots, showing differences in status between the rich and the poor.",
    deductionGuide: "Notice the difference between a grave with 33 gold beads vs one with only clay pots."
  },
  {
    id: "det_014",
    category: "source-detective",
    type: "source-detective",
    difficulty: "easy",
    points: 15,
    source: {
      title: "Neolithic Pit-House in Kashmir",
      sourceType: "Monument",
      icon: "🏠",
      eraOrContext: "Burzahom (Kashmir), about 4500 years ago",
      visualDescription: "A round room dug deep into the earth with dirt steps leading down, featuring cooking hearths both inside the pit and outside on the surface.",
      badgeColor: "border-emerald-600 bg-emerald-50"
    },
    question: "Why did the people of Burzahom build pit-houses dug into the ground?",
    options: [
      "To protect themselves from the freezing cold weather of Kashmir",
      "Because they did not know how to walk on flat ground",
      "To hide from swimming fish in the river",
      "Because they were afraid of sunlight"
    ],
    correctAnswer: "To protect themselves from the freezing cold weather of Kashmir",
    explanation: "NCERT Class 6 Chapter 2 describes pit-houses dug into the ground at Burzahom, which may have provided shelter in cold weather, with hearths for cooking.",
    deductionGuide: "Think about how being underground protects against biting winter winds."
  },
  {
    id: "det_015",
    category: "source-detective",
    type: "source-detective",
    difficulty: "medium",
    points: 15,
    source: {
      title: "Roman Wine Amphora Shards at Arikamedu",
      sourceType: "Pottery",
      icon: "🏺",
      eraOrContext: "Near Puducherry, about 2000 years ago",
      visualDescription: "Broken pieces of tall, two-handled clay jars (amphorae) that originally held wine or olive oil imported from the Mediterranean Sea.",
      badgeColor: "border-rose-400 bg-rose-50"
    },
    question: "What does finding Roman wine jars at the Indian port of Arikamedu prove?",
    options: [
      "Indian coastal ports had active sea trade with the Roman Empire across the ocean",
      "The Roman army conquered and ruled all of southern India",
      "Indian potters had to copy Roman pots because they had no clay",
      "The jars were carried across the ocean by flying birds"
    ],
    correctAnswer: "Indian coastal ports had active sea trade with the Roman Empire across the ocean",
    explanation: "NCERT Class 6 Chapter 8 highlights Arikamedu as a coastal port where Roman amphorae (wine jars) and Arretine pottery were found, proving vibrant trade with Rome.",
    deductionGuide: "Two-handled Mediterranean wine jars found in an Indian port point to ocean trade."
  }
];
