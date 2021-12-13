import joi from 'joi';

const createQuestion = joi.object({
  question: joi.string().required(),
  student: joi.string().required(),
  class: joi.string().required(),
  tags: joi.string().required(),
});

export {
  createQuestion,
};
