import { match } from "ts-pattern";
import { Game } from "../../game";

export function describeRoomComand(game: Game, _?: string[]) {
  const message = match(game.status)
    .with('ended', () => 'GAME OVER')
    .with('on-combat', () => `you are fighting against ${game.currentRoom.enemies.map(x => x.name).join(' ')}`)
    .with('on-going', () => game.currentRoom.description)
    .exhaustive();

  return Promise.resolve({
    result: message,
    game
  });
}
