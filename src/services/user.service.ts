import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/users.repository';
import * as sessionRepository from '../repositories/session.repository';
import { Session } from '../interfaces/session.interface';
import UserError from '../errors/UserError';
import SessionError from '../errors/SessionError';

const createUser = async (name: string, userClass: string): Promise<Session> => {
  const user = await userRepository.create(name, userClass);

  if (user) {
    throw new UserError('An unexpected error occurred.');
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
  );

  const session = await sessionRepository.create(user.id, token);

  if (session === null) {
    throw new SessionError('An unexpected error occurred.');
  }

  return session;
};

export {
  createUser,
};
