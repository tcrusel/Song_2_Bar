export interface EventsList {
  id: number;
  title: string;
  start_at: string;
  bar_id: number;
  bar_name: string;
  image: string;
  music_group_id: number;
  group_name: string;
  music_style: string;
}
export type EventDetailsProps = {
  title: string;
  music_style: string;
  bar_name: string;
  image: string;
  hour_only: number;
  latitude: number;
  longitude: number;
  description: string;
  date: number;
  address: string;
  postcode: string;
  city: string;
  group_id: number;
  music_group_name: string;
  music_group_id: number;
  start_time: number;
  end_time: number;
};
