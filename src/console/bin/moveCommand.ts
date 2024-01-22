import { match } from "ts-pattern";
import { Directions, Game } from "../../game";
import { move } from "../../game/move";

export function moveCommand(game: Game, args?: string[]) {
  args = args ?? [];
  const maybeDirection = match(args.at(0)?.toUpperCase() ?? '')
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
  const resultMessage = result === 'invalid-movement'
    ? 'you can not move into that direction on this room'
    : `you move ${maybeDirection} \nyou see ${updatedGame.currentRoom.description}`;
  return Promise.resolve({
    result: resultMessage,
    game: updatedGame
  });
}
