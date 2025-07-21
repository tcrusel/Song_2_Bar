import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { MusicGroup } from "../../types/musicGroup";

interface FavouriteBar {
  userId: number;
  barId: number;
}

interface FavouriteEvent {
  userId: number;
  eventId: number;
}

interface FavouriteGroup {
  userId: number;
  groupId: number;
}

class FavouriteRepository {
  async favouriteBar(favourite: Partial<FavouriteBar>) {
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

  async favouriteEvent(favourite: Partial<FavouriteEvent>) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_event (user_id, event_id) VALUES (?, ?)",
      [favourite.userId, favourite.eventId],
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

  async favouriteGroup(userId: number, groupId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favourite_music_group (user_id, music_group_id) VALUES (?, ?)",
      [userId, groupId],
    );

    return result.affectedRows;
  }

  async unfavouriteGroup(userId: number, groupId: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM favourite_music_group WHERE user_id = ? AND music_group_id = ?",
      [userId, groupId],
    );

    return result.affectedRows;
  }
}

export default new FavouriteRepository();
