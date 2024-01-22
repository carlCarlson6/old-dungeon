import { Game } from "../../game";
import { banner } from "./banner";
import { describeRoomComand } from "./describeRoomComand";
import { moveCommand } from "./moveCommand";

type Binaries = Record<string, (args?: string[]) => Promise<string>>;

export const shellBin: Binaries = ({
  'hello': _ => Promise.resolve('world'),
  'echo': args => Promise.resolve(args?.join(' ') ?? ''),
  'banner': banner,
  'commands': _ => Promise.resolve(`the available command are: ${[...Object.keys(shellBin), ...Object.keys(gameBin)].join(', ')}`),
});

type GameBinaris = Record<string, (game: Game, args?: string[]) => Promise<{game: Game, result: string}>>;

export const gameBin: GameBinaris = ({
  'move': moveCommand,
  'describe': describeRoomComand
});

