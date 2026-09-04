import { OrderingQuestion, MCQQuestion } from '@/types/question';

export const TIMELINE_QUESTIONS: (OrderingQuestion | MCQQuestion)[] = [
  {
    id: "tl_001",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "What does the word 'Chronology' mean in the study of history?",
    options: [
      "Arranging historical events in the order of time they occurred",
      "Measuring the weight of archaeological artifacts",
      "Translating ancient languages into modern English",
      "Predicting future historical events"
    ],
    correctAnswer: "Arranging historical events in the order of time they occurred",
    explanation: "Chronology comes from the Greek word 'Chronos' (time). It is the practice of placing events in the exact sequence in which they happened from past to present."
  },
  {
    id: "tl_002",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these major prehistoric and historic eras from earliest to latest:",
    directionLabel: "Earliest (Past) → Latest (Recent)",
    items: [
      { id: "e1", label: "Palaeolithic (Early Stone Age)", detail: "Hunting & food gathering" },
      { id: "e2", label: "Neolithic (New Stone Age)", detail: "Beginning of settled farming" },
      { id: "e3", label: "Bronze Age Urban Civilizations", detail: "Early cities & metal smelting" },
      { id: "e4", label: "Early Iron Age", detail: "Use of iron tools and ploughs" }
    ],
    correctOrder: ["e1", "e2", "e3", "e4"],
    explanation: "Human technology progressed from chipped stone tools (Palaeolithic), to farming and polished tools (Neolithic), then copper-bronze metallurgy, and finally iron technology."
  },
  {
    id: "tl_003",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "When counting years in BCE (Before Common Era), how do the numbers change as you move closer to the present?",
    options: [
      "The numbers decrease towards 1 BCE",
      "The numbers increase continuously",
      "The numbers stay the same",
      "The numbers jump by centuries only"
    ],
    correctAnswer: "The numbers decrease towards 1 BCE",
    explanation: "In BCE (Before Common Era), years count backwards towards 1 BCE. For example, 500 BCE is earlier in time than 200 BCE."
  },
  {
    id: "tl_004",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these BCE dates from earliest in history to closest to the Common Era:",
    directionLabel: "Earliest (Furthest in Past) → Later (Nearer to Year 1)",
    items: [
      { id: "d1", label: "2500 BCE", detail: "Mature Harappan Period" },
      { id: "d2", label: "1500 BCE", detail: "Early Vedic Period" },
      { id: "d3", label: "500 BCE", detail: "Age of the Mahajanapadas" },
      { id: "d4", label: "250 BCE", detail: "Reign of Emperor Ashoka" }
    ],
    correctOrder: ["d1", "d2", "d3", "d4"],
    explanation: "Because BCE counts down towards year 1, 2500 BCE happened first, followed by 1500 BCE, 500 BCE, and then 250 BCE."
  },
  {
    id: "tl_005",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "How many years are contained in one Century?",
    options: [
      "100 years",
      "10 years",
      "1,000 years",
      "50 years"
    ],
    correctAnswer: "100 years",
    explanation: "A century is a span of 100 years. A decade is 10 years, and a millennium is 1,000 years."
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
    explanation: "The 21st century CE spans from the year 2001 CE to 2100 CE. Therefore, 2026 CE is in the 21st century."
  },
  {
    id: "tl_007",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Arrange these units of historical time from shortest duration to longest duration:",
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
    difficulty: "medium",
    points: 10,
    question: "Why do modern historians often use 'BCE' and 'CE' instead of 'BC' and 'AD'?",
    options: [
      "They mean 'Before Common Era' and 'Common Era', providing globally inclusive secular standards",
      "They represent completely different calendars with different month names",
      "They measure time in astronomical light-years rather than solar years",
      "They were invented by ancient Roman emperors for tax collection"
    ],
    correctAnswer: "They mean 'Before Common Era' and 'Common Era', providing globally inclusive secular standards",
    explanation: "BCE (Before Common Era) and CE (Common Era) correspond to the same numerical calendar as BC and AD, but offer inclusive, universal terminology adopted worldwide in social science."
  },
  {
    id: "tl_009",
    category: "timeline",
    type: "ordering",
    difficulty: "challenge",
    points: 10,
    prompt: "Arrange these milestones in human communication chronologically:",
    directionLabel: "Earliest Milestone → Most Recent",
    items: [
      { id: "c1", label: "Spoken language and rock cave paintings", detail: "e.g. Bhimbetka" },
      { id: "c2", label: "Invention of symbolic writing systems", detail: "e.g. Cuneiform, Hieroglyphs, Indus script" },
      { id: "c3", label: "Use of paper and palm-leaf manuscripts", detail: "Early handwritten books" },
      { id: "c4", label: "Invention of the printing press", detail: "Mass reproduction of texts" }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"],
    explanation: "Humans first communicated orally and painted on caves, then developed written scripts, followed by portable paper/manuscripts, and much later printing presses."
  },
  {
    id: "tl_010",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "On a standard horizontal historical timeline, where are the oldest events conventionally placed?",
    options: [
      "On the far left, moving forward in time toward the right",
      "On the far right, moving backwards toward the left",
      "In the exact middle only",
      "At random positions without sequence"
    ],
    correctAnswer: "On the far left, moving forward in time toward the right",
    explanation: "By convention in most educational timelines, time flows from left (earlier/past) to right (later/present or future)."
  },
  {
    id: "tl_011",
    category: "timeline",
    type: "ordering",
    difficulty: "medium",
    points: 10,
    prompt: "Place these historical events in their correct chronological sequence:",
    directionLabel: "Earliest (Ancient) → Most Recent",
    items: [
      { id: "ev1", label: "Construction of the Great Pyramids of Giza", detail: "c. 2550 BCE" },
      { id: "ev2", label: "Alexander the Great's campaign to the Indus", detail: "c. 326 BCE" },
      { id: "ev3", label: "Coronation of Emperor Ashoka", detail: "c. 268 BCE" },
      { id: "ev4", label: "Voyage of Vasco da Gama to Calicut", detail: "1498 CE" }
    ],
    correctOrder: ["ev1", "ev2", "ev3", "ev4"],
    explanation: "Pyramids (2550 BCE) happened first, followed by Alexander (326 BCE), Ashoka's coronation (268 BCE), and Vasco da Gama (1498 CE)."
  },
  {
    id: "tl_012",
    category: "timeline",
    type: "mcq",
    difficulty: "challenge",
    points: 10,
    question: "If King A ruled from 320 BCE to 280 BCE, for how many years did King A reign?",
    options: [
      "40 years",
      "600 years",
      "60 years",
      "20 years"
    ],
    correctAnswer: "40 years",
    explanation: "In BCE, subtract the later date from the earlier date: 320 - 280 = 40 years of reign."
  },
  {
    id: "tl_013",
    category: "timeline",
    type: "ordering",
    difficulty: "challenge",
    points: 10,
    prompt: "Order these events spanning across the BCE / CE transition:",
    directionLabel: "Past (BCE) → Present (CE)",
    items: [
      { id: "t1", label: "100 BCE", detail: "Late Republic Era" },
      { id: "t2", label: "10 BCE", detail: "Early Roman Principate" },
      { id: "t3", label: "10 CE", detail: "First Decade CE" },
      { id: "t4", label: "100 CE", detail: "Kushan & Roman Trade Era" }
    ],
    correctOrder: ["t1", "t2", "t3", "t4"],
    explanation: "Chronological flow: 100 BCE → 10 BCE → 10 CE → 100 CE. Time moves forward as BCE numbers shrink and CE numbers grow."
  },
  {
    id: "tl_014",
    category: "timeline",
    type: "mcq",
    difficulty: "medium",
    points: 10,
    question: "What is an 'Anachronism' in historical thinking?",
    options: [
      "Placing a person, object, or event in the wrong time period where it could not exist",
      "A special chemical used to preserve ancient bones",
      "A tool used to measure the depth of an archaeological trench",
      "A coin made with two different metals"
    ],
    correctAnswer: "Placing a person, object, or event in the wrong time period where it could not exist",
    explanation: "An anachronism is a chronological error — for example, showing an ancient Roman soldier checking a digital wristwatch or driving a steam locomotive!"
  },
  {
    id: "tl_015",
    category: "timeline",
    type: "mcq",
    difficulty: "easy",
    points: 10,
    question: "How is a timeline most helpful to a historian?",
    options: [
      "It visually reveals the sequence of events and how one event led to another over time",
      "It automatically proves who was good and who was bad in history",
      "It translates hieroglyphs without needing a bilingual inscription",
      "It determines the monetary value of gold coins in an antique auction"
    ],
    correctAnswer: "It visually reveals the sequence of events and how one event led to another over time",
    explanation: "Timelines provide a clear spatial map of time, helping us observe patterns of cause and effect, change, and continuity across historical periods."
  }
];
