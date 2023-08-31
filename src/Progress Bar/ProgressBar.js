import React, {useState, useEffect} from 'react'
import './style.css'


const ProgressBar = ({ value = 0 }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {

        setPercent( Math.min(100, Math.max(value, 0) ) );

    }, [value] )

  return (

    <div className='progress' >

      <span>
      
      {percent.toFixed()}%
      
      </span>

      <div role='progressbar' style={{width: `${percent}%` }} aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent.toFixed()}>

      </div>

    </div>
  )
}

export default ProgressBar
