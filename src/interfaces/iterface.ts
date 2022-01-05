export interface IItems {
  login: string;
  id: number;
  avatar_url: string;
  email?: string;
  location?: string;
  created_at: Date;
  followers: number;
  following: number;
}

export interface IUser {
  total_count: number;
  items: IItems[];
}

export interface IRepos {
  name: string;
  forks: number;
  id: number;
  stargazers_count: number;
}
