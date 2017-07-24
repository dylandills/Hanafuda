import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../card.model';


@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.sass'],
  providers: [CardService]
})
export class PlayfieldComponent implements OnInit {
  cards: Card[];
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
    console.log(this.cards); //Should return an array of Cards.
  }

  onHandDrop(e: DropEvent) {
    this.hand.push(e.dragData);
    this.removeCard(e.dragData, this.playfield)
  }
  onPlayfieldDrop(e: DropEvent) {
    this.playfield.push(e.dragData);
    this.removeCard(e.dragData, this.hand)
  }
  removeCard(item: any, list: Array<any>) {
    let index = card.map(function (e) {
      return e.image
    }).indexOf(card.image);
    card.splice(index, 1);
  }

  goToDetailPage(clickedCard: Card) {
    this.router.navigate(['cards', clickedCard.id]);
  }
}
