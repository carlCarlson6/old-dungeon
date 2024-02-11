import { match } from "ts-pattern";
import { Game, getCurrentRoom } from "../../game";

export function describeRoomComand(game: Game, _?: string[]) {
  const currentRoom = getCurrentRoom(game);
  const message = match(game.status)
    .with('ended', () => 'GAME OVER')
    .with('on-combat', () => `you are fighting against ${currentRoom.enemies.map(x => x.name).join(' ')}`)
    .with('on-going', () => currentRoom.description)
    .exhaustive();

  return Promise.resolve({
    result: message,
    game
  });
}
