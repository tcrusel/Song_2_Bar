import AbstractSeeder from "./AbstractSeeder";

class EventSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "event", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i++) {
      const fakeEvent = {
        date: this.faker.date.soon({ days: 30 }),
        start_at: this.faker.date.anytime().toTimeString().slice(0, 5),
        end_at: this.faker.date.anytime().toTimeString().slice(0, 5),
        description: this.faker.lorem.paragraph(),
        title: `${this.faker.music.genre()} Show with ${this.faker.person.firstName()}`,
        creator_id: this.faker.number.int({ min: 1, max: 30 }),
        bar_id: this.faker.number.int({ min: 1, max: 28 }),
        music_group_id: this.faker.number.int({ min: 1, max: 19 }),
        refName: `event_${i}`,
      };

      this.insert(fakeEvent);
    }
  }
}

export default EventSeeder;
