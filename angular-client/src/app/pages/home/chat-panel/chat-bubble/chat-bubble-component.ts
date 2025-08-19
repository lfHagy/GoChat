import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat-bubble',
  imports: [ DatePipe ],
  templateUrl: './chat-bubble-component.html',
  styleUrl: './chat-bubble-component.scss'
})
export class ChatBubbleComponent {
  @Input() message!: string;
  @Input() type!: 'sent' | 'received';
  @Input() timestamp!: Date;
}
