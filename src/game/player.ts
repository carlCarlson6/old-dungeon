import { match } from "ts-pattern";

type PlayerOptions = {
  name: string;
}

export type Player = ReturnType<typeof createPlayer>;

export const createPlayer = (options: PlayerOptions) => {
  const attributes = {
    strengh: createRandomAttribute(),
    dexterity: createRandomAttribute(),
    resistance: createRandomAttribute(),
    intelligence: createRandomAttribute(),
    wisdom: createRandomAttribute(),
    carisma: createRandomAttribute(),
  };
  const attackBonus = 0;

  return ({
    name: options.name,
    attributes,
    health: {
      max: 8 + attributes.resistance.modifier,
      current: 8 + attributes.resistance.modifier,
    },
    defense: 10 + attributes.dexterity.modifier +2+1, // TODO: +2+1 for the armour and shield bonus
    attack: attackBonus, // TODO: set attack-power-instinct based on level and class
    power: 0,
    instinct: 1,
    enduranceDice: () => getRandomInt(1,8),
    weaponDice: () => getRandomInt(1,8),
    combat: () => getRandomInt(1,20) + attackBonus,
  });
};

const createRandomAttribute = () => {
  const value = getRandomInt(1,6) + getRandomInt(1,6) * getRandomInt(1,6);
  return {
    value,
    modifier: match(value)
      .when(() => value <= 3, () => -2)
      .when(() => 4 <= value || value <= 6, () => -1)
      .when(() => 7 <= value || value <= 14, () => 0)
      .when(() => 15 <= value || value <= 17, () => 1)
      .when(() => 18 <= value, () => -2)
      .run(),
  }
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}