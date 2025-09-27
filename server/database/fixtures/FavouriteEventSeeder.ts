import AbstractSeeder from "./AbstractSeeder";
import EventSeeder from "./EventSeeder";

interface FavouriteData {
  user_id: number;
  event_id: number;
}

class FavouriteEventSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "favourite_event",
      truncate: true,
      dependencies: [EventSeeder],
    });
  }

  run() {
    const userInFavourite = new Set();

    for (let fakeEventRefId = 1; fakeEventRefId < 6; fakeEventRefId++) {
      for (let i = 0; i < 10; i++) {
        const fakeFavourite = {
          user_id: this.faker.number.int({ min: 1, max: 30 }),
          event_id: this.getRef(`event_${fakeEventRefId}`).insertId,
        };
        const key = `${fakeFavourite.user_id}-${fakeFavourite.event_id}`;

        if (!userInFavourite.has(key)) {
          userInFavourite.add(key);

          this.insert(fakeFavourite as FavouriteData);
        }
      }
    }
  }
}

export default FavouriteEventSeeder;
