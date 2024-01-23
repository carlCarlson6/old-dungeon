import { GameCommand } from ".";
import { Game } from "../../game";

export const directionsCommand: GameCommand = (game: Game, _?: string[]) =>  {
  return Promise.resolve({
    game,
    result: Object.keys(game.currentRoom.connections).join(', ')
  })
}