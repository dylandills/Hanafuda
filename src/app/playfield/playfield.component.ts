import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { DropEvent } from 'ng2-drag-drop';
import { CardService } from '../card.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss'],
  providers: [CardService]
})

export class PlayfieldComponent implements OnInit {
  cards;
  playfield: any[] = [];
  hand: any[] = [];

    constructor(private cardService: CardService) { }

    ngOnInit() {
      this.cards = this.cardService.getCards();
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
