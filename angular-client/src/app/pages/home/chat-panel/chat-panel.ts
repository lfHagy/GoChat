import { Component, effect, inject, } from '@angular/core';
import { ChatBubbleComponent } from "./chat-bubble/chat-bubble-component";
import { UserService } from '../../../core/services/user-service';
import { ChatService } from '../../../core/services/chat-service';
import { ContactsService } from '../../../core/services/contacts-service';
import { ChatInterface } from '../../../core/interfaces/chat-interface';
import { Router } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-chat-panel',
  imports: [
    ChatBubbleComponent,
    MatProgressSpinner
  ],
  templateUrl: './chat-panel.html',
  styleUrl: './chat-panel.scss'
})
export class ChatPanel {
  private readonly chatService = inject(ChatService);
  private readonly contactService = inject(ContactsService);
  private readonly router = inject(Router);

  selectedContact = this.contactService.selectedContact;
  currentChat = this.chatService.currentChat;

  isLoadingChatPanel = true;

  constructor() {
    effect(() => {

      if (this.selectedContact()) {
        console.log("current contact on chat-panel:", this.selectedContact()!.username);
        this.chatService.getChat("1", this.selectedContact()!.id);
        this.isLoadingChatPanel = false;
      } else { // this probably won't be an issue when we need to await a contact from backend
        console.warn("chat-panel tried to load before having a selected contact!");
        this.router.navigate(["/home"]);
      }
    });
  }

  sendMessage() {
    console.log("sent a message!"); // TODO
  }
}
