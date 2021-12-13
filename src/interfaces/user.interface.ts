interface User {
  name: string;
  class: string;
}

interface UserDB extends User {
  id: number;
}

export {
  User,
  UserDB,
};
