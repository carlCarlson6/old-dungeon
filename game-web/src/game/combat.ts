import { Game } from ".";
import { getRandomInt } from "./player";

export const attack = (game: Game, target: string): {
  updatedGame: Game, result: 'enemy-not-found' | 'attack-failed' | 'enemy-defeated' | 'attack-succeded'
} => {
  const maybeTargetEnemy = game.currentRoom.enemies.filter(x => x.name === target)[0];
  if (!maybeTargetEnemy) return {
    result: 'enemy-not-found' as const,
    updatedGame: game,
  }

  const attackDiceThrow = getRandomInt(1,20)+game.player.attack; // TODO - añadir pifica y critico
  if (attackDiceThrow < maybeTargetEnemy.defense) return {
    result: 'attack-failed' as const,
    updatedGame: game
  }

  const damage = game.player.weaponDice();
  const updatedEnemy = {
    ...maybeTargetEnemy,
    health: {
      ...maybeTargetEnemy.health,
      current: maybeTargetEnemy.health.current - damage,
    }
  }

  const isDead = updatedEnemy.health.current <= 0;
  const enemiesWithoutTarget = game.currentRoom.enemies.filter(x => x.name !== maybeTargetEnemy.name);
  const updatedEnemiesOnRoom = isDead
    ? enemiesWithoutTarget
    : [...enemiesWithoutTarget, updatedEnemy];

  const updatedCurrentRoom = {
    ...game.currentRoom,
    enemies: updatedEnemiesOnRoom
  };

  return {
    result: isDead ? 'enemy-defeated' as const : 'attack-succeded' as const,
    updatedGame: {
      ...game,
      currentRoom: updatedCurrentRoom,
      dungeon: {
        ...game.dungeon,
        rooms: [  
          ...game.dungeon.rooms.filter(x => x.id !== updatedCurrentRoom.id),
          updatedCurrentRoom,
        ]
      }
    } 
  }
}