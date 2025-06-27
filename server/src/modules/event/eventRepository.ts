import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type Event = {
  id: number;
  title: string;
  date: number;
  event_beginning: string;
  event_ending: string;
  description: string;
  creator_id: number;
  bar_id: number;
  group_id: number;
};

class eventRepository {
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows[]>(
      `SELECT 
    event.id AS event_id,
    event.title,
    event.date,
    event.start_at,
    HOUR(event.start_at) AS hour_only,
    event.image,
    music_group.name AS music_group_name,
    music_group.style AS music_style,
    bar.name AS bar_name,
    bar.address AS address,
    bar.postcode,
    bar.city,
    bar.latitude AS latitude,
    bar.longitude AS longitude,
    music_group.description
  FROM event
  LEFT JOIN music_group ON event.music_group_id = music_group.id
  LEFT JOIN bar ON event.bar_id = bar.id
  WHERE event.id = ?;`,
      [id],
    );

    return rows.length > 0 ? rows[0] : null;
  }
}

export default new eventRepository();
