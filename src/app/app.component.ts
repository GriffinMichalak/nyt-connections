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
  maxSelections = 4;
  selectedCount = 0;
  selectedCards: Card[] = [];
  
  cards: Card[] = [
    // YELLOW
    new Card('GRUFF', 'RASPY', '#f9df6d', false, false),
    new Card('HOARSE', 'RASPY', '#f9df6d', false, false),
    new Card('HUSKY', 'RASPY', '#f9df6d', false, false),
    new Card('ROUGH', 'RASPY', '#f9df6d', false, false),
    
    // GREEN
    new Card('LITTLE', 'FINGERS', '#a0c35a', false, false),
    new Card('MIDDLE', 'FINGERS', '#a0c35a', false, false),
    new Card('POINTER', 'FINGERS', '#a0c35a', false, false),
    new Card('RING', 'FINGERS', '#a0c35a', false, false),
    
    // BLUE
    new Card('AMBER', 'ALE STYLES', '#b0c4ef', false, false),
    new Card('PORTER', 'ALE STYLES', '#b0c4ef', false, false),
    new Card('SOUR', 'ALE STYLES', '#b0c4ef', false, false),
    new Card('STOUT', 'ALE STYLES', '#b0c4ef', false, false),
    
    // PURPLE
    new Card('BULLDOG', 'FRENCH ___', '#ba81c5', false, false),
    new Card('FRY', 'FRENCH ___', '#ba81c5', false, false),
    new Card('HORN', 'FRENCH ___', '#ba81c5', false, false),
    new Card('KISS', 'FRENCH ___', '#ba81c5', false, false)
  ]; 
  
  ngOnInit(): void {
    this.cards = this.shuffle(this.cards); 
  }

  selectCard(card: Card) {
    if (card.selected) {
      card.selected = false;
      this.selectedCount--;
      this.selectedCards.pop();
    } else {
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
      console.log('correct!');
    } else {
      console.log('incorrect');
    }
  }
  

  shuffleCards() {
    this.cards = this.shuffle(this.cards);
  }

  shuffle(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) { 
  
      var j = Math.floor(Math.random() * (i + 1));
                 
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
     
  return array;
}

  title = 'nyt-connections';
}
