import { Component } from '@angular/core';
import { ChatBubbleComponent } from "./chat-bubble/chat-bubble-component";

@Component({
  selector: 'app-chat-panel',
  imports: [ChatBubbleComponent],
  templateUrl: './chat-panel.html',
  styleUrl: './chat-panel.scss'
})
export class ChatPanel {
}
