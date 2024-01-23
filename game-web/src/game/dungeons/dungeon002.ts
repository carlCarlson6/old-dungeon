import { Dungeon } from "..";

export const dungeon002: Dungeon = {
  initialRoom: '1',
  rooms: [
    {
      id: '1',
      description: 'the dungeon entrance',
      connections: {
        'EAST': '2',
      }
    },
    {
      id: '2',
      description: 'a small pond on the middle',
      connections: {
        'NORTH': '8',
        'SOUTH': '9',
        'EAST': '3'
      },
    }, 
    {
      id: '3',
      description: 'a feasting table full of rotten food',
      connections: {
        'NORTH': '10',
        'SOUTH': '4',
        'WEST': '3'
      }
    },
    {
      id: '4',
      description: 'multiple open graves',
      connections: {
        'NORTH': '3',
        'SOUTH': '12',
        'EAST': '5'
      }
    },
    {
      id: '5',
      description: 'a long corridor decorated with spider lambs',
      connections: {
        'WEST': '4',
        'EAST': '6'
      }
    },
    {
      id: '6',
      description: 'a chappel with satanic symbols',
      connections: {
        'WEST': '5',
        'SOUTH': '7'
      }
    },
    {
      id: '7',
      description: 'a enormous archon full or tresours',
      connections: {
        'NORTH': '6'
      }
    },
    {
      id: '8',
      description: 'a prision cell',
      connections: {
        'SOUTH': '2'
      }
    },
    {
      id: '9',
      description: 'a prision cell',
      connections: {
        'NORTH': '2'
      }
    },
    {
      id: '10',
      description: 'a status o a wizard',
      connections: {
        'SOUTH': '3',
        'EAST': '11'
      }
    },
    {
      id: '11',
      description: 'shelfs full of dusty books',
      connections: {
        'WEST': '10'
      }
    },
    {
      id: '12',
      description: 'a lab full of potions',
      connections: {
        'NORTH': '4'
      }
    },
  ]
};