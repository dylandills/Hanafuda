import {Component, OnInit} from '@angular/core';
import { Card } from '../card.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})

export class CardComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;

  constructor(private router: Router, private cardService: CardService) {
  }
  ngOnInit() {
  }
}
