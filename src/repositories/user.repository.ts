import connection from '../database/connection';
import { UserDB } from '../interfaces/user.interface';

const create = async (name: string, userClass: string): Promise<UserDB> => {
  const userQuery = await connection.query(
    'INSERT INTO "users" ("name", "class") VALUES ($1, $2) RETURNING *;',
    [name, userClass],
  );

  if (!userQuery.rows[0]) {
    return null;
  }

  return userQuery.rows[0];
};

const findById = async (id: number): Promise<UserDB> => {
  console.log(id);
  const userQuery = await connection.query(
    'SELECT * FROM "users" WHERE id = $1 LIMIT 1;',
    [id],
  );

  return userQuery.rows[0];
};

export {
  create,
  findById,
};
