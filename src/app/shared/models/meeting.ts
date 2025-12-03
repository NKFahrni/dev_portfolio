export interface Meeting {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_start: string; // ISO date string with timezone
  gmt_offset: string; // e.g. "08:00:00"
  location: string;
  meeting_key: number;
  meeting_name: string;
  meeting_official_name: string;
  year: number;
}

export type Meetings = Meeting[];
