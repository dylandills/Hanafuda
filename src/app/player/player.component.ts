import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import { PlayerService} from '../player.service'
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [CardService, PlayerService]

})
export class PlayerComponent implements OnInit {

  hand: any[] = [];
  localPlayers: Player[] = [];


  constructor(private cardService: CardService) { }

  ngOnInit() {

  }
  //deal cards to players.
  dealCards() {
    this.hand = this.cardService.dealCards(this.localPlayers);
    return this.hand;
  }

}
