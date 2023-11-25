// questionPaperGenerator.js

class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  // Generate question paper based on difficulty and marks distribution
  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];

    Object.entries(difficultyDistribution).forEach(([difficulty, percentage]) => {
      const difficultyQuestions = this.questionStore.getQuestionsByDifficulty(difficulty);
      const questionCount = Math.floor((percentage / 100) * totalMarks);

      if (questionCount > difficultyQuestions.length) {
        console.warn(`Not enough questions available for difficulty: ${difficulty}`);
      }

      // Randomly select questions based on the count
      const selectedQuestions = difficultyQuestions.sort(() => Math.random() - 0.5).slice(0, questionCount);

      questionPaper.push(...selectedQuestions);
    });

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;
