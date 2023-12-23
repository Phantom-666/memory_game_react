import React from 'react'
import './Game.css'


const Card = ( {index, flipCard, isFlipped , isRight, imageUrl } ) => {


    let shouldFlip = false

    if (isRight) {

        shouldFlip = true
    } else {
        if (isFlipped) 
            shouldFlip = true
    }


    return (

        <div className={`card ${shouldFlip ? 'flipped' : ''}`} onClick={()=>flipCard(index)}>
            <div className="card-inner">
                <div className="card-front">
                    <img width={300} height={300} src={`https://colorcasters.com/wp-content/uploads/2014/05/Black-300x300.jpeg`} alt={`Card ${index}`}  />
                </div>
                <div className="card-back">
                    <img src={imageUrl} alt={`Card ${index}`} />
                </div>
            </div>
        </div>
    )


}

export default Card