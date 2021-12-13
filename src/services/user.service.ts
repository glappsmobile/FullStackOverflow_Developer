import * as userRepository from '../repositories/users.repository';
import User from '../interfaces/user.interface';

const createUser = async (name: string, userClass: string): Promise<User> => userRepository
  .create(name, userClass);

export {
  createUser,
};
