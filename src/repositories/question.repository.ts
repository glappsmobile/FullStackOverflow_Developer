import connection from '../database/connection';
import { Question, QuestionId } from '../interfaces/question.interface';
import { Answer, AnswerDB } from '../interfaces/answer.interface';
import * as objectHelper from './helpers/objectHelper';

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

const createAnswer = async (answerParams: Answer)
  : Promise<AnswerDB> => {
  const {
    questionId,
    userId,
    answer,
  } = answerParams;

  const answerQuery = await connection.query(
    'INSERT INTO "questions_answers" ("question_id", "user_id", "answer") VALUES ($1, $2, $3) RETURNING *;',
    [questionId, userId, answer],
  );

  if (!answerQuery.rows[0]) {
    return null;
  }

  return answerQuery.rows[0];
};

const findQuestionById = async (id: number) => {
  const questionQuery = await connection.query(
    `SELECT 
      questions.question, questions.student, questions.class, questions.tags, questions.submited_at as "submitedAt",
      questions_answers.answered_at AS "answeredAt", users.name AS "answeredBy", questions_answers.answer,
      CASE
        WHEN questions_answers.id IS NOT NULL then true else false
      END as answered
    FROM questions
      LEFT JOIN questions_answers
        ON questions_answers.question_id = questions.id
          LEFT JOIN users
            ON users.id = questions_answers.user_id
    WHERE questions.id = $1
    LIMIT 1;`,
    [id],
  );

  const question = objectHelper.removeNullKeys(questionQuery.rows[0]);

  return question;
};

export {
  createQuestion,
  findQuestionById,
  createAnswer,
};
