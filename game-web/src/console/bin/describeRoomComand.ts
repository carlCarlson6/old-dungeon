import { Game } from "../../game";

export function describeRoomComand(game: Game, _?: string[]) {
  return Promise.resolve({
    result: game.currentRoom.description,
    game
  });
}
