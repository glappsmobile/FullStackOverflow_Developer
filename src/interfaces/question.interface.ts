interface Question {
  question: string;
  student: string;
  class: string;
  tags: string;
}

interface QuestionDB extends Question {
  submitedAt: string;
}

interface QuestionId {
  id: number;
}

export {
  Question,
  QuestionId,
  QuestionDB,
};
