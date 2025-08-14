import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { StatusEnum } from '../enums/status-enum';
import { ContactInterface } from '../interfaces/contact-interface';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  contacts = signal<ContactInterface[]>([]);

  // MOCK DATA — remove once backend is integrated
  private mockUsers: ContactInterface[] = [
    { id: '2', username: 'Greg Lee', status: StatusEnum.Online },
    { id: '3', username: 'Bea Santello', status: StatusEnum.Away },
    { id: '4', username: 'Angus Delaney', status: StatusEnum.Busy }
  ];

  fetchContacts() { // backend will handle finding the correct users
    this.contacts.set(this.mockUsers);
    console.log("fetched contacts!", this.contacts())
  }

  updateContactStatus(userId: string, status: StatusEnum) { // will update statuses as it listens to socket we'll add later
    // TODO
  }
}
