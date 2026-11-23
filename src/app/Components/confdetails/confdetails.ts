import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-confdetails',
  imports: [DatePipe],
  templateUrl: './confdetails.html',
  styleUrl: './confdetails.css',
})
export class Confdetails {
  // père -> fils
  conference = input<Conference | null>(null);

  // fils -> père : on envoie l'id de la conférence où on a cliqué
  registered = output<number>();

  onRegister(c: Conference) {
    this.registered.emit(c.id);
  }
}