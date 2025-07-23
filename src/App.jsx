import { useEffect } from 'react';
import AmandaBecineriSite from './Amanda';
import TagManager from 'react-gtm-module';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'AW-16881452075' // Substitua pelo seu ID real
    };
    TagManager.initialize(tagManagerArgs);
  }, []); // [] garante que execute apenas uma vez

  return (
    <AmandaBecineriSite />
  );
}

export default App;
