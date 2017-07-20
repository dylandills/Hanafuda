import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { CARDS } from './mock-cards';
//import { Deck } from ...

/* Writeup: import our model and build from the CARDS.
 *Assumptions:
 * -- playfield component is a parent component of hand component.
 * -- player1 and player2 have their own hands that are instances of the hand component therefore are seperate frome each other.
 * -- players can endTurn() by clicking a button, thus rotating player's turn to the next player.
 * -- If endTurn() is true, show this div with player instance.

 * --

 * Questions:
 * Which components will need access to the methods provided by the service?
 * How to switch between instances of players and instances of the player's hand when a player's turn ends.
 * Since player1 and player2 are seperate instances, can the player component be a child component of hand?
 * How to determine when a player's turn ends.
 * Should endTurn() be a method of the player or the hand?
 * Where do players store their suits/points?
 * Discard field
 * if suit = true, mv card(s) to suits/point area.
 */


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

  /*
  * Instaniate card deck, refer to imported pkg.
  * Shuffle the cards in the array.
  * Draw a card from the shuffled deck.
  */
  // draw() { // Draw a card from the shuffled deck.
  //   var myDeck = new Deck([CARDS]);
  //   myDeck.shuffle();
  //   var drawnCard = myDeck.draw();
  // }

  addCardTo() {

  }



}
