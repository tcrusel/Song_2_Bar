import { da } from "@faker-js/faker/.";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Participate } from "../../types/participate";

class participateRepository {
  async create(participate: Partial<Participate>) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO participate (user_id, event_id) values (?, ?)",
      [participate.userId, participate.eventId],
    );

    return result.affectedRows;
  }

  async delete(userId: number, eventId: number) {
    console.log("TRYING DELETE", userId, eventId);
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM participate WHERE user_id = ? AND event_id = ?",
      [userId, eventId],
    );
    console.log("DELETE affectedRows:", result.affectedRows);
    return result.affectedRows;
  }
}

export default new participateRepository();
