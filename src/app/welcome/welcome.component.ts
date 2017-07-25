import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, birthMonth: string, score: string) {
    const newPlayer: Player = new Player(name, birthMonth, score);
    this.playerService.addPlayer(newPlayer);
  }
}
