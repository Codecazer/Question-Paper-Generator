// main.js

const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');
const questions = require('../data/questions.json');

// Initialize Question Store
const questionStore = new QuestionStore(questions);

// Initialize Question Paper Generator
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Example: Generate a question paper with 100 marks and difficulty distribution
const totalMarks = 100;
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };

const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display the generated question paper
console.log('Generated Question Paper:');
console.log(generatedQuestionPaper);
