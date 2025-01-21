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
//      * startScreenImage: Optional image to show on start screen
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
  title: "Symbols",
  description: "Test your knowledge of Damage Control symbols (26 questions)",
  themeColor: 'blue' as const,  // Options: 'blue' | 'green' | 'sky' | 'red'
  quiz_name: "dc_symbol", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.svg", // Optional: Image shown on start screen
  totalQuestions: 26 // Adding explicit question count
};

// First Quiz Questions - Symbols (26 questions)
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What is this symbol?",
    correctAnswer: "Cleansing Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Cleansing Station.png"
  },
  {
    id: 2,
    question: "What is this symbol?",
    correctAnswer: "Closed During EPS",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Closed During EPS.png"
  },
  {
    id: 3,
    question: "What is this symbol?",
    correctAnswer: "Damage Control Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Damage Control Locker.png"
  },
  {
    id: 4,
    question: "What is this symbol?",
    correctAnswer: "Danger High Temperature Pressure",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Danger High Temperature Pressure.png"
  },
  {
    id: 5,
    question: "What is this symbol?",
    correctAnswer: "Deep Shelter Stations",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Deep Shelter Stations.png"
  },
  {
    id: 6,
    question: "What is this symbol?",
    correctAnswer: "Door Not To Be Used In The Citadel State",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Door Not To Be Used In The Citadel State.png"
  },
  {
    id: 7,
    question: "What is this symbol?",
    correctAnswer: "Door To Be Used In The Citadel State",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Door To Be Used In The Citadel State.png"
  },
  {
    id: 8,
    question: "What is this symbol?",
    correctAnswer: "Electrical Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Electrical Equipment Locker.png"
  },
  {
    id: 9,
    question: "What is this symbol?",
    correctAnswer: "Escape Hatch Direction Of Opening (Luminous)",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Escape Hatch Direction Of Opening (Luminous).png"
  },
  {
    id: 10,
    question: "What is this symbol?",
    correctAnswer: "Eye Protection Required",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Eye Protection Required.png"
  },
  {
    id: 11,
    question: "What is this symbol?",
    correctAnswer: "Filtration System",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Filtration System.png"
  },
  {
    id: 12,
    question: "What is this symbol?",
    correctAnswer: "Fire Fighting Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Fire Fighting Equipment Locker.png"
  },
  {
    id: 13,
    question: "What is this symbol?",
    correctAnswer: "Locked Open",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Locked Open.png"
  },
  {
    id: 14,
    question: "What is this symbol?",
    correctAnswer: "Locked Shut",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Locked Shut.png"
  },
  {
    id: 15,
    question: "What is this symbol?",
    correctAnswer: "Magazine & Spirit Room Sprinklers",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Magazine & Spirit Room Sprinklers.png"
  },
  {
    id: 16,
    question: "What is this symbol?",
    correctAnswer: "No Smoking",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/No Smoking.png"
  },
  {
    id: 17,
    question: "What is this symbol?",
    correctAnswer: "No Spark Producing Equipment",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/No Spark Producing Equipment.png"
  },
  {
    id: 18,
    question: "What is this symbol?",
    correctAnswer: "Open At Flying Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Open At Flying Station.png"
  },
  {
    id: 19,
    question: "What is this symbol?",
    correctAnswer: "Open During EPS",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Open During EPS.png"
  },
  {
    id: 20,
    question: "What is this symbol?",
    correctAnswer: "Radiac Equipment Locker",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Radiac Equipment Locker.png"
  },
  {
    id: 21,
    question: "What is this symbol?",
    correctAnswer: "Recirculation",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Recirculation.png"
  },
  {
    id: 22,
    question: "What is this symbol?",
    correctAnswer: "Shut At Flying Station",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut At Flying Station.png"
  },
  {
    id: 23,
    question: "What is this symbol?",
    correctAnswer: "Shut In Condition Alpha",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut In Condition Alpha.png"
  },
  {
    id: 24,
    question: "What is this symbol?",
    correctAnswer: "Shut In Condition Bravo",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Shut In Condition Bravo.png"
  },
  {
    id: 25,
    question: "What is this symbol?",
    correctAnswer: "Ventilation Exhaust Flow Arrow Attached",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Ventilation Exhaust Flow Arrow Attached.png"
  },
  {
    id: 26,
    question: "What is this symbol?",
    correctAnswer: "Ventilation Supply Flow Arrow Attached",
    description: "",
    fact: "",
    imageUrl: "/images/symbols/Ventilation Supply Flow Arrow Attached.png"
  }
];
