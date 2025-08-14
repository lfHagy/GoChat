import { MessageInterface } from "./message-interface";

export interface ChatInterface {
    id: string;
    participants: string[];
    lastUpdated: number;
    messages: MessageInterface[];
}
