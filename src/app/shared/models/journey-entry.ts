import { JourneyType } from "../enums/journey-type";

export interface JourneyEntry {
  id: string;
  title: string;
  organisation: string;
  location: string;
  from: string;   // e.g. "2017"
  to: string;     // e.g. "2021" or "Present"
  type: JourneyType;
  summary: string;
  highlights: string[];
}
