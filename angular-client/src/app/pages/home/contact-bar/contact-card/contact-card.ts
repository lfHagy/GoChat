import { Component, inject, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { StatusEnum } from '../../../../core/enums/status-enum';
import { ContactInterface } from '../../../../core/interfaces/contact-interface';

@Component({
  selector: 'app-contact-card',
  imports: [MatBadgeModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss'
})
export class ContactCard {
  @Input() user!: ContactInterface;

  router = inject(Router);

  navigateToChat() {
    this.router.navigate(["/home/chat"]); // when we have proper chat ids, navigate to home/chat/id
  }

  readonly statusColors: Record<StatusEnum, string> = {
    [StatusEnum.Online]: 'green',
    [StatusEnum.Away]: 'orange',
    [StatusEnum.Busy]: 'firebrick', // match your enum name
    [StatusEnum.Offline]: 'darkgray'
  };
}
