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

  submitForm(name: string, score: number) {
    const newPlayer: Player = new Player(name, score=0);
    this.playerService.addPlayer(newPlayer);
  }

  submitForm2(name: string, score: number) {
    const newPlayer: Player = new Player(name, score=0);
    this.playerService.addPlayer(newPlayer);
  }
}
