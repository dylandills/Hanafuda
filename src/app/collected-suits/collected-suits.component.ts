import { Component, OnInit } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import {DropEvent} from 'ng2-drag-drop';

@Component({
  selector: 'app-collected-suits',
  templateUrl: './collected-suits.component.html',
  styleUrls: ['./collected-suits.component.scss']
})
export class CollectedSuitsComponent implements OnInit {
  cards: Card[];
  hand: Card[];
  suits: Card[];

      onHandDrop(e: DropEvent) {
        this.hand.push(e.dragData);
        this.removeCard(e.dragData, this.suits)
      }
      onSuitsDrop(e: DropEvent) {
        this.suits.push(e.dragData);
        this.removeCard(e.dragData, this.hand)
      }
      removeCard(card: any, suit: Array<any>) {
        let index = card.map(function (e) {
          return e.image
        }).indexOf(card.image);
        card.splice(index, 1);
      }
      // onCardDrop(e: any) {
      //     this.droppedCards.push(e.dragData);
      // }
  constructor() { }

  ngOnInit() {
  }
}
