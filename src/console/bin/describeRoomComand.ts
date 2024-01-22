import { Game } from "../../game";

export function describeRoomComand(game: Game, args?: string[]) {
  return Promise.resolve({
    result: game.currentRoom.description,
    game
  });
}
