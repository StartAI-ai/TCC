import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  image: string;
  flipped: boolean;
  revealed: boolean;
}

@Component({
  selector: 'app-memoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.scss']
})

export class MemoriaComponent {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  pairsFound = 0;
  moves: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timer: any;

  constructor() {
    const images = [
      'banana.png', 'maca.png', 'laranja.png', 'uvas.png', 
      'morango.png', 'mamao.png'
    ]; // Image paths for the cards
    this.cards = this.generateCards(images);
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.minutes++;
          this.seconds = 0;
        }
      }, 1000);
    }
  }

  generateCards(images: string[]): Card[] {
    let cards: Card[] = [];
    images.forEach(image => {
      const imagePath = `../../../assets/img/jogos/jogo-memoria/${image}`;
      cards.push({ image: imagePath, flipped: false, revealed: false });
      cards.push({ image: imagePath, flipped: false, revealed: false });
    });
    return this.shuffle(cards);
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  flipCard(index: number): void {
    let card = this.cards[index];
    this.startTimer();
    if (!card.flipped && this.flippedCards.length < 2) {
      card.flipped = true;
      card.revealed = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.moves++;
          this.checkForMatch();
        }, 500);
      }
    }
  }

  checkForMatch(): void {
    if (this.flippedCards.length === 2) {
      if (this.flippedCards[0].image === this.flippedCards[1].image) {
        this.flippedCards = [];
        this.pairsFound++;
        if (this.pairsFound === this.cards.length / 2) {
          alert('Parabéns, você encontrou todos os pares!');
          this.resetGame();
        }
      } else {
        setTimeout(() => {
          this.flippedCards.forEach(card => card.flipped = false);
          this.flippedCards = [];
        }, 1000);
      }
    }
  }

  resetGame(): void {
    this.cards.forEach(card => card.flipped = false);
    this.cards = this.shuffle(this.cards);
    this.flippedCards = [];
    this.pairsFound = 0;
    clearInterval(this.timer);
    this.timer = null;
    this.moves = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.startTimer();
  }
}
