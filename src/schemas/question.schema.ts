import joi from 'joi';

const createQuestion = joi.object({
  question: joi.string().required(),
  student: joi.string().required(),
  class: joi.string().required(),
  tags: joi.string().required(),
});

const createAnswerBody = joi.object({
  answer: joi.string().required(),
});

const createAnswerParam = joi.object({
  id: joi.number().required(),
});

const findQuestionById = joi.object({
  id: joi.number().required(),
});

export {
  createQuestion,
  findQuestionById,
  createAnswerBody,
  createAnswerParam,
};
