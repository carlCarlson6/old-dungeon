import { Directions, Game } from ".";

const move = (game: Game, direction: Directions) => {
  const maybeNextRoom = game.dungeon.rooms
    .filter(x => x.id === game.currentRoom.connections[direction])
    .at(0);

  if (!maybeNextRoom) return {
    result: 'invalid-movement',
    ...game,
  }

  return {
    result: 'ok',
    game: {
      ...game,
      currentRoom: maybeNextRoom
    }
  }
}