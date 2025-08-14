import { StatusEnum } from "../enums/status-enum"

export interface UserInterface {
    id: string,
    username: string,
    contactList: string[]; // stores the ids of contacts
    status: StatusEnum; // online, offline, away, busy
    avatarImage?: string;
    chats?: string[]; // stores the ids of chats
}
