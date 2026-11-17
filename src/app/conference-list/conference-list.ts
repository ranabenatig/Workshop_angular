
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe, NgClass],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchText: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 et ses nouveautés',
      description: 'Découvrir les nouveautés du framework Angular.',
      date: new Date('2026-12-10'),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 20
    },
    {
      id: 2,
      title: 'Développement Web',
      description: 'Les nouvelles technologies du Web.',
      date: new Date('2026-12-15'),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 25
    },
    {
      id: 3,
      title: 'Intelligence Artificielle',
      description: 'Introduction à l’intelligence artificielle.',
      date: new Date('2026-12-20'),
      place: 'Sfax',
      maxParticipants: 20,
      nbParticipants: 20
    },
    {
      id: 4,
      title: 'TypeScript avancé',
      description: 'Apprendre les fonctionnalités avancées.',
      date: new Date('2026-12-25'),
      place: 'Tunis',
      maxParticipants: 40,
      nbParticipants: 10
    }
  ];

  // Recherche par titre
  get filteredConferences(): Conference[] {
    return this.conferences.filter(conf =>
      conf.title.toLowerCase().includes(
        this.searchText.toLowerCase()
      )
    );
  }

  // Calcul des places restantes
  getRemainingPlaces(conf: Conference): number {
    return conf.maxParticipants - conf.nbParticipants;
  }

  // Déterminer la couleur du bouton
  getButtonClass(conf: Conference): string {
    const remaining = this.getRemainingPlaces(conf);

    if (remaining === 0) {
      return 'full';
    } else if (remaining < 10) {
      return 'limited';
    } else {
      return 'available';
    }
  }

  // Inscription à une conférence
  register(conf: Conference): void {
    if (conf.nbParticipants < conf.maxParticipants) {
      conf.nbParticipants++;
    }
  }
}
