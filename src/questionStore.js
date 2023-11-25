// questionStore.js

class QuestionStore {
  constructor(questions) {
    this.questions = questions;
  }

  // Get questions based on difficulty
  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter((q) => q.difficulty === difficulty);
  }

  // Get all unique subjects
  getUniqueSubjects() {
    return Array.from(new Set(this.questions.map((q) => q.subject)));
  }
}

module.exports = QuestionStore;
