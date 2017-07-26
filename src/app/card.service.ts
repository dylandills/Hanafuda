import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { CARDS } from './mock-cards';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CardService {
  cards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('cards');
  }

  getCards() { // Returns an array of instaniated card objects from ./mock-cards.ts
    return this.cards;
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
