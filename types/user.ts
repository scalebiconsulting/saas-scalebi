export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  phone?: string;
  role: 'admin' | 'user';
  created_at: Date;
  updated_at: Date;
}

export interface UserProfile extends User {
  account_id: string;
}
