import AbstractSeeder from "./AbstractSeeder";

class FavouriteMusicGroupSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "favourite_music_group",
      truncate: true,
    });
  }

  run() {
    const userInFavourite = new Set();

    for (let i = 0; i < 10; i++) {
      const fakeFavourite = {
        user_id: this.faker.number.int({ min: 1, max: 30 }),
        music_group_id: this.faker.number.int({ min: 1, max: 16 }),
      };
      const key = `${fakeFavourite.user_id}-${fakeFavourite.music_group_id}`;

      if (!userInFavourite.has(key)) {
        userInFavourite.add(key);
        this.insert(fakeFavourite);
      }
    }
  }
}

export default FavouriteMusicGroupSeeder;
