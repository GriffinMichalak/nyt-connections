import { Component } from '@angular/core';
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
export class AppComponent {
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

  selectCard(card: Card): void {
    card.selected = !card.selected; 
    console.log(card);
  }

  title = 'nyt-connections';
}
