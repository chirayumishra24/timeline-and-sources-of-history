import { BeforeAfterQuestion } from '@/types/question';

export const BEFORE_AFTER_QUESTIONS: BeforeAfterQuestion[] = [
  {
    id: "ba_001",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare these two technological breakthroughs in human prehistory:",
    eventA: {
      label: "Discovery and controlled use of Fire",
      detail: "Early Stone Age (Palaeolithic)"
    },
    eventB: {
      label: "Invention of the Potter's Wheel",
      detail: "New Stone Age / Bronze Age"
    },
    question: "Which milestone occurred EARLIER in human history?",
    options: [
      "Discovery and controlled use of Fire",
      "Invention of the Potter's Wheel"
    ],
    correctAnswer: "Discovery and controlled use of Fire",
    explanation: "Controlled fire was mastered by early humans hundreds of thousands of years ago in the Palaeolithic era, whereas the potter's wheel emerged much later in the Neolithic/Bronze Age."
  },
  {
    id: "ba_002",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Consider these two major historical periods on the Indian subcontinent:",
    eventA: {
      label: "The Indus Valley (Harappan) Civilization",
      detail: "c. 2600 BCE – 1900 BCE (Bronze Age)"
    },
    eventB: {
      label: "The Reign of Emperor Ashoka",
      detail: "c. 268 BCE – 232 BCE (Mauryan Empire)"
    },
    question: "Which of these took place EARLIER in time?",
    options: [
      "The Indus Valley (Harappan) Civilization",
      "The Reign of Emperor Ashoka"
    ],
    correctAnswer: "The Indus Valley (Harappan) Civilization",
    explanation: "The Indus Valley Civilization flourished around 2500 BCE, more than two thousand years before Emperor Ashoka ruled in the 3rd century BCE."
  },
  {
    id: "ba_003",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare two human subsistence methods:",
    eventA: {
      label: "Nomadic Hunting and Wild Plant Gathering",
      detail: "Foraging in natural habitats"
    },
    eventB: {
      label: "Settled Agriculture and Grain Storage in Villages",
      detail: "Farming domesticated wheat & barley"
    },
    question: "Which way of living came FIRST for human ancestors?",
    options: [
      "Nomadic Hunting and Wild Plant Gathering",
      "Settled Agriculture and Grain Storage in Villages"
    ],
    correctAnswer: "Nomadic Hunting and Wild Plant Gathering",
    explanation: "Humans lived exclusively as nomadic hunter-gatherers for over 95% of human history before agriculture was invented around 10,000–8,000 BCE in the Neolithic."
  },
  {
    id: "ba_004",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two writing and recording materials:",
    eventA: {
      label: "Inscribing on Stone Slabs and Wet Clay Tablets",
      detail: "Ancient Epigraphy & Cuneiform"
    },
    eventB: {
      label: "Printing Books using Wooden Movable Type / Modern Presses",
      detail: "Early Modern Era"
    },
    question: "Which writing surface was developed EARLIER?",
    options: [
      "Inscribing on Stone Slabs and Wet Clay Tablets",
      "Printing Books using Wooden Movable Type / Modern Presses"
    ],
    correctAnswer: "Inscribing on Stone Slabs and Wet Clay Tablets",
    explanation: "Ancient scribes carved on stone and pressed reeds into wet clay millennia before movable type printing was invented."
  },
  {
    id: "ba_005",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Examine two dates on the calendar timeline:",
    eventA: {
      label: "300 BCE",
      detail: "Early Mauryan Empire"
    },
    eventB: {
      label: "100 BCE",
      detail: "Shunga & Satavahana Era"
    },
    question: "Which date is FURTHEST in the past (happened EARLIER)?",
    options: [
      "300 BCE",
      "100 BCE"
    ],
    correctAnswer: "300 BCE",
    explanation: "In BCE (Before Common Era), higher numbers are further in the past. 300 BCE occurred 200 years before 100 BCE."
  },
  {
    id: "ba_006",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two metallurgy milestones in human technology:",
    eventA: {
      label: "Copper and Bronze Smelting (Bronze Age)",
      detail: "Alloying copper with tin"
    },
    eventB: {
      label: "Widespread Iron Smelting and Forging (Iron Age)",
      detail: "High-temperature kilns for iron ore"
    },
    question: "Which metal technology did human civilizations master EARLIER?",
    options: [
      "Copper and Bronze Smelting (Bronze Age)",
      "Widespread Iron Smelting and Forging (Iron Age)"
    ],
    correctAnswer: "Copper and Bronze Smelting (Bronze Age)",
    explanation: "Copper and bronze melt at lower temperatures than iron and were worked in the Chalcolithic and Bronze Ages centuries before the Iron Age."
  },
  {
    id: "ba_007",
    category: "before-or-after",
    type: "before-after",
    difficulty: "challenge",
    points: 10,
    prompt: "Compare two historic events across the Common Era divide:",
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
    prompt: "Compare two famous ancient travelers to India:",
    eventA: {
      label: "Megasthenes (Greek ambassador to Chandragupta Maurya)",
      detail: "c. 300 BCE"
    },
    eventB: {
      label: "Xuanzang / Hiuen Tsang (Chinese Buddhist pilgrim to Harsha's court)",
      detail: "c. 630 CE"
    },
    question: "Who visited the Indian subcontinent EARLIER?",
    options: [
      "Megasthenes",
      "Xuanzang / Hiuen Tsang"
    ],
    correctAnswer: "Megasthenes",
    explanation: "Megasthenes arrived around 300 BCE during the Mauryan period, almost a thousand years before Xuanzang arrived in the 7th century CE."
  },
  {
    id: "ba_009",
    category: "before-or-after",
    type: "before-after",
    difficulty: "easy",
    points: 10,
    prompt: "Compare these two periods of human history:",
    eventA: {
      label: "Prehistory",
      detail: "Period before written records were invented"
    },
    eventB: {
      label: "History",
      detail: "Period studied using written records and literature"
    },
    question: "Which period occurred FIRST in time?",
    options: [
      "Prehistory",
      "History"
    ],
    correctAnswer: "Prehistory",
    explanation: "Prehistory is the long era before written records. Once written scripts developed and survive for historians to read, the historical period begins."
  },
  {
    id: "ba_010",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare two developments in ancient transportation:",
    eventA: {
      label: "Solid Wooden Wheeled Carts pulled by Oxen",
      detail: "Harappan & Mesopotamian Bronze Age"
    },
    eventB: {
      label: "Steam-powered Railway Locomotives",
      detail: "Industrial Revolution (19th Century CE)"
    },
    question: "Which transportation invention appeared EARLIER?",
    options: [
      "Solid Wooden Wheeled Carts pulled by Oxen",
      "Steam-powered Railway Locomotives"
    ],
    correctAnswer: "Solid Wooden Wheeled Carts pulled by Oxen",
    explanation: "Animal-drawn wheeled carts were used over 4,000 years ago in Bronze Age civilizations, whereas steam locomotives were invented in the 1800s CE."
  },
  {
    id: "ba_011",
    category: "before-or-after",
    type: "before-after",
    difficulty: "challenge",
    points: 10,
    prompt: "Compare two ancient Indian urban phases:",
    eventA: {
      label: "First Urbanization (The Indus Valley Cities)",
      detail: "c. 2600 BCE – 1900 BCE (Northwest)"
    },
    eventB: {
      label: "Second Urbanization (The Ganga Valley Mahajanapada Cities)",
      detail: "c. 600 BCE – 300 BCE (Northern India)"
    },
    question: "Which urbanization took place EARLIER in time?",
    options: [
      "First Urbanization (The Indus Valley Cities)",
      "Second Urbanization (The Ganga Valley Mahajanapada Cities)"
    ],
    correctAnswer: "First Urbanization (The Indus Valley Cities)",
    explanation: "The Bronze Age cities of the Indus (Mohenjo-daro, Harappa) represent the First Urbanization, roughly 2,000 years before the Second Urbanization in the Ganga Valley."
  },
  {
    id: "ba_012",
    category: "before-or-after",
    type: "before-after",
    difficulty: "medium",
    points: 10,
    prompt: "Compare these two currency systems:",
    eventA: {
      label: "Barter System (Direct exchange of goods like grain or cattle for cloth)",
      detail: "Pre-monetary communities"
    },
    eventB: {
      label: "Standardized Metallic Coins stamped by State Authorities",
      detail: "Punch-marked coins & royal coinage"
    },
    question: "Which method of commerce was practiced EARLIER?",
    options: [
      "Barter System (Direct exchange of goods like grain or cattle for cloth)",
      "Standardized Metallic Coins stamped by State Authorities"
    ],
    correctAnswer: "Barter System (Direct exchange of goods like grain or cattle for cloth)",
    explanation: "Before metallic coins were minted in the 1st millennium BCE, people exchanged cattle, grain, salt, and crafted goods directly through the barter system."
  }
];
