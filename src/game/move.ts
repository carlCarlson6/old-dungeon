import { Directions, Game } from ".";

export const move = (game: Game, direction: Directions) => {
  const maybeNextRoom = game.dungeon.rooms
    .filter(x => x.id === game.currentRoom.connections[direction])
    .at(0);

  console.log(maybeNextRoom);

  if (!maybeNextRoom) return {
    result: 'invalid-movement' as const,
    updatedGame: game,
  }

  return {
    result: 'ok' as const,
    updatedGame: {
      ...game,
      currentRoom: maybeNextRoom
    }
  }
}