import React, {useState, useEffect} from 'react';
import "./Filler.css";

function Filler({Percentage}) {

    const [percentage, setPercentage] = useState(0);
    useEffect(()=> { 
        setTimeout( ()=>{
            setPercentage(Percentage)
        }, 1000)
    }, [])

    return (
        <div className="filler" style={{ width: `${percentage}%`}}>

        </div>
    );
  }
  
  export default Filler;
