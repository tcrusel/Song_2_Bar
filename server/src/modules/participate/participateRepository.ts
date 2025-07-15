import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class participateRepository {
  async create(participate: Partial<Participate>) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO participate (user_id, event_id) VALUES (?, ?)",
      [participate.userId, participate.eventId],
    );

    return result.affectedRows;
  }

  async delete(userId: number, eventId: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM participate WHERE user_id = ? AND event_id = ?",
      [userId, eventId],
    );

    return result.affectedRows;
  }
}

export default new participateRepository();
