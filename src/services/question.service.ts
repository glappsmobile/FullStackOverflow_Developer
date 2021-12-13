import QuestionError from '../errors/UserError';
import * as questionRepository from '../repositories/question.repository';
import { Question, QuestionDB } from '../interfaces/question.interface';

const createQuestion = async (questionParams: Question): Promise<QuestionDB> => {
  const question = await questionRepository.createQuestion(questionParams);

  if (question === null) {
    throw new QuestionError('An unexpected error occurred.');
  }

  return question;
};

export {
  createQuestion,
};
