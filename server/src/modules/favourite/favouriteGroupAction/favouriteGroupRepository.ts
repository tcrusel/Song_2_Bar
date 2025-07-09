import databaseClient from "../../../../database/client";
import type { Result } from "../../../../database/client";

type favouriteGroup = {
  user_id: number;
  music_group_id: number;
};

class favouriteGroupRepository {
  async create(favourite: Omit<favouriteGroup, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into favourite_music_group (user_id, music_group_id) values (?, ?)",
      [favourite.user_id, favourite.music_group_id],
    );
    return result.affectedRows > 0;
  }
}

export default new favouriteGroupRepository();
