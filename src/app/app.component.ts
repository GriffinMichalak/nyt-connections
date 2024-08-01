import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from '../models/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  mistakes = 4; 
  connectionsFound = 0; 
  maxSelections = 4;
  selectedCount = 0;
  selectedCards: Card[] = [];
  
  cards: Card[] = [
    // YELLOW
    new Card('GRUFF', 'RASPY', '#f9df6d'),
    new Card('HOARSE', 'RASPY', '#f9df6d'),
    new Card('HUSKY', 'RASPY', '#f9df6d'),
    new Card('ROUGH', 'RASPY', '#f9df6d'),
    
    // GREEN
    new Card('LITTLE', 'FINGERS', '#a0c35a'),
    new Card('MIDDLE', 'FINGERS', '#a0c35a'),
    new Card('POINTER', 'FINGERS', '#a0c35a'),
    new Card('RING', 'FINGERS', '#a0c35a'),
    
    // BLUE
    new Card('AMBER', 'ALE STYLES', '#b0c4ef'),
    new Card('PORTER', 'ALE STYLES', '#b0c4ef'),
    new Card('SOUR', 'ALE STYLES', '#b0c4ef'),
    new Card('STOUT', 'ALE STYLES', '#b0c4ef'),
    
    // PURPLE
    new Card('BULLDOG', 'FRENCH ___', '#ba81c5'),
    new Card('FRY', 'FRENCH ___', '#ba81c5'),
    new Card('HORN', 'FRENCH ___', '#ba81c5'),
    new Card('KISS', 'FRENCH ___', '#ba81c5')
  ]; 
  
  ngOnInit(): void {
    this.cards = this.shuffle(this.cards); 
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
