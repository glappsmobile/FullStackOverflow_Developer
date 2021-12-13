interface Question {
  question: string;
  student: string;
  class: string;
  tags: string;
}

interface QuestionDB {
  id: number;
}

export {
  Question,
  QuestionDB,
};
