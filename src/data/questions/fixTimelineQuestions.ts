import { FixTimelineQuestion } from '@/types/question';

export const FIX_TIMELINE_QUESTIONS: FixTimelineQuestion[] = [
  {
    id: "fix_001",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "This horizontal timeline contains an obvious mistake! One event has been placed in the wrong chronological position.",
    timeline: [
      { id: "e1", label: "Palaeolithic Stone Tools", era: "Early Prehistory" },
      { id: "e2", label: "Neolithic Farming & Pottery", era: "c. 7000 BCE" },
      { id: "e3", label: "Invention of Modern Smartphone", era: "21st Century CE" },
      { id: "e4", label: "Mature Harappan Cities", era: "c. 2500 BCE" }
    ],
    wrongEventId: "e3",
    fixOptions: [
      { targetId: "e3", correctPlacementDescription: "'Invention of Modern Smartphone' belongs at the far end of the modern era, NOT before ancient Harappan cities!" },
      { targetId: "e1", correctPlacementDescription: "'Palaeolithic Stone Tools' belongs after Harappa" },
      { targetId: "e4", correctPlacementDescription: "'Mature Harappan Cities' should be placed before Palaeolithic" }
    ],
    correctTargetId: "e3",
    explanation: "Smartphones were invented in the 21st century CE. Placing them between the Neolithic era and ancient Harappan cities is an obvious chronological error (anachronism)!"
  },
  {
    id: "fix_002",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "Look at the BCE sequence on this timeline. Which date is placed in the WRONG chronological order?",
    timeline: [
      { id: "b1", label: "3000 BCE: Early Bronze Age", era: "3000 BCE" },
      { id: "b2", label: "1000 BCE: Painted Grey Ware", era: "1000 BCE" },
      { id: "b3", label: "2000 BCE: Late Harappan Transition", era: "2000 BCE" },
      { id: "b4", label: "500 BCE: Rise of Magadha", era: "500 BCE" }
    ],
    wrongEventId: "b3",
    fixOptions: [
      { targetId: "b3", correctPlacementDescription: "'2000 BCE' is earlier than 1000 BCE and should be placed between 3000 BCE and 1000 BCE!" },
      { targetId: "b1", correctPlacementDescription: "'3000 BCE' should be placed at the very end" },
      { targetId: "b4", correctPlacementDescription: "'500 BCE' should come before 3000 BCE" }
    ],
    correctTargetId: "b3",
    explanation: "Remember that BCE dates count DOWN towards 1 BCE! The correct order is 3000 BCE → 2000 BCE → 1000 BCE → 500 BCE. 2000 BCE was wrongly placed after 1000 BCE."
  },
  {
    id: "fix_003",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "One ancient ruler is placed completely out of sequence on this timeline of ancient Indian history:",
    timeline: [
      { id: "r1", label: "Emperor Ashoka", era: "c. 268 BCE (Mauryan)" },
      { id: "r2", label: "Chandragupta Maurya", era: "c. 322 BCE (Founder)" },
      { id: "r3", label: "Bindusara", era: "c. 297 BCE (Second King)" },
      { id: "r4", label: "Brihadratha", era: "c. 187 BCE (Last King)" }
    ],
    wrongEventId: "r1",
    fixOptions: [
      { targetId: "r1", correctPlacementDescription: "Ashoka was the grandson of Chandragupta and son of Bindusara, so he must come AFTER Bindusara!" },
      { targetId: "r2", correctPlacementDescription: "Chandragupta Maurya belongs at the end of the timeline" },
      { targetId: "r4", correctPlacementDescription: "Brihadratha belongs before Chandragupta Maurya" }
    ],
    correctTargetId: "r1",
    explanation: "The dynastic succession was Chandragupta Maurya (grandfather) → Bindusara (father) → Ashoka (grandson). Ashoka was wrongly placed before his grandfather!"
  },
  {
    id: "fix_004",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "challenge",
    points: 15,
    prompt: "Spot the mislocated event on this timeline of writing materials:",
    timeline: [
      { id: "w1", label: "Stone and Rock Inscriptions", era: "c. 2500 – 250 BCE" },
      { id: "w2", label: "Palm-Leaf Manuscripts", era: "c. 500 BCE – 1500 CE" },
      { id: "w3", label: "Digital Tablet Computer Screens", era: "c. 2010 CE" },
      { id: "w4", label: "Handmade Rag Paper Mills", era: "c. 13th Century CE" }
    ],
    wrongEventId: "w3",
    fixOptions: [
      { targetId: "w3", correctPlacementDescription: "'Digital Tablet Computer Screens' belongs in the modern 21st century CE, after medieval paper mills!" },
      { targetId: "w1", correctPlacementDescription: "'Stone Inscriptions' should be moved to the very end" },
      { targetId: "w4", correctPlacementDescription: "'Paper Mills' should come before stone carvings" }
    ],
    correctTargetId: "w3",
    explanation: "Electronic digital screens were invented in modern times and should come after medieval paper mills, not before them."
  },
  {
    id: "fix_005",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "This timeline shows the development of tools. Which item breaks the chronological progression?",
    timeline: [
      { id: "t1", label: "Crude Quartzite Handaxe", era: "Palaeolithic" },
      { id: "t2", label: "Polished Stone Celt with Smooth Edge", era: "Neolithic" },
      { id: "t3", label: "Steam Engine Powered Crane", era: "19th Century CE" },
      { id: "t4", label: "Bronze Chisel and Copper Axe", era: "Bronze Age (Harappa)" }
    ],
    wrongEventId: "t3",
    fixOptions: [
      { targetId: "t3", correctPlacementDescription: "'Steam Engine Powered Crane' was invented during the Industrial Revolution, millennia after Bronze Age chisels!" },
      { targetId: "t1", correctPlacementDescription: "'Crude Handaxe' belongs at the end" },
      { targetId: "t4", correctPlacementDescription: "'Bronze Chisel' should be placed before polished stone" }
    ],
    correctTargetId: "t3",
    explanation: "Steam-powered engines belong in the modern industrial period (1800s CE), long after the ancient Bronze Age."
  },
  {
    id: "fix_006",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "challenge",
    points: 15,
    prompt: "Examine this sequence of foreign travelers who recorded historical descriptions of India:",
    timeline: [
      { id: "tr1", label: "Megasthenes (Greek Ambassador)", era: "c. 300 BCE" },
      { id: "tr2", label: "Al-Biruni (Central Asian Scholar)", era: "c. 1020 CE" },
      { id: "tr3", label: "Faxian / Fa-Hien (Chinese Buddhist Monk)", era: "c. 400 CE" },
      { id: "tr4", label: "Ibn Battuta (Moroccan Traveler)", era: "c. 1334 CE" }
    ],
    wrongEventId: "tr2",
    fixOptions: [
      { targetId: "tr2", correctPlacementDescription: "Al-Biruni (1020 CE) arrived after Faxian (400 CE), so he is out of order between Megasthenes and Faxian!" },
      { targetId: "tr1", correctPlacementDescription: "Megasthenes should be placed after Ibn Battuta" },
      { targetId: "tr4", correctPlacementDescription: "Ibn Battuta visited India in 500 BCE" }
    ],
    correctTargetId: "tr2",
    explanation: "Chronological order of traveler visits: Megasthenes (300 BCE) → Faxian (400 CE) → Al-Biruni (1020 CE) → Ibn Battuta (1334 CE). Al-Biruni was wrongly placed before Faxian."
  },
  {
    id: "fix_007",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "One of these dates across the BCE / CE transition is placed backwards:",
    timeline: [
      { id: "d1", label: "500 BCE", era: "500 BCE" },
      { id: "d2", label: "200 BCE", era: "200 BCE" },
      { id: "d3", label: "400 BCE", era: "400 BCE" },
      { id: "d4", label: "100 CE", era: "100 CE" }
    ],
    wrongEventId: "d3",
    fixOptions: [
      { targetId: "d3", correctPlacementDescription: "'400 BCE' occurred earlier than 200 BCE, so it should sit between 500 BCE and 200 BCE!" },
      { targetId: "d1", correctPlacementDescription: "'500 BCE' belongs in the Common Era" },
      { targetId: "d4", correctPlacementDescription: "'100 CE' was earlier than 500 BCE" }
    ],
    correctTargetId: "d3",
    explanation: "Chronological timeline order: 500 BCE → 400 BCE → 200 BCE → 100 CE. 400 BCE was incorrectly placed after 200 BCE."
  },
  {
    id: "fix_008",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "easy",
    points: 15,
    prompt: "Identify the out-of-place event on this human settlement timeline:",
    timeline: [
      { id: "s1", label: "Natural Cave Shelters (Bhimbetka)", era: "Palaeolithic" },
      { id: "s2", label: "Mud & Reed Huts in Farming Hamlets (Mehrgarh)", era: "Neolithic" },
      { id: "s3", label: "Steel & Glass Skyscraper Towers", era: "Modern Era" },
      { id: "s4", label: "Planned Baked-Brick City Streets (Mohenjo-daro)", era: "Bronze Age" }
    ],
    wrongEventId: "s3",
    fixOptions: [
      { targetId: "s3", correctPlacementDescription: "'Steel & Glass Skyscraper Towers' belongs at the very end in modern times, not between mud huts and Harappa!" },
      { targetId: "s1", correctPlacementDescription: "'Natural Cave Shelters' should be placed after skyscrapers" },
      { targetId: "s4", correctPlacementDescription: "'Baked-Brick Streets' belong before cave shelters" }
    ],
    correctTargetId: "s3",
    explanation: "Skyscrapers belong to the 20th and 21st centuries CE. Their placement between ancient Neolithic huts and Bronze Age cities is an obvious chronological error."
  },
  {
    id: "fix_009",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "challenge",
    points: 15,
    prompt: "This timeline illustrates historical sources used to study ancient Indian dynasties. Spot the mistake:",
    timeline: [
      { id: "src1", label: "Harappan Pictographic Seals", era: "c. 2500 BCE" },
      { id: "src2", label: "Printed Daily Newspapers", era: "18th Century CE" },
      { id: "src3", label: "Ashokan Brahmi Rock Inscriptions", era: "c. 250 BCE" },
      { id: "src4", label: "Gupta Gold Coins (Dinaras)", era: "c. 400 CE" }
    ],
    wrongEventId: "src2",
    fixOptions: [
      { targetId: "src2", correctPlacementDescription: "'Printed Daily Newspapers' belong centuries later in modern history, not between Harappan seals and Ashoka!" },
      { targetId: "src1", correctPlacementDescription: "'Harappan Seals' were invented in 500 CE" },
      { targetId: "src4", correctPlacementDescription: "'Gupta Gold Coins' belong before Harappa" }
    ],
    correctTargetId: "src2",
    explanation: "Printed daily newspapers were not printed until the late 18th century CE, long after ancient inscriptions and coins were made."
  },
  {
    id: "fix_010",
    category: "fix-the-timeline",
    type: "fix-timeline",
    difficulty: "medium",
    points: 15,
    prompt: "Find the out-of-order date on this Common Era (CE) timeline:",
    timeline: [
      { id: "c1", label: "100 CE: Kushan Empire", era: "100 CE" },
      { id: "c2", label: "600 CE: Harshavardhana", era: "600 CE" },
      { id: "c3", label: "350 CE: Reign of Samudragupta", era: "350 CE" },
      { id: "c4", label: "1000 CE: Chola Navy Expeditions", era: "1000 CE" }
    ],
    wrongEventId: "c3",
    fixOptions: [
      { targetId: "c3", correctPlacementDescription: "'350 CE' happened before 600 CE, so it must be placed between 100 CE and 600 CE!" },
      { targetId: "c1", correctPlacementDescription: "'100 CE' belongs after 1000 CE" },
      { targetId: "c4", correctPlacementDescription: "'1000 CE' belongs in 500 BCE" }
    ],
    correctTargetId: "c3",
    explanation: "In the Common Era (CE), years count forward: 100 CE → 350 CE → 600 CE → 1000 CE. 350 CE was mistakenly inserted after 600 CE."
  }
];
