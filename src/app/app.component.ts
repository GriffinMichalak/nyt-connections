import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from '../models/card';
import { CommonModule } from '@angular/common';

import * as data from '../assets/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  data: any = data.july31;

  cards: Card[] = []; 

  mistakes = 4; 
  connectionsFound = 0; 
  maxSelections = 4;
  selectedCount = 0;
  selectedCards: Card[] = [];
  
  ngOnInit(): void {
    this.cards = this.shuffle(this.cards); 
    console.log('Data', this.data);

    this.data.forEach((item: any) => {
      this.cards.push(new Card(item.title, item.category, item.color)); 
    });
  }
  
  selectCard(card: Card) {
    // deselect card
    if (card.selected) {
      card.selected = false;
      this.selectedCount--;
      this.selectedCards.pop();
    } 
    // select card if possible
    else {
      if (this.selectedCount < this.maxSelections) {
        card.selected = true;
        this.selectedCount++;
        this.selectedCards.push(card);
      } else {
        // alert('You can only select up to 4 cards.');
      }
    }
  }

  deselectAll() {
    this.cards.forEach(card => {
      card.selected = false;
      this.selectedCards.pop();
    });
    this.selectedCount = 0;
  }

  submit() {  
    const firstCategory = this.selectedCards[0].category;
    const allSameCategory = this.selectedCards.every(card => card.category === firstCategory);
  
    if (allSameCategory) {
      console.log('correct');
      this.selectedCards.forEach(card => card.found = true);
      this.connectionsFound++; 
      this.shuffleCards();
    } else {
      console.log('incorrect');
      this.deselectAll();
      this.mistakes--;
    }
    this.deselectAll();
  }
  

  shuffleCards() {
    this.cards = this.shuffle(this.cards);
  }
  
  playAgain() {
    location.reload();
  }

  shuffle(cards: Card[]): Card[] {
    const foundCards: Card[] = [];
    const notFoundCards: Card[] = [];
    for (const card of cards) {
        if (card.found) {
            foundCards.push(card);
        } else {
            notFoundCards.push(card);
        }
    }

    for (let i = notFoundCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [notFoundCards[i], notFoundCards[j]] = [notFoundCards[j], notFoundCards[i]];
    }

    const shuffledCards: Card[] = [...notFoundCards, ...foundCards];

    return shuffledCards;
}


  title = 'nyt-connections';
}
