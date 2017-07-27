import { Injectable } from '@angular/core';
import { Player } from './player.model';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players: any[] = [];
  localPlayers: Player[] = [];

  constructor() { }

  getPlayers() {
    return this.players;
  }

  getLocalPlayers(){
    return this.localPlayers;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  // getPlayerById(playerId: string) {
  //   return this.database.object('players/' + playerId);
  // }

}
