import connection from '../database/connection';
import { Question, QuestionId } from '../interfaces/question.interface';

const createQuestion = async (questionParams: Question): Promise<QuestionId> => {
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

const findQuestionById = async (id: number) => {
  const userQuery = await connection.query(
    `SELECT 
      questions.question, questions.student, questions.class, questions.tags, questions.submited_at as "submitedAt",
      CASE
        WHEN questions_answers.id IS NOT NULL then true else false
      END as answered
    FROM questions
      LEFT JOIN questions_answers
        ON questions_answers.question_id = questions.id
    WHERE questions.id = $1
    LIMIT 1;`,
    [id],
  );

  return userQuery.rows[0];
};

export {
  createQuestion,
  findQuestionById,
};
