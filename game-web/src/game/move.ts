import { Directions, Game, Room } from ".";

export const move = (game: Game, direction: Directions): { updatedGame: Game, result: 'invalid-movement' | 'with-enemies' | 'ok' } => {
  const maybeNextRoom = game.dungeon.rooms
    .filter(x => x.id === game.currentRoom.connections[direction])[0];

  if (!maybeNextRoom) return {
    result: 'invalid-movement',
    updatedGame: game,
  }

  const areThereEnemies = checkEnemiesForEnemies(maybeNextRoom);
  
  return {
    result: areThereEnemies ? 'with-enemies' : 'ok',
    updatedGame: {
      ...game,
      status: areThereEnemies ? 'on-combat' : 'on-going',
      currentRoom: maybeNextRoom
    }
  }
}

const checkEnemiesForEnemies = (nextRoom: Room) => {
  return nextRoom.enemies.length > 0;
}