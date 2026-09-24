import { BeforeAfterQuestion } from '@/types/question';

export const BEFORE_AFTER_QUESTIONS: BeforeAfterQuestion[] = [
  {
    id: "ba_001",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare these two major discoveries in early human history:",
    eventA: {
      label: "Discovery and use of Fire",
      detail: "Old Stone Age (Palaeolithic)"
    },
    eventB: {
      label: "Making pots on the Potter's Wheel",
      detail: "New Stone Age (Neolithic)"
    },
    question: "Which milestone occurred EARLIER in human history?",
    options: [
      "Discovery and use of Fire",
      "Making pots on the Potter's Wheel"
    ],
    correctAnswer: "Discovery and use of Fire",
    explanation: "Traces of ash found in Kurnool caves show early humans discovered fire hundreds of thousands of years ago, long before the potter's wheel was invented."
  },
  {
    id: "ba_002",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Consider these two major historical periods from Class 6 NCERT:",
    eventA: {
      label: "The Indus Valley (Harappan) Cities",
      detail: "About 4700 years ago (c. 2500 BCE)"
    },
    eventB: {
      label: "The Reign of Emperor Ashoka",
      detail: "About 2300 years ago (c. 250 BCE)"
    },
    question: "Which of these took place EARLIER in time?",
    options: [
      "The Indus Valley (Harappan) Cities",
      "The Reign of Emperor Ashoka"
    ],
    correctAnswer: "The Indus Valley (Harappan) Cities",
    explanation: "The Harappan civilization flourished around 2500 BCE, more than two thousand years before Emperor Ashoka ruled the Mauryan Empire."
  },
  {
    id: "ba_003",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare two ways of finding food in human history:",
    eventA: {
      label: "Hunting wild animals and gathering fruits and roots",
      detail: "Nomadic life of early humans"
    },
    eventB: {
      label: "Growing crops and living in settled farming villages (like Mehrgarh)",
      detail: "Beginning of agriculture"
    },
    question: "Which way of living came FIRST for humans?",
    options: [
      "Hunting wild animals and gathering fruits and roots",
      "Growing crops and living in settled farming villages (like Mehrgarh)"
    ],
    correctAnswer: "Hunting wild animals and gathering fruits and roots",
    explanation: "Early humans lived as hunter-gatherers for thousands of years before they learned to farm wheat and barley and settle in villages."
  },
  {
    id: "ba_004",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two ways of producing books:",
    eventA: {
      label: "Writing manuscripts by hand on palm leaves and birch bark",
      detail: "Ancient India"
    },
    eventB: {
      label: "Printing books using modern printing presses",
      detail: "Modern era"
    },
    question: "Which method of bookmaking was used EARLIER?",
    options: [
      "Writing manuscripts by hand on palm leaves and birch bark",
      "Printing books using modern printing presses"
    ],
    correctAnswer: "Writing manuscripts by hand on palm leaves and birch bark",
    explanation: "Ancient Indians wrote manuscripts by hand on palm leaves and birch bark centuries before modern printing presses were invented."
  },
  {
    id: "ba_005",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Examine two dates on the timeline:",
    eventA: {
      label: "500 BCE",
      detail: "Time of the Mahajanapadas and the Buddha"
    },
    eventB: {
      label: "200 BCE",
      detail: "Post-Mauryan era"
    },
    question: "Which date is FURTHEST in the past (happened EARLIER)?",
    options: [
      "500 BCE",
      "200 BCE"
    ],
    correctAnswer: "500 BCE",
    explanation: "In BCE (Before Common Era), larger numbers happened earlier in time. 500 BCE occurred 300 years before 200 BCE."
  },
  {
    id: "ba_006",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two tool materials used by early humans:",
    eventA: {
      label: "Using stone tools (like handaxes, scrapers, and microliths)",
      detail: "Stone Age"
    },
    eventB: {
      label: "Using iron ploughshares and iron axes to farm",
      detail: "Iron Age (c. 500 BCE)"
    },
    question: "Which tool technology did humans use EARLIER?",
    options: [
      "Using stone tools (like handaxes, scrapers, and microliths)",
      "Using iron ploughshares and iron axes to farm"
    ],
    correctAnswer: "Using stone tools (like handaxes, scrapers, and microliths)",
    explanation: "Humans relied on stone tools for hunting and chopping during the Stone Age, thousands of years before they discovered how to smelt iron."
  },
  {
    id: "ba_007",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare two dates across the BCE and CE boundary:",
    eventA: {
      label: "50 BCE",
      detail: "1st Century BCE"
    },
    eventB: {
      label: "50 CE",
      detail: "1st Century CE"
    },
    question: "Which event occurred LATER in history (closer to today)?",
    options: [
      "50 CE",
      "50 BCE"
    ],
    correctAnswer: "50 CE",
    explanation: "50 CE is 100 years later than 50 BCE. Time moves forward from BCE to CE."
  },
  {
    id: "ba_008",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare two famous travelers who visited ancient India:",
    eventA: {
      label: "Megasthenes (Greek ambassador to Chandragupta Maurya)",
      detail: "About 2300 years ago (c. 300 BCE)"
    },
    eventB: {
      label: "Xuanzang / Hiuen Tsang (Chinese pilgrim to King Harsha's court)",
      detail: "About 1400 years ago (c. 630 CE)"
    },
    question: "Who visited India EARLIER?",
    options: [
      "Megasthenes",
      "Xuanzang / Hiuen Tsang"
    ],
    correctAnswer: "Megasthenes",
    explanation: "Megasthenes visited the Mauryan capital Pataliputra around 300 BCE, more than 900 years before Xuanzang traveled to India in the 7th century CE."
  },
  {
    id: "ba_009",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare these two periods of the human past:",
    eventA: {
      label: "Prehistory",
      detail: "The period before written records were invented"
    },
    eventB: {
      label: "History",
      detail: "The period studied using written records and books"
    },
    question: "Which period occurred FIRST in time?",
    options: [
      "Prehistory",
      "History"
    ],
    correctAnswer: "Prehistory",
    explanation: "Prehistory is the long era before writing was invented. Once people began writing and records survived, the period is called History."
  },
  {
    id: "ba_010",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare these two forms of transport:",
    eventA: {
      label: "Bullock carts with wooden wheels",
      detail: "Harappan civilization (clay toy carts found)"
    },
    eventB: {
      label: "Steam-powered railway trains",
      detail: "Modern era"
    },
    question: "Which vehicle was invented EARLIER?",
    options: [
      "Bullock carts with wooden wheels",
      "Steam-powered railway trains"
    ],
    correctAnswer: "Bullock carts with wooden wheels",
    explanation: "Clay toy carts found in Harappan cities prove that wooden wheeled carts pulled by oxen were used over 4,000 years ago, long before trains existed."
  },
  {
    id: "ba_011",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare two ancient city regions in India from Class 6 NCERT:",
    eventA: {
      label: "The Indus Valley Cities (Mohenjo-daro & Harappa)",
      detail: "About 4700 years ago (c. 2500 BCE)"
    },
    eventB: {
      label: "The Ganga Valley Cities (like Rajagriha and Pataliputra in Magadha)",
      detail: "About 2500 years ago (c. 500 BCE)"
    },
    question: "Which cities were built EARLIER in Indian history?",
    options: [
      "The Indus Valley Cities (Mohenjo-daro & Harappa)",
      "The Ganga Valley Cities (like Rajagriha and Pataliputra in Magadha)"
    ],
    correctAnswer: "The Indus Valley Cities (Mohenjo-daro & Harappa)",
    explanation: "The earliest cities in India grew on the banks of the Indus River about 4700 years ago, more than 2000 years before cities developed along the River Ganga."
  },
  {
    id: "ba_012",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two methods of trade:",
    eventA: {
      label: "Barter system (exchanging grain or cattle directly for pots or cloth)",
      detail: "Before metallic coins were invented"
    },
    eventB: {
      label: "Punch-marked coins (stamped silver and copper pieces)",
      detail: "About 2500 years ago"
    },
    question: "Which method of trade was used EARLIER?",
    options: [
      "Barter system (exchanging grain or cattle directly for pots or cloth)",
      "Punch-marked coins (stamped silver and copper pieces)"
    ],
    correctAnswer: "Barter system (exchanging grain or cattle directly for pots or cloth)",
    explanation: "Before metal coins were minted, people traded through the barter system, directly exchanging cows, grain, and handmade goods."
  }
];
