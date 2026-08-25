//Contains mock questionaire data

const questions = [
  {
    id: 1,
    question: "How often do you feel nervous or anxious?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost always", score: 3 }
    ]
  },
  {
    id: 2,
    question: "How often do you have trouble relaxing?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost always", score: 3 }
    ]
  }
];

export default questions;