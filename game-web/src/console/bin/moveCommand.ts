import { match } from "ts-pattern";
import { Directions, Game, getCurrentRoom } from "../../game";
import { move } from "../../game/move";

export function moveCommand(game: Game, args?: string[]) {
  if (game.status === 'on-combat') return Promise.resolve({
    result: 'you can not move during combat',
    game
  });
  if (game.status === 'ended') return Promise.resolve({
    result: 'GAME OVER',
    game
  });

  args = args ?? [];
  const maybeDirection = match(args[0]?.toUpperCase() ?? '')
    .when(direction => direction === 'N' || direction === Directions.North, () => Directions.North)
    .when(direction => direction === 'S' || direction === Directions.South, () => Directions.South)
    .when(direction => direction === 'E' || direction === Directions.East, () => Directions.East)
    .when(direction => direction === 'W' || direction === Directions.West, () => Directions.West)
    .otherwise(() => null);

  if (!maybeDirection) {
    return Promise.resolve({
      game,
      result: 'unknown direction',
    });
  }

  const { updatedGame, result } = move(game, maybeDirection);

  const currentRoom = getCurrentRoom(updatedGame);
  const baseActionDescription = `you move ${maybeDirection} \nyou see ${currentRoom.description}`;

  const resultMessage = match(result)
    .with('invalid-movement', () => 'you can not move into that direction on this room')
    .with('ok', () => baseActionDescription)
    .with('with-enemies', () => baseActionDescription
      .concat('\n', `there are ${currentRoom.enemies.length} enemies`)
      .concat('\n', `${currentRoom.enemies.map(x => x.name).join(' ')}`)
    )
    .exhaustive();

  return Promise.resolve({
    result: resultMessage,
    game: updatedGame
  });
}
