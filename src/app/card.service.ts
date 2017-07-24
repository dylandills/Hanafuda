import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { CARDS } from './mock-cards';
//import { Deck } from ...


@Injectable()
export class CardService {

  constructor() { }

  getCards() { // Returns an array of instaniated card objects from ./mock-cards.ts
    return CARDS;
  }

  // Get a particular card by their unique id.
  getCardById(cardId: number) {
    for(var i; i <= CARDS.length - 1; i++) {
      if (CARDS[i].id === cardId) {
        return CARDS[i];
      }
    }
  }
}
