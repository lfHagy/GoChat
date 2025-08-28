import { Component, effect, inject, } from '@angular/core';
import { ChatBubbleComponent } from "./chat-bubble/chat-bubble-component";
import { ChatService } from '../../../core/services/chat-service';
import { ContactsService } from '../../../core/services/contacts-service';
import { Router } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-panel',
  imports: [
    ChatBubbleComponent,
    MatProgressSpinner,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
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
  messageInputControl = new FormControl('');

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
    console.warn("message is ", this.messageInputControl.value)
    let text = this.messageInputControl.value?.trim();
    console.log("trimmed text to ", text)
    if (text) {
      this.chatService.sendMessage(text); // send the message if it's valid
      this.messageInputControl.reset();
    }
  }
}
