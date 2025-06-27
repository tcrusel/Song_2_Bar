import databaseClient from "../../../../database/client";

type FavoriteMusicGroup = {
  user_id: number;
  music_group_id: number;
};

class FavoriteGroupRepository {
  async create(favorite: FavoriteMusicGroup) {
    const sql = `INSERT INTO favourite_music_group (user_id, music_group_id) VALUES (?, ?)`;
    const values = [favorite.user_id, favorite.music_group_id];

    const [result] = await databaseClient.query(sql, values);
    return result;
  }
}

export default new FavoriteGroupRepository();
