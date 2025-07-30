import { useEffect } from 'react';
import AmandaBecineriSite from './Amanda';
import TagManager from 'react-gtm-module';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GT-K54N9SX3' 
    };
    TagManager.initialize(tagManagerArgs);
  }, []); 

  return (
    <AmandaBecineriSite />
  );
}

export default App;
