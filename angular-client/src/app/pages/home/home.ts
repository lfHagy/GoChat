import { Component, signal } from '@angular/core';
import { ContactBar } from "./contact-bar/contact-bar";
import { ChatPanel } from "./chat-panel/chat-panel";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  imports: [
    ContactBar,
    ChatPanel,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  open = signal(true);
}
