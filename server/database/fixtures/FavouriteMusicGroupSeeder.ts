import AbstractSeeder from "./AbstractSeeder";

class FavouriteMusicGroupSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "favourite_music_group",
      truncate: true,
    });
  }

  run() {
    const favourites = [
      { user_id: 12, music_group_id: 16 }, // Tinariwen
      { user_id: 12, music_group_id: 8 }, // Justice
      { user_id: 12, music_group_id: 17 }, // Vulfpeck
      { user_id: 12, music_group_id: 5 }, // GoGo Penguin
      { user_id: 12, music_group_id: 15 }, // Tame Impala
      { user_id: 12, music_group_id: 1 }, // Arctic Monkeys
      { user_id: 12, music_group_id: 2 }, // Avishai Cohen Trio
      { user_id: 12, music_group_id: 3 }, // Christine and the Queens
      { user_id: 12, music_group_id: 11 }, // Rone
      { user_id: 12, music_group_id: 12 }, // Run the Jewels
      { user_id: 12, music_group_id: 13 }, // Shaka Ponk
      { user_id: 12, music_group_id: 14 }, // Snarky Puppy
      { user_id: 12, music_group_id: 4 }, // Entourage
      { user_id: 12, music_group_id: 6 }, // Goran Bregovic
      { user_id: 12, music_group_id: 7 }, // Ibeyi
      { user_id: 12, music_group_id: 9 }, // Kronos Quartet
      { user_id: 12, music_group_id: 10 }, // Les Arts Florissants
    ];

    for (const favourite of favourites) {
      this.insert(favourite);
    }
  }
}

export default FavouriteMusicGroupSeeder;
