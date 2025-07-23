import { useEffect } from 'react';
import AmandaBecineriSite from './Amanda';
import TagManager from 'react-gtm-module';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'AW-16881452075' 
    };
    TagManager.initialize(tagManagerArgs);
  }, []); 

  return (
    <AmandaBecineriSite />
  );
}

export default App;
