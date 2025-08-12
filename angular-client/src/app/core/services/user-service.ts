import { inject, Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { StatusEnum } from '../enums/status-enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockLoggedUser: UserInterface = {
    id: "1",
    username: "Angular John",
    contactList: ["2", "3", "4"],
    status: StatusEnum.Online
  }

  router = inject(Router);

  currentUser = signal<UserInterface | null>(null);


  login() {
    this.currentUser.set(this.mockLoggedUser);
    console.log("logged user has username ", this.currentUser()?.username);
    this.router.navigate(['/home'])
  }

  logout() { // TODO - add a dialogue to confirm if the user wants to logout
    this.router.navigate([""]);
  }
}
