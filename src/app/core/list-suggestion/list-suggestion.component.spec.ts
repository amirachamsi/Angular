import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  // Correction ici : ajout des crochets [] pour en faire un tableau (Array)
  styleUrls: ['./list-suggestion.component.css'] 
})
export class ListSuggestionComponent {

  // 1. Propriétés de données
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: `Suggestion pour organiser une journée de team building afin de renforcer les liens entre les membres de l'équipe.`,
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: `Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.`,
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: `Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.`,
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: `Refonte complète de l’interface utilisateur pour offrir une meilleure expérience utilisateur.`,
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  favorites: Suggestion[] = [];
  searchText: string = ''; // Cette variable doit être DANS la classe
search: any;

  // 2. Méthodes
  addLike(suggestion: Suggestion) {
    suggestion.nbLikes += 1;
  }

  addToFavorites(suggestion: Suggestion) {
    const exists = this.favorites.find(fav => fav.id === suggestion.id);
    if (!exists) {
      this.favorites.push(suggestion);
    }
  }

  filterSuggestions(): Suggestion[] {
    if (!this.searchText) return this.suggestions;

    const text = this.searchText.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(text) || s.category.toLowerCase().includes(text)
    );
  }

  // Pour corriger l'erreur d'affichage du [ngClass]
  getBadgeClass(status: string) {
    return {
      'status-acceptee': status === 'acceptee',
      'status-refusee': status === 'refusee',
      'status-en-attente': status === 'en_attente'
    };
  }
}