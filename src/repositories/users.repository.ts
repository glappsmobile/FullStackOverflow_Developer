import connection from '../database/connection';
import { UserDB } from '../interfaces/user.interface';

const create = async (name: string, userClass: string): Promise<UserDB> => {
  const userQuery = await connection.query(
    'INSERT INTO "users" ("namea", "class") VALUES ($1, $2) RETURNING *;',
    [name, userClass],
  );

  if (!userQuery.rows[0]) {
    return null;
  }

  return userQuery.rows[0];
};

export {
  create,
};
