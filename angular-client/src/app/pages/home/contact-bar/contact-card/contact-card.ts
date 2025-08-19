import { Component, inject, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { StatusEnum } from '../../../../core/enums/status-enum';
import { ContactInterface } from '../../../../core/interfaces/contact-interface';
import { ContactsService } from '../../../../core/services/contacts-service';

@Component({
  selector: 'app-contact-card',
  imports: [MatBadgeModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss'
})
export class ContactCard {
  @Input() contact!: ContactInterface;

  router = inject(Router);
  private readonly contactsService = inject(ContactsService);

  selectedContact = this.contactsService.selectedContact;

  contactSelected() {
    this.router.navigate([`/home/chat`, this.contact.id]);
    console.log("navigated to id ", this.contact.id);
    this.selectedContact?.set(this.contact);
  }

  readonly statusColors: Record<StatusEnum, string> = {
    [StatusEnum.Online]: 'green',
    [StatusEnum.Away]: 'orange',
    [StatusEnum.Busy]: 'firebrick',
    [StatusEnum.Offline]: 'darkgray'
  };
}
