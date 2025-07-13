import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class favouriteRepository {
  async favouriteBar(favourite: Partial<Favourite>) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_bar (user_id, bar_id) VALUES (?, ?)",
      [favourite.userId, favourite.barId],
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
}

export default new favouriteRepository();
