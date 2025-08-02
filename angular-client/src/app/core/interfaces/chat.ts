export interface ChatInterface {
    id: string;
    participants: string[];
    lastUpdated: number;
    lastMessage?: string;
}
