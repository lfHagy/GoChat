import { Component } from '@angular/core';
import { ContactCard } from './contact-card/contact-card';

@Component({
  selector: 'app-contact-bar',
  imports: [ContactCard],
  templateUrl: './contact-bar.html',
  styleUrl: './contact-bar.scss'
})
export class ContactBar {

}
