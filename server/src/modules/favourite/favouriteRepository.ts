import type { RowDataPacket } from "mysql2";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { MusicGroup } from "../../types/musicGroup";

class favouriteRepository {
  async findBarFavourited(userId: number, barId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM favourite_bar WHERE user_id = ? AND bar_id = ?",
      [userId, barId],
    );

    return rows.length > 0 ? rows[0] : null;
  }

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

  async findEventFavourited(userId: number, eventId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM favourite_event WHERE user_id = ? AND event_id = ?",
      [userId, eventId],
    );

    return rows.length > 0 ? rows[0] : null;
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

  async findMusicGroupFavourited(userId: number, musicGroupId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM favourite_music_group WHERE user_id = ? AND music_group_id = ?",
      [userId, musicGroupId],
    );

    return rows.length > 0 ? rows[0] : null;
  }

  async favouriteMusicGroup(userId: number, musicGroupId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_music_group (user_id, music_group_id) VALUES (?, ?)",
      [userId, musicGroupId],
    );
    return result.affectedRows;
  }

  async unfavouriteMusicGroup(userId: number, musicGroupId: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM favourite_music_group WHERE user_id = ? AND music_group_id = ?",
      [userId, musicGroupId],
    );

    return result.affectedRows;
  }

  async getFavouriteGroupsByUserId(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT mg.id, mg.name, mg.style, mg.image 
       FROM favourite_music_group fmg
       JOIN music_group mg ON fmg.music_group_id = mg.id
       WHERE fmg.user_id = ?`,
      [userId],
    );

    return rows;
  }

  async favouriteCount(event_id: number): Promise<number> {
    const [rows] = await databaseClient.query<RowDataPacket[]>(
      "SELECT COUNT(*) AS count FROM participate WHERE event_id = ?",
      [event_id],
    );

    return rows[0].count;
  }
}

export default new favouriteRepository();
