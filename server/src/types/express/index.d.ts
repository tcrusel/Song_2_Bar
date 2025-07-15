// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  type MyPayload = JwtPayload & { sub: string; role: string };
  type Favourite = { userId: number; barId: number };
  type Participate = { userId: number; eventId: number };

  namespace Express {
    export interface Request {
      favourite: Favourite;
      participate: Participate;
      auth: MyPayload;
    }
  }
}
