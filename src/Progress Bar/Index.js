import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar'
const Index = () => {


    const [value, setValue] = useState(0);

    useEffect(() => {
  
      setInterval(() => {
        
        setValue((val) => val + 1 );
      }, 100);
    }, []);

  return (
    <div>
    <ProgressBar value={value} />
      
    </div>
  )
}

export default Index
