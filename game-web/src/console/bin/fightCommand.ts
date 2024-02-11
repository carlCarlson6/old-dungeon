import { GameCommand } from ".";
import { Game, getCurrentRoom } from "../../game";
import { attack } from "../../game/combat";

export const fightCommand: GameCommand = (game: Game, args?: string[]) => {
  const currentRoom = getCurrentRoom(game);
  if (currentRoom.enemies.length === 0) return Promise.resolve({
    result: 'no enemies to attack on the room',
    game
  });
  if (game.status === 'ended') return Promise.resolve({
    result: 'GAME OVER',
    game
  });

  args = args ?? [];
  const target = args[0];
  if (!target) return Promise.resolve({
    result: 'you need to set a target',
    game
  })

  attack(game, target);

  throw new Error('not implemented')
  return Promise.resolve({
    game,
    result: ''
  })
}