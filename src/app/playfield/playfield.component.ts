import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { PlayerService } from '../player.service';
import { DropEvent} from 'ng2-drag-drop';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss'],
  providers: [ CardService, PlayerService ]
})

export class PlayfieldComponent implements OnInit {
  cards: Card[];

  localPlayers: Player[] = [];
  shuffleDeck: any[] = [];
  deck: any[] = [];
  playfield: any[] = [];
  hand: any[] = [];

  constructor(private router: Router, private cardService: CardService, private playerService: PlayerService) { }

  ngOnInit() {

    this.cards = this.cardService.getCards();

    // Randomize deck of cards on init.
    while (this.deck.length > 0) {
    let i = this.deck.length;
    var rand = Math.floor(Math.random() *i);
    var topCard = this.deck[rand];
    this.shuffleDeck.push(topCard);
    this.deck.splice(this.deck.indexOf(topCard), 1);
    }
  }

  // goToCardDetail(clickedCard: Card) {
  //   this.router.navigate(['cards', clickedCard.id]);
  // }

  dealCards(){
    this.shuffleDeck = this.cardService.dealCards(this.localPlayers);
    return this.shuffleDeck;
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
