import { computed, inject, Injectable, signal } from '@angular/core';
import { ChatInterface } from '../interfaces/chat-interface';
import { ContactsService } from './contacts-service';
import { UserService } from './user-service';
import { MessageInterface } from '../interfaces/message-interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  mockChats: ChatInterface[] = [
    {
      id: 'chat-1',
      participants: ['1', '2'],
      lastUpdated: new Date('2025-08-14T12:01:00').getTime(),
      messages: [
        {
          id: 'm1',
          chatId: 'chat-1',
          senderId: '1',
          text: 'Hey Greg!',
          timestamp: new Date('2025-08-14T12:00:00'),
          status: 'read'
        },
        {
          id: 'm2',
          chatId: 'chat-1',
          senderId: '2',
          text: 'Hey John, how’s it going?',
          timestamp: new Date('2025-08-14T12:01:00'),
          status: 'delivered'
        }
      ]
    },
    {
      id: 'chat-2',
      participants: ['1', '3'],
      lastUpdated: new Date('2025-08-14T13:01:00').getTime(),
      messages: [
        {
          id: 'm3',
          chatId: 'chat-2',
          senderId: '3',
          text: 'Hi John!',
          timestamp: new Date('2025-08-14T13:00:00'),
          status: 'sent'
        },
        {
          id: 'm4',
          chatId: 'chat-2',
          senderId: '1',
          text: 'Hi Bea!',
          timestamp: new Date('2025-08-14T13:01:00'),
          status: 'sent'
        }
      ]
    }
  ];

  private readonly contactsService = inject(ContactsService);
  private readonly userService = inject(UserService);

  currentChat = signal<ChatInterface | null>(null);

  getChat(userId: string, contactId: string): ChatInterface | null {
    console.log("got chat!");
    return (
      this.mockChats.find(
        chat =>
          chat.participants.includes(userId) &&
          chat.participants.includes(contactId)
      ) ?? null
    );
  }
}
