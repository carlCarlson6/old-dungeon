import { Dungeon } from ".";
import { createPlayer } from "./player";

export const initGame = (dungeon: Dungeon) => ({
  player: createPlayer({name: 'hero'}),
  dungeon,
  currentRoomId: dungeon.rooms.filter(x => x.id === dungeon.initialRoom)[0]!.id,
  status: 'on-going' as const,
});
