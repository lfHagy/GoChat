import { Component, inject, OnInit } from '@angular/core';
import { ChatBubbleComponent } from "./chat-bubble/chat-bubble-component";
import { UserService } from '../../../core/services/user-service';
import { ChatService } from '../../../core/services/chat-service';
import { ContactsService } from '../../../core/services/contacts-service';
import { ChatInterface } from '../../../core/interfaces/chat-interface';

@Component({
  selector: 'app-chat-panel',
  imports: [ ChatBubbleComponent ],
  templateUrl: './chat-panel.html',
  styleUrl: './chat-panel.scss'
})
export class ChatPanel {
  private readonly chatService = inject(ChatService);
  private readonly userService = inject(UserService);
  private readonly contactService = inject(ContactsService);

  selectedContact = this.contactService.selectedContact;
  currentChat = this.chatService.currentChat;

  sendMessage() {
    console.log("sent a message!"); // TODO
  }

  ngOnInit() {
    console.log("running onInit for chatPanel");
    this.chatService.getChat("1", this.selectedContact()!.id);
  }
}
