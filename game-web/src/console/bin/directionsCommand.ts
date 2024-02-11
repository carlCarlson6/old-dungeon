import { GameCommand } from ".";
import { Game, getCurrentRoom } from "../../game";

export const directionsCommand: GameCommand = (game: Game, _?: string[]) =>  {
  return Promise.resolve({
    game,
    result: Object.keys(getCurrentRoom(game).connections).join(', ')
  })
}