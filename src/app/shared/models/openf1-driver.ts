export interface OpenF1Driver {
  driverId?: string;
  permanentNumber?: string | null;
  code?: string | null;
  url?: string | null;
  givenName: string;
  familyName: string;
  dateOfBirth?: string | null;
  nationality?: string | null;
}
