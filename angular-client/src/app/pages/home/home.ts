import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactBar } from "./contact-bar/contact-bar";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    ContactBar,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  contactBarOpen = signal(true);
  totalUnreadMessages = signal(1); // probably gonna stick this in a message and chat service

  userService = inject(UserService);

  toggleContactBar() { // flip the bar signal
    this.contactBarOpen.set(!this.contactBarOpen());
  }
}
