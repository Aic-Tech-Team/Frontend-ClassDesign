export interface ClassInfo {
  id: number;
  name: string;
  number: number;
  redirect_link: string;
  qr_code_image: string;
  qr_url: string;
  scientist: Scientist;
}

export interface Scientist {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  image: string;
  description: string;
  position: string;
}
