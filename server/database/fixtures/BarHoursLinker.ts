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
    for (let i = 1; i <= 10; i++) {
      const hoursRef = this.getRef(`hours_${i}`);
      if (hoursRef) {
        const updatePromise = database.query(
          "UPDATE bar SET hours_id = ? WHERE id = ?",
          [hoursRef.insertId, i],
        );
        this.promises.push(updatePromise.then(() => {}));
      }
    }
  }
}

export default BarHoursLinker;
