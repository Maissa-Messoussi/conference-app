import { Component, signal } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  user = signal({
    name: 'Maissa',
    email: 'Maissa@gmail.com',
  });
}