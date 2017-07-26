import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm1(name: string, birthMonth: string, score: number) {
    const newPlayer: Player = new Player(name, birthMonth, score);
    this.playerService.addPlayer(newPlayer);
  }
  submitForm2(name: string, birthMonth: string, score: number) {
    const newPlayer: Player = new Player(name, birthMonth, score);
    this.playerService.addPlayer(newPlayer);
  }

}


// add PlayerTurnPipe to get data from both players into the database on welcome html
