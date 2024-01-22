import {gameBin, shellBin} from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: (command: string) => void,
) => {
  const shellCommands = ['clear', ...Object.keys(shellBin)].filter((entry) =>
    entry.startsWith(command),
  );
  if (shellCommands.length === 1) {
    setCommand(shellCommands[0]);
    return;
  }

  const gameCommands = ['initgame', ...Object.keys(gameBin)].filter((entry) =>
    entry.startsWith(command),
  );
  if (gameCommands.length === 1) {
    setCommand(gameCommands[0]);
    return;
  }
};


