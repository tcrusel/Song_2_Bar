import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type MusicGroup = {
  id: number;
  name: string;
  style: string;
  description: string;
  image: string;
};

class GroupRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from music_group where id = ?",
      [id],
    );

    return rows[0] ? (rows[0] as MusicGroup) : null;
  }
}

export default new GroupRepository();
