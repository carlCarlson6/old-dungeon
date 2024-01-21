import { Dungeon } from ".";
import { createPlayer } from "./player";


export const initGame = (dungeon: Dungeon) => ({
  player: createPlayer,
  dungeon,
  currentRoom: dungeon.rooms.filter(x => x.id === dungeon.initialRoom).at(0)!,
  status: 'on-going'
});
