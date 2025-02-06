export interface IAdd {
    add_id: number;
    add_name: string;
    add_disc: string;
    add_cat: string;
    add_img: string;
    add_owner: string; // References the user's token
    add_prise: number;
    add_location: string;
    add_createdAt: Date;
    add_count: number;
  }
  