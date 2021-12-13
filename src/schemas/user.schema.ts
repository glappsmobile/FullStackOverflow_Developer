import joi from 'joi';

const createUser = joi.object({
  name: joi.string().required(),
  class: joi.string().required(),
});

export {
  createUser,
};
