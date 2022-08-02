
export interface Activity {
  id: string;
  type: string;
  actor: any;
  repo: any;
  payload: any;
  public: boolean;
  created_at: string;
}

export type Portfolio = {
  title: string;
  url?: string;
  description: Array<string>;
  pictures: Array<string>;
}
