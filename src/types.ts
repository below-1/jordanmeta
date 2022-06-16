export interface Portfolio {
  id: string;
  title: string;
  avatar?: string;
  description: string;
  markdown_url?: string;
}

export interface Activity {
  id: string;
  type: string;
  actor: any;
  repo: any;
  payload: any;
  public: boolean;
  created_at: string;
}