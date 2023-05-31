export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
  image?: string;
}

export interface ICredentials {
  name: string;
  password: string;
}

export interface IAuthState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}
