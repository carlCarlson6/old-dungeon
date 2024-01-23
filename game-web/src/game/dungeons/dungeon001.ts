export const dungeon001 = {
  initialRoom: 'central',
  rooms: [
    {
      id: 'central',
      description: 'central room',
      connections: {
        'NORTH': 'north',
        'SOUTH': 'south',
        'WEST': 'west',
        'EAST': 'east'
      }
    },
    {
      id: 'north',
      description: 'north room',
      connections: {
        'SOUTH': 'central'
      }
    },
    {
      id: 'west',
      description: 'west room',
      connections: {
        'EAST': 'central'
      }
    },
    {
      id: 'east',
      description: 'east room',
      connections: {
        'WEST': 'central'
      }
    }
  ]
};

