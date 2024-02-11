import { Dungeon } from "..";

export const dungeon001: Dungeon = {
  initialRoom: '1',
  rooms: [
    {
      id: '1',
      description: 'the dungeon entrance',
      connections: {
        'EAST': '2',
      },
      enemies: [],
    },
    {
      id: '2',
      description: 'a small pond on the middle',
      connections: {
        'NORTH': '8',
        'SOUTH': '9',
        'EAST': '3'
      },
      enemies: [],
    }, 
    {
      id: '3',
      description: 'a feasting table full of rotten food',
      connections: {
        'NORTH': '10',
        'SOUTH': '4',
        'WEST': '3'
      },
      enemies: [],
    },
    {
      id: '4',
      description: 'multiple open graves',
      connections: {
        'NORTH': '3',
        'SOUTH': '12',
        'EAST': '5'
      },
      enemies: [],
    },
    {
      id: '5',
      description: 'a long corridor decorated with spider lambs',
      connections: {
        'WEST': '4',
        'EAST': '6'
      },
      enemies: [],
    },
    {
      id: '6',
      description: 'a chappel with satanic symbols',
      connections: {
        'WEST': '5',
        'SOUTH': '7'
      },
      enemies: [],
    },
    {
      id: '7',
      description: 'a enormous archon full or tresours',
      connections: {
        'NORTH': '6'
      },
      enemies: [],
    },
    {
      id: '8',
      description: 'a prision cell',
      connections: {
        'SOUTH': '2'
      },
      enemies: [],
    },
    {
      id: '9',
      description: 'a prision cell',
      connections: {
        'NORTH': '2'
      },
      enemies: [],
    },
    {
      id: '10',
      description: 'a status o a wizard',
      connections: {
        'SOUTH': '3',
        'EAST': '11'
      },
      enemies: [],
    },
    {
      id: '11',
      description: 'shelfs full of dusty books',
      connections: {
        'WEST': '10'
      },
      enemies: [],
    },
    {
      id: '12',
      description: 'a lab full of potions',
      connections: {
        'NORTH': '4'
      },
      enemies: [],
    },
  ],
};