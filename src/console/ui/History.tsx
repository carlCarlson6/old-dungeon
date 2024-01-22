import React from 'react';
import { PS1 } from './Ps1';

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

export const History: React.FC<{ history: HistoryEntry[] }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryEntry, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <PS1 />
            </div>
            <div className="flex-grow">{entry.command}</div>
          </div>
          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }} />
        </div>
      ))}
    </>
  );
};
