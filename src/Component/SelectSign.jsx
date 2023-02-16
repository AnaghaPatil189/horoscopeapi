import React, {useState, useEffect} from 'react';


export const SelecStign =({onSignSelected})=>{
    
    const [signs, setsigns] = useState([]);

    useEffect(() => {
        fetch('https://sandipbgt.com/theastrologer/api/sunsigns')
          .then((response) => response.json())
          .then(setsigns);
      }, [])

    return(
        <>
        <div>
        <h2>Please select your sign</h2>
        {signs.map((sign) => (
          <button className='sign' key={sign} onClick={() => onSignSelected(sign)}>{sign}</button>
        ))}
      </div>
      </>
    )
}