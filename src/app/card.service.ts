import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardService {
  cards: FirebaseListObservable<any[]>;
  shuffleDeck: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('cards', {
      query: {
        limitToFirst: 8
      }
    });
  }

  // Retrieve list of cards from Firebase.
  getCards() {
    return this.cards;
  }

  dealCards(localPlayers) {
    for(let player of localPlayers) {
      for(let i = 0; i < 9; i++) {
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0,1);
      }
    }
    console.log(this.shuffleDeck);
    return this.shuffleDeck;
  }

  //Get a particular card by their unique id.
  getCardById(cardId: string) {
    return this.database.object('cards/' + cardId);
  }
}
