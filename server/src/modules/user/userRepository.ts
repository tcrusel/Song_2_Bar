import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  lastname: string;
  firstname: string;
  role: string;
  email: string;
  password: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (lastname, firstname, role, email, password) values (?, ?, ?, ?, ?)",
      [user.lastname, user.firstname, user.role, user.email, user.password],
    );

    return result.insertId;
  }
}

export default new UserRepository();
