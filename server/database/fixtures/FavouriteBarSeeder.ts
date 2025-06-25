import AbstractSeeder from "./AbstractSeeder";

interface FavouriteData {
  user_id: number;
  bar_id: number;
}

class FavouriteBarSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "favourite_bar",
      truncate: true,
    });
  }

  run() {
    const userInFavourite = new Set();

    for (let i = 0; i < 10; i++) {
      const fakeFavourite = {
        user_id: this.faker.number.int({ min: 1, max: 30 }),
        bar_id: this.faker.number.int({ min: 1, max: 28 }),
      };
      const key = `${fakeFavourite.user_id}-${fakeFavourite.bar_id}`;

      if (!userInFavourite.has(key)) {
        userInFavourite.add(key);

        this.insert(fakeFavourite as FavouriteData);
      }
    }
  }
}

export default FavouriteBarSeeder;
