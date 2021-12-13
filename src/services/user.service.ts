import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/users.repository';
import * as sessionRepository from '../repositories/session.repository';
import { Session } from '../interfaces/session.interface';

const createUser = async (name: string, userClass: string): Promise<Session> => {
  const user = await userRepository.create(name, userClass);

  if (user === null) {
    // erro
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
  );

  const session = await sessionRepository.create(user.id, token);

  return session;
};

export {
  createUser,
};
