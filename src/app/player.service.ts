import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  localPlayers: Player[] = [];

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
   }

  getPlayers() {
    return this.players;
  }

  getLocalPlayers(){
    return this.localPlayers;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer){
  const playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
  playerEntryInFirebase.update({name: localUpdatedPlayer.name, score: localUpdatedPlayer.score});
  }

  deletePlayer(localPlayerToDelete){
    const playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
