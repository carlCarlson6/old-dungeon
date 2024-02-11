import { Enemy } from "./enemy";
import { Player } from "./player";

export const enum Directions {
  North = 'NORTH',
  South = 'SOUTH',
  West = 'WEST',
  East = 'EAST'
}

type RoomId = string;

type RoomConnection = RoomId | undefined;

export type Room = {
  id: string;
  description: string;
  connections: Record<string, RoomConnection>;
  enemies: Enemy[];
}

export type Dungeon = {
  initialRoom: RoomId;
  rooms: Room[];
}

export type Game = {
  player: Player;
  dungeon: Dungeon;
  currentRoom: Room;
  status: 'on-going' | 'ended' | 'on-combat';
}