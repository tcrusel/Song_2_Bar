export interface UserType {
  id: number;
  lastname: string;
  firstname: string;
  role: string;
  email: string;
  password: string;
}

export interface AuthType {
  user: UserType;
  token: string;
}

export type UserInfo = Pick<UserType, "id" | "firstname" | "lastname">;
