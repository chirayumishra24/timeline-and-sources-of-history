import { FixTimelineQuestion } from '@/types/question';

export const FIX_TIMELINE_QUESTIONS: FixTimelineQuestion[] = [
  {
    id: "fix_001",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "This horizontal timeline contains a big mistake! One event is placed in the wrong time order.",
    timeline: [
      { id: "e1", label: "Palaeolithic Stone Tools", era: "Old Stone Age" },
      { id: "e2", label: "Neolithic Farming & Pottery", era: "New Stone Age (c. 6000 BCE)" },
      { id: "e3", label: "Invention of Modern Smartphone", era: "21st Century CE" },
      { id: "e4", label: "Mature Harappan Cities", era: "c. 2500 BCE" }
    ],
    wrongEventId: "e3",
    fixOptions: [
      { targetId: "e3", correctPlacementDescription: "'Invention of Modern Smartphone' belongs in modern times (21st century CE), NOT between ancient farming and Harappan cities!" },
      { targetId: "e1", correctPlacementDescription: "'Palaeolithic Stone Tools' belongs after Harappa" },
      { targetId: "e4", correctPlacementDescription: "'Mature Harappan Cities' should be placed before Palaeolithic" }
    ],
    correctTargetId: "e3",
    explanation: "Smartphones were invented in the 21st century CE. Placing them between the New Stone Age and Harappan cities is an obvious mistake!"
  },
  {
    id: "fix_002",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "Look at the BCE dates on this timeline. Which date is placed in the WRONG chronological order?",
    timeline: [
      { id: "b1", label: "3000 BCE: Early Bronze Age", era: "3000 BCE" },
      { id: "b2", label: "1000 BCE: Early Iron Age", era: "1000 BCE" },
      { id: "b3", label: "2000 BCE: Late Harappan Period", era: "2000 BCE" },
      { id: "b4", label: "500 BCE: Rise of Magadha", era: "500 BCE" }
    ],
    wrongEventId: "b3",
    fixOptions: [
      { targetId: "b3", correctPlacementDescription: "'2000 BCE' is earlier than 1000 BCE, so it should be placed between 3000 BCE and 1000 BCE!" },
      { targetId: "b1", correctPlacementDescription: "'3000 BCE' should be moved to the very end" },
      { targetId: "b4", correctPlacementDescription: "'500 BCE' should come before 3000 BCE" }
    ],
    correctTargetId: "b3",
    explanation: "Remember that BCE dates count DOWN towards 1 BCE! The correct order is 3000 BCE → 2000 BCE → 1000 BCE → 500 BCE. 2000 BCE was wrongly placed after 1000 BCE."
  },
  {
    id: "fix_003",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "Look at the rulers of the Mauryan Dynasty from NCERT Chapter 7. One ruler is placed in the wrong order:",
    timeline: [
      { id: "r1", label: "Emperor Ashoka", era: "c. 268 BCE (Grandson)" },
      { id: "r2", label: "Chandragupta Maurya", era: "c. 321 BCE (Founder & Grandfather)" },
      { id: "r3", label: "Bindusara", era: "c. 297 BCE (Father)" },
      { id: "r4", label: "End of Mauryan Empire", era: "c. 185 BCE" }
    ],
    wrongEventId: "r1",
    fixOptions: [
      { targetId: "r1", correctPlacementDescription: "Ashoka was the son of Bindusara and grandson of Chandragupta Maurya, so he must come AFTER Bindusara!" },
      { targetId: "r2", correctPlacementDescription: "Chandragupta Maurya belongs at the end of the timeline" },
      { targetId: "r4", correctPlacementDescription: "The end of the empire happened before Chandragupta Maurya" }
    ],
    correctTargetId: "r1",
    explanation: "The Mauryan succession described in Class 6 NCERT was: Chandragupta Maurya (grandfather) → Bindusara (father) → Ashoka (grandson). Ashoka was wrongly placed first!"
  },
  {
    id: "fix_004",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "Spot the item placed in the wrong era on this timeline of writing materials:",
    timeline: [
      { id: "w1", label: "Carving Stone Inscriptions", era: "Ancient India" },
      { id: "w2", label: "Writing on Palm-Leaf Manuscripts", era: "Ancient India" },
      { id: "w3", label: "Using Touchscreen Tablet Computers", era: "21st Century CE" },
      { id: "w4", label: "Printing Books on Paper Presses", era: "Modern Era" }
    ],
    wrongEventId: "w3",
    fixOptions: [
      { targetId: "w3", correctPlacementDescription: "'Touchscreen Tablet Computers' belongs in the modern 21st century CE, after printed books!" },
      { targetId: "w1", correctPlacementDescription: "'Stone Inscriptions' should be moved to the very end" },
      { targetId: "w4", correctPlacementDescription: "'Printing Books' was invented before stone carving" }
    ],
    correctTargetId: "w3",
    explanation: "Digital touchscreen computers belong to the modern 21st century CE, long after paper printing was invented."
  },
  {
    id: "fix_005",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "This timeline shows the history of tools used in India. Which tool breaks the sequence?",
    timeline: [
      { id: "t1", label: "Crude Stone Handaxe", era: "Old Stone Age (Palaeolithic)" },
      { id: "t2", label: "Polished Stone Axe", era: "New Stone Age (Neolithic)" },
      { id: "t3", label: "Electric Crane & Bulldozer", era: "Modern Era" },
      { id: "t4", label: "Iron Ploughshare & Axe", era: "Ganga Valley (c. 500 BCE)" }
    ],
    wrongEventId: "t3",
    fixOptions: [
      { targetId: "t3", correctPlacementDescription: "'Electric Crane & Bulldozer' belongs in modern times, long after ancient iron tools!" },
      { targetId: "t1", correctPlacementDescription: "'Crude Stone Handaxe' belongs at the end" },
      { targetId: "t4", correctPlacementDescription: "'Iron Ploughshare' belongs before the Stone Age" }
    ],
    correctTargetId: "t3",
    explanation: "Electric machines are modern inventions. They belong at the very end of the timeline, not before ancient iron farming tools."
  },
  {
    id: "fix_006",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "Look at the order of famous travelers who visited ancient India from Class 6 NCERT:",
    timeline: [
      { id: "tr1", label: "Megasthenes (Greek ambassador to Chandragupta Maurya)", era: "c. 300 BCE" },
      { id: "tr2", label: "Xuanzang / Hiuen Tsang (Visited King Harsha & Nalanda)", era: "c. 630 CE" },
      { id: "tr3", label: "Fa Xian (Chinese pilgrim who visited in Gupta period)", era: "c. 400 CE" },
      { id: "tr4", label: "I-Qing (Chinese pilgrim who visited 50 years after Xuanzang)", era: "c. 670 CE" }
    ],
    wrongEventId: "tr2",
    fixOptions: [
      { targetId: "tr2", correctPlacementDescription: "Xuanzang (c. 630 CE) visited India AFTER Fa Xian (c. 400 CE), so he should be placed after Fa Xian!" },
      { targetId: "tr1", correctPlacementDescription: "Megasthenes should be placed after I-Qing" },
      { targetId: "tr4", correctPlacementDescription: "I-Qing visited India in 500 BCE" }
    ],
    correctTargetId: "tr2",
    explanation: "Fa Xian came to India about 1600 years ago (c. 400 CE), while Xuanzang arrived about 1400 years ago (c. 630 CE). Xuanzang was wrongly placed before Fa Xian!"
  },
  {
    id: "fix_007",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "One of these dates across the BCE and CE timeline is placed in the wrong position:",
    timeline: [
      { id: "d1", label: "500 BCE", era: "500 BCE" },
      { id: "d2", label: "200 BCE", era: "200 BCE" },
      { id: "d3", label: "400 BCE", era: "400 BCE" },
      { id: "d4", label: "100 CE", era: "100 CE" }
    ],
    wrongEventId: "d3",
    fixOptions: [
      { targetId: "d3", correctPlacementDescription: "'400 BCE' occurred earlier than 200 BCE, so it belongs between 500 BCE and 200 BCE!" },
      { targetId: "d1", correctPlacementDescription: "'500 BCE' belongs in the Common Era" },
      { targetId: "d4", correctPlacementDescription: "'100 CE' was earlier than 500 BCE" }
    ],
    correctTargetId: "d3",
    explanation: "In BCE, years count down: 500 BCE → 400 BCE → 200 BCE → 100 CE. 400 BCE was placed after 200 BCE by mistake."
  },
  {
    id: "fix_008",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "Find the out-of-order shelter on this timeline of human homes from Class 6 NCERT:",
    timeline: [
      { id: "s1", label: "Natural Rock Shelters (Bhimbetka)", era: "Old Stone Age" },
      { id: "s2", label: "Mud-Brick Houses (Mehrgarh)", era: "New Stone Age (c. 6000 BCE)" },
      { id: "s3", label: "Glass & Steel Skyscraper", era: "Modern Era" },
      { id: "s4", label: "Planned Baked-Brick City Houses (Mohenjo-daro)", era: "Harappan Era (c. 2500 BCE)" }
    ],
    wrongEventId: "s3",
    fixOptions: [
      { targetId: "s3", correctPlacementDescription: "'Glass & Steel Skyscraper' belongs in modern times, NOT between ancient mud huts and Harappan brick houses!" },
      { targetId: "s1", correctPlacementDescription: "'Natural Rock Shelters' should be placed after skyscrapers" },
      { targetId: "s4", correctPlacementDescription: "'Planned Baked-Brick Houses' belong before cave shelters" }
    ],
    correctTargetId: "s3",
    explanation: "Modern skyscrapers were built thousands of years after ancient Harappan cities. Placing them in the middle of ancient history is a chronological error."
  },
  {
    id: "fix_009",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "This timeline shows historical sources from ancient to modern India. Spot the error:",
    timeline: [
      { id: "src1", label: "Harappan Clay Seals", era: "c. 2500 BCE" },
      { id: "src2", label: "Printed Daily Newspapers", era: "Modern Era (18th Century CE)" },
      { id: "src3", label: "Ashokan Rock Edicts", era: "c. 250 BCE" },
      { id: "src4", label: "Gupta Gold Coins", era: "c. 350 CE" }
    ],
    wrongEventId: "src2",
    fixOptions: [
      { targetId: "src2", correctPlacementDescription: "'Printed Daily Newspapers' were invented in modern times, long after ancient stone inscriptions and coins!" },
      { targetId: "src1", correctPlacementDescription: "'Harappan Clay Seals' belong in the year 2000 CE" },
      { targetId: "src4", correctPlacementDescription: "'Gupta Gold Coins' belong before Harappa" }
    ],
    correctTargetId: "src2",
    explanation: "Printed daily newspapers belong in modern history, not between ancient Bronze Age seals and Emperor Ashoka's inscriptions."
  },
  {
    id: "fix_010",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "Find the out-of-order date on this Common Era (CE) timeline:",
    timeline: [
      { id: "c1", label: "100 CE: Silk Route Trade & Kushan Empire", era: "100 CE" },
      { id: "c2", label: "600 CE: King Harshavardhana", era: "600 CE" },
      { id: "c3", label: "350 CE: Reign of Samudragupta", era: "350 CE" },
      { id: "c4", label: "1000 CE: Medieval India", era: "1000 CE" }
    ],
    wrongEventId: "c3",
    fixOptions: [
      { targetId: "c3", correctPlacementDescription: "'350 CE' happened before 600 CE, so it must be placed between 100 CE and 600 CE!" },
      { targetId: "c1", correctPlacementDescription: "'100 CE' belongs after 1000 CE" },
      { targetId: "c4", correctPlacementDescription: "'1000 CE' belongs in 500 BCE" }
    ],
    correctTargetId: "c3",
    explanation: "In the Common Era (CE), years count forward: 100 CE → 350 CE → 600 CE → 1000 CE. 350 CE was accidentally placed after 600 CE."
  }
];
