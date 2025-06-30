import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Event = {
  id: number;
  title: string;
  date: number;
  start_at: number;
  end_at: number;
  image: string;
  description: string;
  creator_id: number;
  bar_id: number;
  music_group_id: number;
};

class EventRepository {
  async create(event: Omit<Event, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into event (title, date, start_at, end_at, image, description, creator_id, bar_id, music_group_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        event.title,
        event.date,
        event.start_at,
        event.end_at,
        event.image,
        event.description,
        event.creator_id,
        event.bar_id,
        event.music_group_id,
      ],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from event where id = ?",
      [id],
    );

    return rows[0] as Event;
  }

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

    return rows;
  }
}

export default new EventRepository();
