import './App.css';
import ProgressBar from './Progress Bar/ProgressBar';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {

    setInterval(() => {

      setValue((val) => val + 1 );
    }, 100);
  }, []);

  return (

    <div className="App">

    <span>
      
    <ProgressBar value={value} />

    </span>
      
    </div>
  );
}

export default App;
