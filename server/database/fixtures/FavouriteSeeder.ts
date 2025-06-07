import AbstractSeeder from "./AbstractSeeder";

interface FavouriteData {
  user_id: number;
  event_id: number;
}

class FavouriteSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "favourite", truncate: true });
  }

  run() {
    const seen = new Set();

    for (let fakeEventRefId = 1; fakeEventRefId < 6; fakeEventRefId++) {
      for (let i = 0; i < 10; i++) {
        const fakeFavourite = {
          user_id: this.faker.number.int({ min: 1, max: 10 }),
          event_id: this.getRef(`event_${fakeEventRefId}`).insertId,
        };
        const key = `${fakeFavourite.user_id}-${fakeFavourite.event_id}`;

        if (!seen.has(key)) {
          seen.add(key);

          this.insert(fakeFavourite as FavouriteData);
        }
      }
    }
  }
}

export default FavouriteSeeder;
