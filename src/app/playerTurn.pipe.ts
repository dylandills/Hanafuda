import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'playerTurn',
  pure: false
})

export class PlayerTurnPipe implements PipeTransform {

transform(input: Player[], nextPlayerTurn) {
  var output: Player[] = [];
    if(nextPlayerTurn === "incompletePlayers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].turn === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (nextPlayerTurn === "completedPlayers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].turn === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
