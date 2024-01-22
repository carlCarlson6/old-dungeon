import Head from 'next/head';
import React, { useState } from 'react';
import config from '../../config.json';
import { Input } from '../console/ui/input';
import { History, useHistory } from '../console/ui/History';
import { banner } from '../console/bin/banner';
import { Game } from '../game';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);
  const [game, setGame] = useState<Game|null>(null);

  const init = React.useCallback(async () => {
    const bannerResult = await banner();
    setHistory(bannerResult);
  }, []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (<>
    <Head><title>{config.title}</title></Head>
    <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
      <div ref={containerRef} className="overflow-y-auto h-full">
        <History history={history} />
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
          updateGmae={setGame}
        />
      </div>
    </div>
  </>);
};

export default IndexPage;
