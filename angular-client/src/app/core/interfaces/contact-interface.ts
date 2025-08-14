import { StatusEnum } from "../enums/status-enum";

export interface ContactInterface {
  id: string;
  username: string;
  status: StatusEnum;
  lastUpdated?: number;
}