import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  player: Array<any>;

  constructor() { }

  addPlayer(newPlayer: Player) {
      this.player.push(newPlayer);
    }
}
