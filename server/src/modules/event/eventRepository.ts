import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { EventList } from "../../types/eventList";

class eventRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
    e.*, 
    b.name AS bar_name,
    g.name AS group_name,
    g.style AS music_style
   FROM event e
   LEFT JOIN bar b ON e.bar_id = b.id
   LEFT JOIN music_group g ON e.music_group_id = g.id`,
    );

    return rows as EventList[];
  }

  async find(id: number) {
    const [rows] = await databaseClient.query<Rows[]>(
      `SELECT 
    event.id AS event_id,
    event.title,
    event.date,
    DATE_FORMAT(event.start_at, '%H:%i') AS start_at,
    DATE_FORMAT(event.end_at, '%H:%i') AS end_at,
    event.image,
    music_group.name AS music_group_name,
    music_group.style AS music_style,
    bar.name AS bar_name,
    bar.address AS address,
    bar.postcode,
    bar.city,
    bar.latitude AS latitude,
    bar.longitude AS longitude,
    music_group.description,
    music_group.id AS music_group_id
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
