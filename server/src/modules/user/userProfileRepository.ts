import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class UserProfileRepository {
  async getUserProfile(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        id,
        firstname,
        lastname
      FROM user 
      WHERE id = ?`,
      [userId],
    );
    return rows[0];
  }
}

export default new UserProfileRepository();
