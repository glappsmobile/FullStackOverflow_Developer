import { NextFunction, Request, Response } from 'express';
/// import { statusCode } from '../enums/httpStatus';
import { AppResponse } from '../interfaces/appResponse.interface';

const createQuestion = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  /* if (userSchema.createUser.validate(req.body).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  const { name } = req.body;
  const userClass = req.body.class;* */

  try {
    return res.send('adsa');
  } catch (error) {
  /*  if (error.name === 'UserError') {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }

    if (error.name === 'SessionError') {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
    } */

    next(error);
  }
};

export {
  createQuestion,
};
