import { Player } from "./player";

export const enum Directions {
  North = 'NORTH',
  South = 'SOUTH',
  West = 'WEST',
  East = 'EAST'
}

type RoomId = string;

type RoomConnection = RoomId | undefined;

type Room = {
  id: string;
  description: string;
  connections: Record<string, RoomConnection>;
}

export type Dungeon = {
  initialRoom: RoomId;
  rooms: Room[];
}

export type Game = {
  player: Player;
  dungeon: Dungeon;
  currentRoom: Room;
  status: 'on-going' | 'ended'
}