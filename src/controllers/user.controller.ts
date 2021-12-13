import { Request, Response } from 'express';
import * as userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userClass = req.body.class;

  const createdUser = await userService.createUser(name, userClass);

  res.send(createdUser);
};

export {
  createUser,
};
