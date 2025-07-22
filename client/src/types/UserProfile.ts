export interface FavoriteBar {
  id: number;
  name: string;
  music_style: string;
  address: string;
  postcode: number;
  city: string;
  image1: string;
}

export interface FavoriteGroup {
  id: number;
  name: string;
  style: string;
  image: string;
}

export interface ParticipatedEvent {
  id: number;
  title: string;
  image: string;
  date: string;
  start_at: string;
  end_at: string;
  bar_name: string;
  music_style: string;
}

export interface UserProfileData {
  favoriteBars: FavoriteBar[];
  favoriteGroups: FavoriteGroup[];
  participatedEvents: ParticipatedEvent[];
}
