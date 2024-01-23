import { useState, useRef, useEffect, useCallback } from "react";
import { Game } from "../../game";
import { useHistory } from "./useHistory";
import History from "../ui/History";
import Input from "./Input";
import { banner } from "../bin/banner";

export const useInputRef = () => useRef<HTMLInputElement>(null);

const Console: React.FC<{
  inputRef: ReturnType<typeof useInputRef>
}> = ({ inputRef }) => {
  const containerRef = useRef(null);
  const {  
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);
  const [game, setGame] = useState<Game | null>(null);

  const init = useCallback(async () => {
    const bannerResult = await banner();
    setHistory(bannerResult);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History 
            history={history} 
          />
          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
            game={game}
            updateGame={(value) => setGame(value)}
          />
        </div>
      </div>
    </>
  );
}

export default Console;