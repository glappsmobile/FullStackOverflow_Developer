import connection from '../database/connection';

const create = async (name: string, userClass: string) => {
  const userQuery = await connection.query(
    'INSERT INTO "users" ("name", "class") VALUES ($1, $2) RETURNING *;',
    [name, userClass],
  );

  return userQuery.rows[0];
};

export {
  create,
};
