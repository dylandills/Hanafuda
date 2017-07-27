import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
  providers: [CardService]
})
export class DeckComponent implements OnInit {

  cards: FirebaseListObservable<any[]>;

  deck: any[] = [];
  shuffleDeck: any[] = [];

  // goToCardDetail variables.
  cardId: string;
  cardToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cardService: CardService
  ) { }

  ngOnInit() {

    this.cards = this.cardService.getCards(); // Get Cards supplied by the CardService.

    this.route.params.forEach((urlParameters) => {
      this.cardId = urlParameters['id'];
    });
    this.cardToDisplay = this.cardService.getCardById(this.cardId);


    // Randomize deck of cards on init.
    while (this.deck.length > 0) {
      let i = this.deck.length;
      var rand = Math.floor(Math.random() *i);
      var topCard = this.deck[rand];
      this.shuffleDeck.push(topCard);
      this.deck.splice(this.deck.indexOf(topCard), 1); //Remove a card.
    }
  }

}
