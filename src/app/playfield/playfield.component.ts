import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss', ],
  providers: [CardService]
})

export class PlayfieldComponent implements OnInit {

  cards: Card[];
  players: Player[];
  shuffleDeck: any[] = [];
  deck: any[] = [];
  playfield: any[] = [];
  hand: any[] = [];

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
    console.log(this.cards); //Should return an array of Cards.

    while(this.deck.length > 0) {
      let i = this.deck.length;
      var rand = Math.floor(Math.random() *i);
      var topCard = this.deck[rand];
      this.shuffleDeck.push(topCard);
      this.deck.splice(this.deck.indexOf(topCard), 1);
    }
  }

  dealCards() {
    for(let player of this.players) {
      for(let i = 0; i < 9; i++) {
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0,1);
      }
    }
    console.log(this.shuffleDeck);
  }

  goToCardDetail(clickedCard: Card) {
    this.router.navigate(['cards', clickedCard.id]);
  }

  onHandDrop(e: DropEvent) {
    this.hand.push(e.dragData);
    this.removeCard(e.dragData, this.playfield)
  }
  onPlayfieldDrop(e: DropEvent) {
    this.playfield.push(e.dragData);
    this.removeCard(e.dragData, this.hand)
  }
  removeCard(card: any, playfield: Array<any>) {
    let index = card.map(function (e) {
      return e.image
    }).indexOf(card.image);
    card.splice(index, 1);
  }
}
