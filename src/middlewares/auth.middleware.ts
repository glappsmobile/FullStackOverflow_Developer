import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { statusCode } from '../enums/httpStatus';
import * as userRepository from '../repositories/user.repository';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization || '';
  const token = authorization.split('Bearer ')[1];

  if (!token) {
    return res.sendStatus(statusCode.UNAUTHORIZED);
  }

  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
  } catch (err) {
    return res.sendStatus(statusCode.UNAUTHORIZED);
  }

  if (!user) {
    return res.sendStatus(statusCode.UNAUTHORIZED);
  }

  const fullUser = await userRepository.findById(user.id);

  if (!fullUser) {
    return res.sendStatus(statusCode.UNAUTHORIZED);
  }

  res.locals.user = fullUser;

  next();
};

export default auth;
