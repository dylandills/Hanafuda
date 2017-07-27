import { Component } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { DropEvent} from 'ng2-drag-drop';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss'],
})

export class PlayfieldComponent {
  cards: FirebaseListObservable<any[]>; //May not be needed here...
  playfield: any[] = [];
  hand: any[] = [];

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
