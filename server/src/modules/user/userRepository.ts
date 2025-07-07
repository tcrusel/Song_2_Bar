import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { User } from "../../types/userRepository";

class UserRepository {
  async create(user: Omit<User, "id" | "is_admin">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) values (?, ?)",
      [user.email, user.password],
    );
    return result.insertId;
  }
}

export default new UserRepository();
