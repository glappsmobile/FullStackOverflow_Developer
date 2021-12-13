import QuestionError from '../errors/QuestionError';
import * as questionRepository from '../repositories/question.repository';
import { Question, QuestionId } from '../interfaces/question.interface';

const createQuestion = async (questionParams: Question): Promise<QuestionId> => {
  const question = await questionRepository.createQuestion(questionParams);

  if (question === null) {
    throw new QuestionError('An unexpected error occurred.');
  }

  return question;
};

const findQuestionById = async (id: number) => {
  const question = await questionRepository.findQuestionById(id);

  if (!question) {
    throw new QuestionError('Question not found.');
  }

  return question;
};

export {
  createQuestion,
  findQuestionById,
};
