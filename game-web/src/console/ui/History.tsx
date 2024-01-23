import PS1 from "./Ps1";
import { HistoryEntry } from "./useHistory";

export default function History({ history }: { 
  history: HistoryEntry[] 
}) {
  return (<>
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
}
