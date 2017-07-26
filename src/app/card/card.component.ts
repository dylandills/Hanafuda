import {Component, OnInit} from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
//import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})

export class CardComponent implements OnInit {
  cards: any[] = [];

  constructor(private router: Router, private cardService: CardService) {
  }
  ngOnInit() {
  }
}
