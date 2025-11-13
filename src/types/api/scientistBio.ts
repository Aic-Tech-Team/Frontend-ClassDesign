export interface ScientistBio {
  id: number | null;
  first_name: string;
  last_name: string;
  full_name?: string;
  image: string;
  description: string;
  position?: string;
}
