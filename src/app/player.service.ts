import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  constructor() { }

  addPlayer1(newPlayer1: Player1) {
      this.players1.push(newPlayer1);
    }

  addPlayer2(newPlayer2: Player2) {
      this.players2.push(newPlayer2);
    }
}
