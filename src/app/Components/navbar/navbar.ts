import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = signal(['Accueil','Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);
  activeLink = signal('Accueil');

  setActive(link: string): void {
    this.activeLink.set(link);
  }
}