import type { ScientistBio } from "./scientistBio";

export interface ClassInfo {
  class_id: number | null;
  class_name: string;
  redirect_link?: string;
  class_number: number | null;
  scientist: ScientistBio;
}
