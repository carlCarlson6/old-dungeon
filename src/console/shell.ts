import { gameBin, shellBin } from './bin';
import { Game } from '../game';
import { match } from 'ts-pattern';
import { initGame } from '../game/initGame';
import { dungeon001 } from '../game/dungeons/dungeon001';
import { dungeon002 } from '../game/dungeons/dungeon002';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: (command: string) => void,
  game: Game | null,
  updateGame: (game: Game) => void,
) => {
  const args = command.split(' ');
  const commandArgs = args.slice(1);

  match(args[0].toLowerCase())
    .when(command => command === 'clear', () => {
      clearHistory();
    })
    .when(command => command === '', () => setHistory(''))
    .when(command => Object.keys(shellBin).indexOf(command) !== -1, async command => {
      const output = await shellBin[command](commandArgs);
      setHistory(output);
    })
    .when(command => command === 'initgame', async () => {
      const restartMessage = game === null ? 'starting game \n' : 'starting game again \n'
      const newGame = initGame(dungeon002);
      updateGame(newGame);
      setHistory(`${restartMessage}you entern in the dungeon \nyou see ${newGame.currentRoom.description}`)
    })
    .when(command => Object.keys(gameBin).indexOf(command) !== -1, async command => {
      if (!game) {
        setHistory(`game: cannot execut: ${command} - game is not started`);
        return;
      }
      const {game: updatedGame, result} = await gameBin[command](game, commandArgs);
      updateGame(updatedGame);
      setHistory(result);
    })
    .otherwise(command => {
      setHistory(`shell: command not found: ${command}`); 
    });

  setCommand('');
};
