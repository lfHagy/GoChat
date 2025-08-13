import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { StatusEnum } from '../enums/status-enum';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  contacts = signal<UserInterface[]>([]);

  // MOCK DATA — remove once backend is integrated
  private mockUsers: UserInterface[] = [
    { id: '2', username: 'Greg Lee', status: StatusEnum.Online, contactList: [] },
    { id: '3', username: 'Bea Santello', status: StatusEnum.Away, contactList: [] },
    { id: '4', username: 'Angus Delaney', status: StatusEnum.Busy, contactList: [] }
  ];

  fetchContacts() { // backend will handle finding the correct users
    this.contacts.set(this.mockUsers);
    console.log("fetched contacts!", this.contacts())
  }

  updateContactStatus(userId: string, status: StatusEnum) { // will update statuses as it listens to socket we'll add later
    // TODO
  }
}
