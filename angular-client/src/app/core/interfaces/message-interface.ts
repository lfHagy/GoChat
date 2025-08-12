export interface MessageInterface {
    id: string;
    chatId: string;
    senderId: string;
    text: string;
    timestamp: number;
    status?: 'sent' | 'delivered' | 'read';
}
