import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  imports: [],
  templateUrl: './chat-bubble-component.html',
  styleUrl: './chat-bubble-component.scss'
})
export class ChatBubbleComponent {
  @Input() message!: string;
  @Input() type!: 'sent' | 'received';
}
