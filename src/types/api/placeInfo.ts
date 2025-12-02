import type { ScientistBio } from "./scientistBio";

export type PlaceType = "Room" | "Office" | "Class" | "Atelye" | "Laboratory" | "Salon";
export interface PlaceInfo {
  place_id: number | null;
  place_name: string;
  redirect_link?: string;
  place_number: number | null;
  place_type: PlaceType;
  scientist: ScientistBio;
}
