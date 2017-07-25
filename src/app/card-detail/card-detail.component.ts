import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  providers: [CardService]
})
export class CardDetailComponent implements OnInit {
  cardId: number = null;
  cardToDisplay: Card;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cardId = parseInt(urlParameters['id']);
    });
  }

}
