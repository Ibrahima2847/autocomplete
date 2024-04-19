import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None, // Permet de désactiver l'encapsulation des styles pour ce composant
  host: {
    'ngSkipHydration': ''
  }
})
export class AutocompleteComponent {
  searchTerm: string = '';
  suggestions: string[] = [  'Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes',
  'Strawberry', 'Watermelon', 'Lemon', 'Cherry', 'Blueberry',
  'Mango', 'Peach', 'Pear', 'Kiwi', 'Apricot',
  'Pomegranate', 'Coconut', 'Raspberry', 'Blackberry', 'Cranberry',
  'Avocado', 'Guava', 'Papaya', 'Lychee', 'Dragonfruit',
  'Fig', 'Passionfruit', 'Melon', 'Starfruit', 'Tangerine',
  'Plum', 'Lime', 'Persimmon', 'Date', 'Kumquat'];
  filteredSuggestions: string[] = [];

  constructor() {}

  fetchSuggestions() {
    if (this.searchTerm.length > 0) {
      this.filteredSuggestions = this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredSuggestions = []; // Réinitialiser la liste des suggestions lorsque le terme de recherche est vide
    }
  }
}
