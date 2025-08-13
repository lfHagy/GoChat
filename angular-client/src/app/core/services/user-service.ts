import { inject, Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { StatusEnum } from '../enums/status-enum';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  router = inject(Router);

  currentUser = signal<UserInterface | null>(null);

  // MOCK LOGIN — remove once backend is integrated
  mockLoggedUser: UserInterface = {
    id: "1",
    username: "Angular John",
    contactList: ["2", "3", "4"],
    status: StatusEnum.Online
  }

  login() {
    this.currentUser.set(this.mockLoggedUser);
    console.log("Logged in user:", this.currentUser()?.username);
    this.router.navigate(['/home']);
  }

  logout() {
    this.router.navigate([""]);
  }
}
