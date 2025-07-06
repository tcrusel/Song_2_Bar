import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  lastname: string;
  firstname: string;
  role: string;
  email: string;
  hashed_password: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (lastname, firstname, role, email, hashed_password) VALUES (?, ?, ?, ?, ?)",
      [
        user.lastname,
        user.firstname,
        user.role,
        user.email,
        user.hashed_password,
      ],
    );

    return result.insertId;
  }

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return rows[0] as User;
  }
}

export default new UserRepository();
