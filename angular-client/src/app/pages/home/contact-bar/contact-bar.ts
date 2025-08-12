import { Component, inject } from '@angular/core';
import { ContactCard } from './contact-card/contact-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-bar',
  imports: [ContactCard],
  templateUrl: './contact-bar.html',
  styleUrl: './contact-bar.scss'
})
export class ContactBar {
  router = inject(Router);

  navigateToChat() {
    this.router.navigate(["/home/chat"]); // when we have proper chat ids, navigate to home/chat/id
  }
}
