export interface MessageInterface {
    id: string;
    chatId: string;
    senderId: string;
    text: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
    isSent?: boolean;
}
