import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { CARDS } from './mock-cards';
import { Player } from './player.model';

@Injectable()
export class CardService {
  shuffleDeck: any[] = [];

  constructor() { }

  getCards() {
    return CARDS;

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

  getCardById(cardId: number){
   for (var i = 0; i <= CARDS.length - 1; i++) {
     if (CARDS[i].id === cardId) {
       return CARDS[i];
     }
   }
 }

  // Get a particular card by their unique id.
  // getCardById(cardId: string) {
  //   return this.database.object('cards/' + cardId);
  // }

  // discard(player){
  // player.hand = ["cards"];
  // for(let i=0; i<7; i++){
  //   player.hand.push(this.shuffleDeck[0]);
  //   this.shuffleDeck.splice(0, 1);
  // }
  // return this.shuffleDeck;

  // drawToMaxHand(player){
  //   if(player.hand.length < 8){
  //     for(let i=player.hand.length; i < 8; i++){
  //       player.hand.push(this.shuffleDeck[0]);
  //       this.shuffleDeck.splice(0, 1);
  //     }
  //   }
  //   else{
  //     alert("Your hand is full.");
  //   }
  //   return this.shuffleDeck;
  // }
  //   }
}
