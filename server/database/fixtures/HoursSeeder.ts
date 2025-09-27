import AbstractSeeder from "./AbstractSeeder";

class HoursSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "hours", truncate: true });
  }

  run() {
    for (let i = 0; i < 28; i++) {
      const generateBarHours = (isWeekend = false) => {
        const openHour = isWeekend
          ? this.faker.number.int({ min: 16, max: 18 })
          : this.faker.number.int({ min: 17, max: 19 });
        const openMinute = this.faker.helpers.arrayElement([0, 30]);

        const closeHour = this.faker.number.int({ min: 23, max: 26 });
        const closeMinute = this.faker.helpers.arrayElement([0, 30]);

        const openTime = `${openHour.toString().padStart(2, "0")}:${openMinute.toString().padStart(2, "0")}`;
        const closeTime = `${(closeHour > 23 ? closeHour - 24 : closeHour).toString().padStart(2, "0")}:${closeMinute.toString().padStart(2, "0")}`;

        return `${openTime}-${closeTime}`;
      };

      const generateHappyHours = () => {
        const startHour = this.faker.number.int({ min: 17, max: 19 });
        const duration = this.faker.number.int({ min: 2, max: 3 });
        const endHour = startHour + duration;

        return `${startHour.toString().padStart(2, "0")}:00-${endHour.toString().padStart(2, "0")}:00`;
      };

      const isClosed = (day: string) => {
        if (day === "monday" || day === "tuesday")
          return this.faker.number.float() < 0.2;
        if (day === "sunday") return this.faker.number.float() < 0.1;
        return false;
      };

      const fakeHours = {
        monday_opening_hours: isClosed("monday")
          ? "Fermé"
          : generateBarHours(false),
        tuesday_opening_hours: isClosed("tuesday")
          ? "Fermé"
          : generateBarHours(false),
        wednesday_opening_hours: generateBarHours(false),
        thursday_opening_hours: generateBarHours(false),
        friday_opening_hours: generateBarHours(true),
        saturday_opening_hours: generateBarHours(true),
        sunday_opening_hours: isClosed("sunday")
          ? "Fermé"
          : generateBarHours(true),
        happy_hours: generateHappyHours(),
        refName: `hours_${i + 1}`,
      };

      this.insert(fakeHours);
    }
  }
}

export default HoursSeeder;
