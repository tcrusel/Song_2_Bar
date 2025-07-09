import database from "../client";
import AbstractSeeder from "./AbstractSeeder";
import HoursSeeder from "./HoursSeeder";

class BarHoursLinker extends AbstractSeeder {
  constructor() {
    super({
      table: "bar",
      truncate: false,
      dependencies: [HoursSeeder],
    });
  }

  async run() {
    for (let i = 1; i <= 28; i++) {
      const hoursRef = this.getRef(`hours_${i}`);
      if (hoursRef) {
        try {
          await database.query("UPDATE bar SET hours_id = ? WHERE id = ?", [
            hoursRef.insertId,
            i,
          ]);
        } catch (error) {
          console.log(`Error updating bar ${i}:`, error);
        }
      }
    }
  }
}

export default BarHoursLinker;
