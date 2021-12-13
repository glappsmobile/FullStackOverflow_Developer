import connection from '../database/connection';
import { Session } from '../interfaces/session.interface';

const create = async (userId: number, token: string): Promise<Session> => {
  const sessionQuery = await connection.query(
    'INSERT INTO "sessions" ("user_id", "token") VALUES ($1, $2) RETURNING token;',
    [userId, token],
  );

  if (!sessionQuery.rows[0]) {
    return null;
  }

  return sessionQuery.rows[0];
};

export {
  create,
};
