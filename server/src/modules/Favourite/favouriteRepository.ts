import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class favouriteRepository {
  async favouriteBar(userId: number, barId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_bar (user_id, bar_id) VALUES (?, ?)",
      [userId, barId],
    );

    return result.affectedRows;
  }

  async unfavouriteBar(userId: number, barId: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM favourite_bar WHERE user_id = ? AND bar_id = ?",
      [userId, barId],
    );

    return result.affectedRows;
  }

  async favouriteEvent(userId: number, eventId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_event (user_id, event_id) VALUES (?, ?)",
      [userId, eventId],
    );

    return result.affectedRows;
  }

  async unfavouriteEvent(userId: number, eventId: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM favourite_event WHERE user_id = ? AND event_id = ?",
      [userId, eventId],
    );

    return result.affectedRows;
  }
}

export default new favouriteRepository();
