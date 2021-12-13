import { Request, Response, NextFunction } from 'express';
import { statusCode } from '../enums/httpStatus';
import { AppResponse } from '../interfaces/appResponse.interface';
import * as questionSchema from '../schemas/question.schema';
import * as questionService from '../services/question.service';

const createQuestion = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (questionSchema.createQuestion.validate(req.body).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  const { question, student, tags } = req.body;
  const userClass = req.body.class;

  try {
    const createdQuestion = await questionService
      .createQuestion({
        question,
        student,
        class: userClass,
        tags,
      });

    return res.send(createdQuestion);
  } catch (error) {
    if (error.name === 'QuestionError') {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }

    next(error);
  }
};

const createAnswer = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (questionSchema.createAnswerBody.validate(req.body).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  if (questionSchema.createAnswerParam.validate(req.params).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  const questionId = Number(req.params.id);
  const userId = res.locals.user.id;
  const { answer } = req.body;

  try {
    await questionService
      .createAnswer({
        questionId,
        userId,
        answer,
      });

    return res.sendStatus(statusCode.OK);
  } catch (error) {
    if (error.name === 'QuestionError') {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(error.message);
    }

    next(error);
  }
};

const findQuestionById = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  if (questionSchema.findQuestionById.validate(req.params).error) {
    return res.sendStatus(statusCode.BAD_REQUEST);
  }

  const { id } = req.params;

  try {
    const question = await questionService
      .findQuestionById(Number(id));

    return res.send(question);
  } catch (error) {
    if (error.name === 'QuestionError') {
      return res.status(statusCode.NOT_FOUND).send(error.message);
    }

    next(error);
  }
};

const findNonAnsweredQuestions = async (req: Request, res: Response, next: NextFunction)
  : Promise<AppResponse> => {
  try {
    const questions = await questionService.findNonAnsweredQuestions();

    return res.send(questions);
  } catch (error) {
    if (error.name === 'QuestionError') {
      return res.status(statusCode.NOT_FOUND).send(error.message);
    }

    next(error);
  }
};
export {
  createQuestion,
  createAnswer,
  findQuestionById,
  findNonAnsweredQuestions,
};
