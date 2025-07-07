import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { EventList } from "../../types/eventList";

class EventRepository {
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
}

export default new EventRepository();
