import { OrderingQuestion, MCQQuestion } from '@/types/question';

export const TIMELINE_QUESTIONS: (OrderingQuestion | MCQQuestion)[] = [
  {
    id: "tl_001",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "What does 'Chronology' mean in the study of history?",
    options: [
      "Arranging historical events in the order of time they occurred",
      "Finding out where an ancient city was located",
      "Measuring how heavy an ancient pot is",
      "Translating old languages into modern English"
    ],
    correctAnswer: "Arranging historical events in the order of time they occurred",
    explanation: "Chronology means putting events in time order — from what happened first to what happened next."
  },
  {
    id: "tl_002",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these major stages of human history from earliest to latest:",
    directionLabel: "Earliest (Past) → Latest (Recent)",
    items: [
      { id: "e1", label: "Palaeolithic (Old Stone Age)", detail: "Hunter-gatherers using crude stone tools" },
      { id: "e2", label: "Mesolithic (Middle Stone Age)", detail: "Use of tiny stone tools called microliths" },
      { id: "e3", label: "Neolithic (New Stone Age)", detail: "First farmers and herders (e.g., Mehrgarh)" },
      { id: "e4", label: "Harappan Bronze Age", detail: "First planned cities (Mohenjo-daro & Harappa)" }
    ],
    correctOrder: ["e1", "e2", "e3", "e4"],
    explanation: "Humans first lived as hunter-gatherers (Old Stone Age), then made tiny tools (Mesolithic), started farming in villages (Neolithic), and later built planned cities (Harappan Bronze Age)."
  },
  {
    id: "tl_003",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "When counting dates in BCE (Before Common Era), how do the years count as we move closer to the present?",
    options: [
      "The numbers decrease (count backwards towards 1 BCE)",
      "The numbers increase continuously",
      "The numbers stay exactly the same",
      "The numbers change every 10 years only"
    ],
    correctAnswer: "The numbers decrease (count backwards towards 1 BCE)",
    explanation: "In BCE, years count backwards down towards 1 BCE. For example, 500 BCE happened earlier than 200 BCE."
  },
  {
    id: "tl_004",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these BCE dates from earliest in history to closest to the Common Era:",
    directionLabel: "Earliest in Past → Later (Nearer to Year 1)",
    items: [
      { id: "d1", label: "2500 BCE", detail: "Harappan cities flourished" },
      { id: "d2", label: "1500 BCE", detail: "Earliest composition of the Rigveda" },
      { id: "d3", label: "500 BCE", detail: "Age of the Mahajanapadas (Magadha)" },
      { id: "d4", label: "250 BCE", detail: "Reign of Emperor Ashoka" }
    ],
    correctOrder: ["d1", "d2", "d3", "d4"],
    explanation: "In BCE, larger numbers represent earlier times in history: 2500 BCE → 1500 BCE → 500 BCE → 250 BCE."
  },
  {
    id: "tl_005",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "How many years are in one Century?",
    options: [
      "100 years",
      "10 years",
      "1,000 years",
      "50 years"
    ],
    correctAnswer: "100 years",
    explanation: "A century is 100 years. A decade is 10 years, and a millennium is 1,000 years."
  },
  {
    id: "tl_006",
    category: "timeline",
    type: "mcq",
    difficulty: "medium",
    points: 10,
    question: "The year 2026 CE belongs to which century?",
    options: [
      "21st Century CE",
      "20th Century CE",
      "19th Century CE",
      "22nd Century CE"
    ],
    correctAnswer: "21st Century CE",
    explanation: "The 21st Century spans from 2001 to 2100 CE. Therefore, the year 2026 is in the 21st century."
  },
  {
    id: "tl_007",
    category: "timeline",
    type: "ordering",
    difficulty: "easy",
    points: 10,
    prompt: "Arrange these units of time from shortest to longest:",
    directionLabel: "Shortest Duration → Longest Duration",
    items: [
      { id: "u1", label: "Year", detail: "365 days" },
      { id: "u2", label: "Decade", detail: "10 years" },
      { id: "u3", label: "Century", detail: "100 years" },
      { id: "u4", label: "Millennium", detail: "1,000 years" }
    ],
    correctOrder: ["u1", "u2", "u3", "u4"],
    explanation: "Year (1 year) < Decade (10 years) < Century (100 years) < Millennium (1,000 years)."
  },
  {
    id: "tl_008",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "In history books, what do the abbreviations 'BCE' and 'CE' stand for?",
    options: [
      "'Before Common Era' and 'Common Era'",
      "'Before Century Ended' and 'Current Era'",
      "'British Colonial Era' and 'Central Empire'",
      "'Before Cities Existed' and 'Cities Era'"
    ],
    correctAnswer: "'Before Common Era' and 'Common Era'",
    explanation: "BCE stands for Before Common Era (same as BC) and CE stands for Common Era (same as AD)."
  },
  {
    id: "tl_009",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these ways humans recorded information from earliest in history to most recent:",
    directionLabel: "Earliest Way → Most Recent",
    items: [
      { id: "c1", label: "Cave paintings on rock walls", detail: "e.g., Bhimbetka caves" },
      { id: "c2", label: "Seals and stone inscriptions", detail: "e.g., Harappan seals & Ashokan pillars" },
      { id: "c3", label: "Handwritten manuscripts", detail: "Written on palm leaves and birch bark" },
      { id: "c4", label: "Printed books", detail: "Printed on paper using printing machines" }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"],
    explanation: "Humans first painted on cave walls, then carved seals and stone inscriptions, later wrote manuscripts by hand on leaves and bark, and finally printed books."
  },
  {
    id: "tl_010",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "On a standard horizontal timeline, where do we place the oldest events from the past?",
    options: [
      "On the left side, moving forward in time towards the right",
      "On the right side, moving backwards towards the left",
      "Only in the exact center",
      "Anywhere at random"
    ],
    correctAnswer: "On the left side, moving forward in time towards the right",
    explanation: "A horizontal timeline places older events on the left and moves forward in time towards the right."
  },
  {
    id: "tl_011",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these famous events from NCERT Class 6 History in chronological order:",
    directionLabel: "Earliest in Past → Most Recent",
    items: [
      { id: "ev1", label: "First farming and village life at Mehrgarh", detail: "About 8000 years ago (c. 6000 BCE)" },
      { id: "ev2", label: "Earliest planned cities of Harappa", detail: "About 4700 years ago (c. 2500 BCE)" },
      { id: "ev3", label: "Composition of the Rigveda", detail: "About 3500 years ago (c. 1500 BCE)" },
      { id: "ev4", label: "Emperor Ashoka rules and issues edicts", detail: "About 2300 years ago (c. 250 BCE)" }
    ],
    correctOrder: ["ev1", "ev2", "ev3", "ev4"],
    explanation: "First came farming at Mehrgarh (8000 years ago), then Harappan cities (4700 years ago), followed by the Rigveda (3500 years ago), and Emperor Ashoka (2300 years ago)."
  },
  {
    id: "tl_012",
    category: "timeline",
    type: "mcq",
    difficulty: "medium",
    points: 10,
    question: "If King Chandragupta Maurya began ruling in 321 BCE and ruled until 297 BCE, for how many years did he rule?",
    options: [
      "24 years",
      "618 years",
      "50 years",
      "12 years"
    ],
    correctAnswer: "24 years",
    explanation: "In BCE, subtract the later year from the earlier year: 321 - 297 = 24 years of rule."
  },
  {
    id: "tl_013",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Order these dates across the BCE and CE boundary from past to present:",
    directionLabel: "Past (BCE) → Present (CE)",
    items: [
      { id: "t1", label: "300 BCE", detail: "Time of the Mauryan Empire" },
      { id: "t2", label: "50 BCE", detail: "Late BCE period" },
      { id: "t3", label: "50 CE", detail: "Early Common Era" },
      { id: "t4", label: "350 CE", detail: "Time of the Gupta Empire" }
    ],
    correctOrder: ["t1", "t2", "t3", "t4"],
    explanation: "Time moves forward from BCE to CE: 300 BCE → 50 BCE → 50 CE → 350 CE."
  },
  {
    id: "tl_014",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "What is an 'Anachronism' in history?",
    options: [
      "Showing something in a time period where it did not exist (like an ancient king using a smartphone)",
      "A tool used to dig up old pots from the soil",
      "A coin that has two different languages on it",
      "A special rock used to make cave paintings"
    ],
    correctAnswer: "Showing something in a time period where it did not exist (like an ancient king using a smartphone)",
    explanation: "An anachronism is a chronological mistake — such as showing an ancient Harappan farmer riding in an airplane or using a mobile phone!"
  },
  {
    id: "tl_015",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "Why do we use a timeline in history?",
    options: [
      "It helps us see the order in which events happened and understand how life changed over time",
      "It tells us the exact price of gold in ancient markets",
      "It automatically translates ancient languages",
      "It proves whether a king was good or bad"
    ],
    correctAnswer: "It helps us see the order in which events happened and understand how life changed over time",
    explanation: "A timeline helps us arrange events in order, showing what happened first, what happened next, and how civilizations developed."
  }
];
