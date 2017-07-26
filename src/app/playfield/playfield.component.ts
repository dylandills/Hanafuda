import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { PlayerService } from '../player.service';
import { DropEvent} from 'ng2-drag-drop';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss'],
  providers: [ CardService, PlayerService ]
})

export class PlayfieldComponent implements OnInit {
  cards;
  players;
  currentRoute: string = this.router.url;

  localPlayers: Player[] = [];
  shuffleDeck: any[] = [];
  deck: any[] = [];
  playfield: any[] = [];
  hand: any[] = [];

  constructor(private router: Router, private cardService: CardService, private playerService: PlayerService) { }

  ngOnInit() {

    while (this.deck.length > 0) {
    let i = this.deck.length;
    var rand = Math.floor(Math.random() *i);
    var topCard = this.deck[rand];
    this.shuffleDeck.push(topCard);
    this.deck.splice(this.deck.indexOf(topCard), 1);
    }
    this.cards = this.cardService.getCards();
    // this.cardService.getCards().subscribe(response => {
    //   this.cards = response;
      //Retrieve cards from firebase
      // this.shuffleDeck = this.cardService.getCards(this.cards);
    // }
  }

  goToCardDetail(clickedCard) {
    this.router.navigate(['cards', clickedCard.$key]);
  }

  dealCards(){
    this.shuffleDeck = this.cardService.dealCards(this.localPlayers);
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
