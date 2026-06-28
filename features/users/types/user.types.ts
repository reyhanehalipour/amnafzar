export type UserStatus = "active" | "inactive";

export interface UserProfile {
  country: string;
  city: string;
  employee_id: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department: string;
  status: UserStatus;
  roles: string[];
  profile: UserProfile;
  created_at: string;
}

export interface UserList {
  page: number;
  limit: number;
  total: number;
  data: User[];
}

export interface UserBase {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department: string;
  status: "active" | "inactive";
  roles: string[];
  profile: {
    country: string;
    city: string;
    employee_id: string;
  };
}