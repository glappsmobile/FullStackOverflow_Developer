import QuestionError from '../errors/QuestionError';
import * as questionRepository from '../repositories/question.repository';
import { Question, QuestionId } from '../interfaces/question.interface';
import { Answer } from '../interfaces/answer.interface';

const createQuestion = async (questionParams: Question): Promise<QuestionId> => {
  const question = await questionRepository.createQuestion(questionParams);

  if (question === null) {
    throw new QuestionError('An unexpected error occurred.');
  }

  return question;
};

const createAnswer = async (answerParams: Answer): Promise<boolean> => {
  const answer = await questionRepository.createAnswer(answerParams);

  if (answer === null) {
    throw new QuestionError('An unexpected error occurred.');
  }

  return true;
};

const findQuestionById = async (id: number) => {
  const question = await questionRepository.findQuestionById(id);

  if (!question) {
    throw new QuestionError('Question not found.');
  }

  return question;
};

const findNonAnsweredQuestions = async () => {
  const questions = await questionRepository.findNonAnsweredQuestions();

  if (!questions) {
    throw new QuestionError('No questions were found.');
  }

  return questions;
};

export {
  createQuestion,
  findQuestionById,
  createAnswer,
  findNonAnsweredQuestions,
};
