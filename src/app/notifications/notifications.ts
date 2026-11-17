
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  showNotifications: boolean = false;

  notifications: string[] = [
    'Bienvenue sur notre plateforme !',
    'Une nouvelle conférence est disponible.',
    'Votre profil a été créé avec succès.'
  ];

  afficherNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

}
