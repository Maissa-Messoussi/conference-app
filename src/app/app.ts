import { Component } from '@angular/core';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { UserProfile } from './Components/user-profile/user-profile';
import { FriendsList } from './Components/friends-list/friends-list';
import { Notifications } from './Components/notifications/notifications';
import { Footer } from './Components/footer/footer';
import { ConferenceList } from './Components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, UserProfile, FriendsList, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}