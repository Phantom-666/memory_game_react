

import React, {useState, useEffect} from 'react'


const Timer = ({initialTime, declareLose, wonState}) => {


    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        if (time === 0) {
            declareLose()
            return
        };
    
        const timerId = setInterval(() => {
            if (wonState) return clearInterval(timerId)
          setTime((prevTime) => prevTime - 1);
        }, 1000);
    
        return () => clearInterval(timerId);
      }, [time]);


    return (
        <>
            <h4 className='red-text'>{time} seconds</h4>
        </>

    )

}


export default Timer