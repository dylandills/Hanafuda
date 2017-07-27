import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Player } from '../player.model';
import { DropEvent} from 'ng2-drag-drop';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.scss'],
})

export class PlayfieldComponent implements OnInit {

  playfield: any[] = [];
  hand: any[] = [];

  constructor () { }

  ngOnInit() {

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
