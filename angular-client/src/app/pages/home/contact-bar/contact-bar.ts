import { Component, Inject, inject, OnInit } from '@angular/core';
import { ContactCard } from './contact-card/contact-card';
import { ContactsService } from '../../../core/services/contacts-service';

@Component({
  selector: 'app-contact-bar',
  imports: [ContactCard],
  templateUrl: './contact-bar.html',
  styleUrl: './contact-bar.scss'
})
export class ContactBar implements OnInit {
  contactsService = inject(ContactsService);

  contacts = this.contactsService.contacts;
  selectedContact = this.contactsService.selectedContact;

  ngOnInit() {
    this.contactsService.fetchContacts();
  }
}
