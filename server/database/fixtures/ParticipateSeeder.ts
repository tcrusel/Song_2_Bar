import AbstractSeeder from "./AbstractSeeder";

interface ParticipateData {
  user_id: number;
  event_id: number;
}

class ParticipateSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "participate", truncate: true });
  }

  run() {
    const seen = new Set();

    for (let fakeEventRefId = 1; fakeEventRefId < 6; fakeEventRefId++) {
      for (let i = 0; i < 10; i++) {
        const fakeParticipate = {
          user_id: this.faker.number.int({ min: 1, max: 10 }),
          event_id: this.getRef(`event_${fakeEventRefId}`).insertId,
        };
        const key = `${fakeParticipate.user_id}-${fakeParticipate.event_id}`;

        if (!seen.has(key)) {
          seen.add(key);

          this.insert(fakeParticipate as ParticipateData);
        }
      }
    }
  }
}

export default ParticipateSeeder;
