export interface Bar {
  id: number;
  name: string;
  music_style: string;
  address: string;
  postcode: number;
  city: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  hours_id?: number;
  hours?: Hours;
}

export interface Hours {
  id: number;
  monday_opening_hours: string;
  tuesday_opening_hours: string;
  wednesday_opening_hours: string;
  thursday_opening_hours: string;
  friday_opening_hours: string;
  saturday_opening_hours: string;
  sunday_opening_hours: string;
  happy_hours: string;
}

export interface MusicGroup {
  id: number;
  name: string;
  style: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  start_at: string;
  end_at: string;
  description: string;
  creator_id: number;
  bar_id: number;
  music_group_id: number;
  music_group?: MusicGroup;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
}
