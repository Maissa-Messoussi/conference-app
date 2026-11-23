import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { Confdetails } from '../confdetails/confdetails';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe, Confdetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences = signal<Conference[]>([
    { id: 1, title: 'Angular 21 Conference', description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.', date: new Date(2027, 10, 15), place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur la gestion d’état réactive avec les signals.', date: new Date(2027, 10, 30), place: 'Ariana', maxParticipants: 30, nbParticipants: 24 },
    { id: 3, title: 'Web Conference', description: 'Panorama des technologies web modernes.', date: new Date(2027, 10, 20), place: 'Sousse', maxParticipants: 50, nbParticipants: 50 },
    { id: 4, title: 'TypeScript Day', description: 'Édition 2025, déjà terminée.', date: new Date(2025, 4, 10), place: 'Monastir', maxParticipants: 80, nbParticipants: 80 },
  ]);

  searchTerm = signal('');
  selectedId = signal<number | null>(null);

  selectedConference = computed<Conference | null>(
    () => this.conferences().find((c) => c.id === this.selectedId()) ?? null
  );

  today = new Date();

  filtered = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.conferences().filter((c) => c.title.toLowerCase().includes(term));
  });

  select(id: number) {
    this.selectedId.set(id);
  }

  // Ajoute 1 participant à la conférence d'id donné (si il reste des places)
  addParticipant(id: number) {
    this.conferences.update((list) =>
      list.map((conf) =>
        conf.id === id && conf.maxParticipants - conf.nbParticipants > 0
          ? { ...conf, nbParticipants: conf.nbParticipants + 1 }
          : conf
      )
    );
  }

  // Clic sur le bouton de la carte
  register(event: Event, c: Conference) {
    event.stopPropagation(); // évite de sélectionner la carte en même temps
    this.addParticipant(c.id);
  }

  // Clic sur le bouton du composant fils
  onChildRegistered(id: number) {
    this.addParticipant(id);
  }
}