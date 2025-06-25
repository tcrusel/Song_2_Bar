import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { MusicGroup } from "../../types/musicGroup";

class GroupRepository {
  async find(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM music_group WHERE id = ?",
      [id],
    );

    return rows[0] ? (rows[0] as MusicGroup) : null;
  }
}

export default new GroupRepository();
