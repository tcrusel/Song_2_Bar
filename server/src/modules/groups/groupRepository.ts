import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Group = {
  id: number;
  music_group_name: string;
  music_group_style: string;
  music_group_description: string;
};

class GroupRepository {
  async create(group: Omit<Group, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into group (music_group_name, music_group_style, music_group_description) values (?, ?, ?)",
      [
        group.music_group_name,
        group.music_group_style,
        group.music_group_description,
      ],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from group where id = ?",
      [id],
    );

    return rows[0] as Group;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from group");

    return rows as Group[];
  }
}

export default new GroupRepository();
