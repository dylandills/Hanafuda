import {Component, OnInit} from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  cards: Array<any>;

  constructor() {
  }
  ngOnInit() {
  }
