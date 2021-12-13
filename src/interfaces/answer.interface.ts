interface Answer {
  questionId: number;
  userId: number;
  answer: string;
}

interface AnswerDB extends Answer {
  id: number;
  answeredAt: string;
}

export {
  Answer,
  AnswerDB,
};
