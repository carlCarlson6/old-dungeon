import { match } from "ts-pattern";
import { getRandomInt } from "./player";

type EnemyOptions = {
  level: number;
  name: string;
  defense: number;
  attacks: {
    name: string,
    dice: () => number
  }[],
}

export type Enemy = ReturnType<typeof createEnemy>;

const createEnemy = (options: EnemyOptions) => {
  const maxHealth = match(options.level)
    .when(level => level == 0, () => getRandomInt(1,4))
    .when(level => level <= 1, level => Array.from(Array(level).keys()).reduce(acc => acc+getRandomInt(1,6), getRandomInt(1,6)))
    .run();
  return {
    health: {
      max: maxHealth,
      current: maxHealth,
    },
    ...options
  }
}

const createSkeleton = () => createEnemy({
  level: 1,
  name: 'skeleton',
  defense: 11,
  attacks: [{
    name: 'bone weapon',
    dice: () => getRandomInt(1,6),
  }],
});

export const createKobolds = (num: number) => Array.from({length: num}, (_, i) => createEnemy({
  level: 0,
  name: `kobold${i+1}`,
  defense: 13,
  attacks: [{
    name: 'claws',
    dice: () => getRandomInt(1,6),
  }]
}));

export const createKobold = () => createEnemy({
  level: 0,
  name: 'kobold',
  defense: 13,
  attacks: [{
    name: 'claws',
    dice: () => getRandomInt(1,6),
  }]
});

const createZombi = () => createEnemy({
  level: 2,
  name: 'zombi',
  defense: 11,
  attacks: [{
    name: 'decrepit arms',
    dice: () => getRandomInt(1,6),
  }]
});