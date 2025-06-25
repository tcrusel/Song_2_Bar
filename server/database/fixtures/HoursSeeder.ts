import AbstractSeeder from "./AbstractSeeder";

class HoursSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "hours", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i++) {
      const fakeHours = {
        monday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        tuesday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        wednesday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        thursday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        friday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        saturday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        sunday_opening_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        happy_hours: `${this.faker.date.anytime().toTimeString().slice(0, 5)}-${this.faker.date.anytime().toTimeString().slice(0, 5)}`,
        refName: `hours_${i + 1}`,
      };

      this.insert(fakeHours);
    }
  }
}

export default HoursSeeder;
