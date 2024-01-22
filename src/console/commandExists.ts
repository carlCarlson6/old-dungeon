import {gameBin, shellBin} from './bin';

export const commandExists = (command: string) => false
  || ['clear', ...Object.keys(shellBin)].indexOf(command.split(' ')[0].toLowerCase()) !== -1
  || ['initgame', ...Object.keys(gameBin)].indexOf(command.split(' ')[0].toLowerCase()) !== -1;
