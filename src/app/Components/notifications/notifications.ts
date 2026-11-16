import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifList = [
    { id: 1, message: 'Vous avez une nouvelle invitation à une conférence.' },
    { id: 2, message: 'Votre inscription à Angular 21 Conference est confirmée.' },
  ];

  show = false;

  ShowNotifications() {
    this.show = !this.show;
  }
}