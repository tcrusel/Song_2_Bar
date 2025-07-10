import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class UserProfileRepository {
  // Get user's favorite bars
  async getFavoriteBars(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        b.id,
        b.name,
        b.music_style,
        b.address,
        b.postcode,
        b.city,
        b.image1
      FROM favourite_bar fb
      JOIN bar b ON fb.bar_id = b.id
      WHERE fb.user_id = ?`,
      [userId],
    );
    return rows;
  }

  // Get user's favorite music groups
  async getFavoriteGroups(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        mg.id,
        mg.name,
        mg.style,
        mg.image
      FROM favourite_music_group fmg
      JOIN music_group mg ON fmg.music_group_id = mg.id
      WHERE fmg.user_id = ?`,
      [userId],
    );
    return rows;
  }

  // Get events user is participating in
  async getParticipatedEvents(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        e.id,
        e.title,
        e.image,
        e.date,
        DATE_FORMAT(e.start_at, '%H:%i') AS start_at,
        DATE_FORMAT(e.end_at, '%H:%i') AS end_at,
        b.name AS bar_name,
        mg.style AS music_style
      FROM participate p
      JOIN event e ON p.event_id = e.id
      JOIN bar b ON e.bar_id = b.id
      JOIN music_group mg ON e.music_group_id = mg.id
      WHERE p.user_id = ?`,
      [userId],
    );
    return rows;
  }

  // Get all user profile data at once
  async getUserProfile(userId: number) {
    const [favoriteBars, favoriteGroups, participatedEvents] =
      await Promise.all([
        this.getFavoriteBars(userId),
        this.getFavoriteGroups(userId),
        this.getParticipatedEvents(userId),
      ]);

    return {
      favoriteBars,
      favoriteGroups,
      participatedEvents,
    };
  }
}

export default new UserProfileRepository();
