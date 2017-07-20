import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

  constructor() { }

  addPlayer(newPlayer: Player) {
      this.player.push(newPlayer);
    }
}
