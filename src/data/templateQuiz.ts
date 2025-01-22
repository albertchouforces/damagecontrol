// =================================================================
// QUIZ TEMPLATE - HOW TO CREATE YOUR OWN QUIZ
// =================================================================
//
// This template allows you to create any image-based multiple choice quiz.
// Follow these steps to create your own quiz:
//
// 1. PREPARE YOUR IMAGES:
//    - Place all question images in the public/images folder
//    - Recommended image dimensions: 800x600px or similar 4:3/16:9 ratio
//    - Supported formats: PNG, JPG, SVG
//    - Example path: public/images/question1.jpg will be referenced as "/images/question1.jpg"
//
// 2. CUSTOMIZE QUIZ APPEARANCE:
//    - Update QUIZ_CONFIG below with:
//      * title: Your quiz title
//      * description: Brief quiz description
//      * themeColor: Choose from: 'blue', 'green', 'sky', 'red'
//      * startScreenImage: Optional image to show on start screen (path relative to public folder)
//
// 3. ADD YOUR QUESTIONS:
//    - Follow the templateQuestions format below
//    - Each question requires:
//      * id: Unique number for each question
//      * question: The question text shown to users
//      * correctAnswer: The correct answer (exact match required)
//      * description: Brief context shown with the question
//      * fact: Interesting fact shown after answering (optional, can be empty string)
//      * imageUrl: Path to question image (relative to public folder)
//
// =================================================================

import type { QuestionData } from '../types';

// Quiz display configuration - First Quiz (Blue theme)
export const QUIZ_CONFIG = {
  title: "Signs",
  description: "",
  themeColor: 'blue' as const,  // Options: 'blue' | 'green' | 'sky' | 'red'
  quiz_name: "dc_symbol", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.svg" // Optional: Image shown on start screen
};

// Second Quiz Configuration (Red theme)
export const SECOND_QUIZ_CONFIG = {
  title: "Panel Symbols",
  description: "",
  themeColor: 'red' as const,
  quiz_name: "dc_legend",
  startScreenImage: "/images/quiz2-start.svg"
};

// First Quiz Questions
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What is this sign?",
    correctAnswer: "Cleansing Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Cleansing Station.png"
  },
  {
    id: 2,
    question: "What is this sign?",
    correctAnswer: "Closed During EFS",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Closed During EFS.png"
  },
  {
    id: 3,
    question: "What is this sign?",
    correctAnswer: "Damage Control Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Damage Control Locker.png"
  },
  {
    id: 4,
    question: "What is this sign?",
    correctAnswer: "Danger High Temperature Pressure",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Danger High Temperature Pressure.png"
  },
  {
    id: 5,
    question: "What is this sign?",
    correctAnswer: "Deep Shelter Stations",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Deep Shelter Stations.png"
  },
  {
    id: 6,
    question: "What is this sign?",
    correctAnswer: "Door Not To Be Used In The Citadel State",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Door Not To Be Used In The Citadel State.png"
  },
  {
    id: 7,
    question: "What is this sign?",
    correctAnswer: "Door To Be Used In The Citadel State",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Door To Be Used In The Citadel State.png"
  },
  {
    id: 8,
    question: "What is this sign?",
    correctAnswer: "Electrical Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Electrical Equipment Locker.png"
  },
  {
    id: 9,
    question: "What is this sign?",
    correctAnswer: "Escape Hatch Direction Of Opening (Luminous)",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Escape Hatch Direction Of Opening (Luminous).png"
  },
  {
    id: 10,
    question: "What is this sign?",
    correctAnswer: "Eye Protection Required",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Eye Protection Required.png"
  },
  {
    id: 11,
    question: "What is this sign?",
    correctAnswer: "Filtration System",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Filtration System.png"
  },
  {
    id: 12,
    question: "What is this sign?",
    correctAnswer: "Fire Fighting Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Fire Fighting Equipment Locker.png"
  },
  {
    id: 13,
    question: "What is this sign?",
    correctAnswer: "Locked Open",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Locked Open.png"
  },
  {
    id: 14,
    question: "What is this sign?",
    correctAnswer: "Locked Shut",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Locked Shut.png"
  },
  {
    id: 15,
    question: "What is this sign?",
    correctAnswer: "Magazine & Spirit Room Sprinklers",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Magazine & Spirit Room Sprinklers.png"
  },
  {
    id: 16,
    question: "What is this sign?",
    correctAnswer: "No Smoking",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/No Smoking.png"
  },
  {
    id: 17,
    question: "What is this sign?",
    correctAnswer: "No Spark Producing Equipment",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/No Spark Producing Equipment.png"
  },
  {
    id: 18,
    question: "What is this sign?",
    correctAnswer: "Open At Flying Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Open At Flying Station.png"
  },
  {
    id: 19,
    question: "What is this sign?",
    correctAnswer: "Open During EFS",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Open During EFS.png"
  },
  {
    id: 20,
    question: "What is this sign?",
    correctAnswer: "Radiac Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Radiac Equipment Locker.png"
  },
  {
    id: 21,
    question: "What is this sign?",
    correctAnswer: "Recirculation",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Recirculation.png"
  },
  {
    id: 22,
    question: "What is this sign?",
    correctAnswer: "Shut At Flying Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut At Flying Station.png"
  },
  {
    id: 23,
    question: "What is this sign?",
    correctAnswer: "Shut In Condition Alpha",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut In Condition Alpha.png"
  },
  {
    id: 24,
    question: "What is this sign?",
    correctAnswer: "Shut In Condition Bravo",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut In Condition Bravo.png"
  },
  {
    id: 25,
    question: "What is this sign?",
    correctAnswer: "Ventilation Exhaust Flow Arrow Attached",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Ventilation Exhaust Flow Arrow Attached.png"
  },
  {
    id: 26,
    question: "What is this sign?",
    correctAnswer: "Ventilation Supply Flow Arrow Attached",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Ventilation Supply Flow Arrow Attached.png"
  }
];

// Second Quiz Questions
export const secondQuizQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this indicate?",
    correctAnswer: "Advancing On The Fire",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Advancing On The Fire.png"
  },
  {
    id: 2,
    question: "What does this indicate?",
    correctAnswer: "Area Compartments Checked",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Area Compartments Checked.png"
  },
  {
    id: 3,
    question: "What does this indicate?",
    correctAnswer: "Area Overhauled",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Area Overhauled.png"
  },
  {
    id: 4,
    question: "What does this indicate?",
    correctAnswer: "Break Bypassed",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Break Bypassed.png"
  },
  {
    id: 5,
    question: "What does this indicate?",
    correctAnswer: "Broken Or Leaking",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Broken Or Leaking.png"
  },
  {
    id: 6,
    question: "What does this indicate?",
    correctAnswer: "Broken Pipe Or Line-Repaired",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Broken Pipe Or Line-Repaired.png"
  },
  {
    id: 7,
    question: "What does this indicate?",
    correctAnswer: "Compartment Lost To Sea",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Compartment Lost To Sea.png"
  },
  {
    id: 8,
    question: "What does this indicate?",
    correctAnswer: "Fire Boundary Set (Area Above Or Below)",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Fire Boundary Set (Area Above Or Below).png"
  },
  {
    id: 9,
    question: "What does this indicate?",
    correctAnswer: "Fire Boundary Set (Area Surrounding Fire (FWD, AFT))",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Fire Boundary Set (Area Surrounding Fire (FWD, AFT)).png"
  },
  {
    id: 10,
    question: "What is this sign?",
    correctAnswer: "Fire Out-Overhauled",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Fire Out-Overhauled.png"
  },
  {
    id: 11,
    question: "What does this indicate?",
    correctAnswer: "Fire Reported - Include Class If Known",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Fire Reported - Include Class If Known.png"
  },
  {
    id: 12,
    question: "What does this indicate?",
    correctAnswer: "Flood Boundary",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Flood Boundary.png"
  },
  {
    id: 13,
    question: "What does this indicate?",
    correctAnswer: "Flooding Reported",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Flooding Reported.png"
  },
  {
    id: 14,
    question: "What does this indicate?",
    correctAnswer: "Hole & Rupture Repaired",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Hole & Rupture Repaired.png"
  },
  {
    id: 15,
    question: "What does this indicate?",
    correctAnswer: "Hole & Rupture Under Repair",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Hole & Rupture Under Repair.png"
  },
  {
    id: 16,
    question: "What does this indicate?",
    correctAnswer: "Hole In Bulkhead",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Hole In Bulkhead.png"
  },
  {
    id: 17,
    question: "What does this indicate?",
    correctAnswer: "Hole In Deck",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Hole In Deck.png"
  },
  {
    id: 18,
    question: "What does this indicate?",
    correctAnswer: "Isolated",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Isolated.png"
  },
  {
    id: 19,
    question: "What does this indicate?",
    correctAnswer: "Metal Shoring",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Metal Shoring.png"
  },
  {
    id: 20,
    question: "What does this indicate?",
    correctAnswer: "Plotting Zone Fires",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Plotting Zone Fires.png"
  },
  {
    id: 21,
    question: "What does this indicate?",
    correctAnswer: "Power Isolated Fitted System Fire",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Power Isolated Fitted System Fire.png"
  },
  {
    id: 22,
    question: "What does this indicate?",
    correctAnswer: "Power Isolated Fitted System Flooding",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Power Isolated Fitted System Flooding.png"
  },
  {
    id: 23,
    question: "What does this indicate?",
    correctAnswer: "Pumped Out",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Pumped Out.png"
  },
  {
    id: 24,
    question: "What does this indicate?",
    correctAnswer: "Pumping Out",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Pumping Out.png"
  },
  {
    id: 25,
    question: "What does this indicate?",
    correctAnswer: "Run Commence",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Run Commence.png"
  },
  {
    id: 26,
    question: "What does this indicate?",
    correctAnswer: "Run Complete",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Run Complete.png"
  },
  {
    id: 27,
    question: "What does this indicate?",
    correctAnswer: "Run Energized",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Run Energized.png"
  },
  {
    id: 28,
    question: "What does this indicate?",
    correctAnswer: "Sentry Posted Shoring Complete",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Sentry Posted Shoring Complete.png"
  },
  {
    id: 29,
    question: "What does this indicate?",
    correctAnswer: "Sentry Posted-Commenced Adjacent Compt. RDS",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Sentry Posted-Commenced Adjacent Compt. RDS.png"
  },
  {
    id: 30,
    question: "What does this indicate?",
    correctAnswer: "Shoring Commenced",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Shoring Commenced.png"
  },
  {
    id: 31,
    question: "What does this indicate?",
    correctAnswer: "Structural Damage Repaired",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Structural Damage Repaired.png"
  },
  {
    id: 32,
    question: "What does this indicate?",
    correctAnswer: "Structural Damage Under Repair",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Structural Damage Under Repair.png"
  },
  {
    id: 33,
    question: "What does this indicate?",
    correctAnswer: "Structure Damage Reported",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Structure Damage Reported.png"
  },
  {
    id: 34,
    question: "What does this indicate?",
    correctAnswer: "Flooding Depth Meters",
    description: "",
    fact: "",
    imageUrl: "/images/legends/Flooding Depth Meters.png"
  }
];

// =================================================================
// TIPS FOR GOOD QUESTIONS
// =================================================================
// 1. Use clear, high-quality images
// 2. Keep question text concise and specific
// 3. Ensure correct answers are unambiguous
// 4. Add interesting facts to make the quiz educational
// 5. Use consistent formatting for similar questions
// 6. Test your image paths before deploying
// =================================================================
