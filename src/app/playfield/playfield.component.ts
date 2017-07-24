import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { Router } from '@angular/router';
import { CardService } from '../card.service';


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

  goToDetailPage(clickedCard: Card) {
    this.router.navigate(['cards', clickedCard.id]);
  }
}
