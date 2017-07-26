import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CardService {
  cards: FirebaseListObservable<any[]>;
  shuffleDeck: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('cards');
  }

  getCards() {
    return this.cards;
  }

  // Get a particular card by their unique id.
  getCardById(cardId: string) {
    return this.database.object('cards/' + cardId);
  }

  dealCards(localPlayers) {
    for(let player of localPlayers) {
      for(let i = 0; i < 9; i++) {
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0,1);
      }
    }
    console.log(this.shuffleDeck);
  }

  discard(player){
  player.hand = ["cards"];
  for(let i=0; i<7; i++){
    player.hand.push(this.shuffleDeck[0]);
    this.shuffleDeck.splice(0, 1);
  }
  return this.shuffleDeck;
}

drawToMaxHand(player){
  if(player.hand.length < 8){
    for(let i=player.hand.length; i < 8; i++){
      player.hand.push(this.shuffleDeck[0]);
      this.shuffleDeck.splice(0, 1);
    }
  }
  else{
    alert("Your hand is full.");
  }
  return this.shuffleDeck;
}
  }
