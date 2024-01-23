import React from "react";

export interface HistoryEntry {
  id: number;
  date: Date;
  command: string;
  output: string;
}

export const useHistory = (defaultValue: Array<HistoryEntry>) => {
  const [history, setHistory] = React.useState<HistoryEntry[]>(defaultValue);
  const [command, setCommand] = React.useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};