import { Dungeon } from "..";
import { createKobolds } from "../enemy";

export const dungeonTesting = {
  initialRoom: 'central',
  rooms: [
    {
      id: 'central',
      description: '[central room description]',
      connections: {
        'NORTH': 'north',
        'SOUTH': 'south',
        'WEST': 'west',
        'EAST': 'east'
      },
      enemies: [],
    },
    {
      id: 'north',
      description: '[north room description]',
      connections: {
        'SOUTH': 'central'
      },
      enemies: [
        ...createKobolds(1),
      ],
    },
    {
      id: 'west',
      description: '[west room description]',
      connections: {
        'EAST': 'central'
      },
      enemies: [
        ...createKobolds(2),
      ],
    },
    {
      id: 'east',
      description: '[east room description]',
      connections: {
        'WEST': 'central'
      },
      enemies: [],
    }
  ],
} satisfies Dungeon;

