import connection from '../database/connection';
import { Question, QuestionDB } from '../interfaces/question.interface';

const createQuestion = async (questionParams: Question): Promise<QuestionDB> => {
  const {
    question, student, tags,
  } = questionParams;

  const userClass = questionParams.class;

  const questionQuery = await connection.query(
    'INSERT INTO "questions" ("question", "student", "class", "tags") VALUES ($1, $2, $3, $4) RETURNING id;',
    [question, student, userClass, tags],
  );

  if (!questionQuery.rows[0]) {
    return null;
  }

  return questionQuery.rows[0];
};

export {
  createQuestion,
};
