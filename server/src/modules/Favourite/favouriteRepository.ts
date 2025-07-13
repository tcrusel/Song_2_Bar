import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class favouriteRepository {
  async create(favourite: Partial<Favourite>) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_bar (user_id, bar_id) VALUES (?, ?)",
      [favourite.userId, favourite.barId],
    );

    return result.affectedRows;
  }
}

export default new favouriteRepository();
