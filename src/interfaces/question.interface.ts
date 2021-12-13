interface Question {
  question: string;
  student: string;
  class: string;
  tags: string;
}

interface QuestionDB extends Question {
  submitedAt: string;
}

interface QuestionWithIdDB extends QuestionDB {
  id: number;
}

interface AnsweredQuestionDB extends QuestionDB {
  answered: boolean;
  answer?: string;
  answeredAt?: string;
  answeredBy?: string;
}

interface QuestionId {
  id: number;
}

export {
  Question,
  QuestionId,
  QuestionDB,
  AnsweredQuestionDB,
  QuestionWithIdDB,
};
