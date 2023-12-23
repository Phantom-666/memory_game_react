import React, {useEffect, useState} from 'react'
import './Game.css'
import Card from './Card'
import {wait, fetchDataFromServer} from '../../utils'
import {useNavigate} from 'react-router-dom'
import Timer from './Timer'


const Game = () => {


    const [flippedCards, setFlippedCard] = useState([])
    const [rightCards, setRightCards] = useState([])
    const [won, setWon] = useState(false)
    const [cardsClickable, setCardsClickable] = useState(true)
    const [timerIsRunning, setTimerIsRunning] = useState(true)
    const [tries, setTries] = useState(0) 


    const {images, rightIndexes, rows} = fetchDataFromServer()

    let cardCounter = 8

    const nav = useNavigate()
    const goHome = () => {

        nav('/')
    }


    useEffect(()=> {

        if (rightCards.length === cardCounter) {
            setWon(true)
            setTimerIsRunning(false)

            localStorage.setItem('lastScore', tries)
            

            const bestScore = localStorage.getItem('bestScore')

            if (bestScore) {

                const numBestScore = Number(bestScore)

                if (numBestScore > tries) {

                    localStorage.setItem('bestScore', tries)
                }

            }
            else
            {
                localStorage.setItem('bestScore', tries)
            }
            
        }


    }, [rightCards])

    

    const flipCard = async(index) => {

        if (!cardsClickable)
            return


        if (rightCards.includes(index)) {
            return

        }

        setCardsClickable(false)

        

        if (flippedCards[0] == index) return
        

        if (flippedCards.length === 1) {
            
            setFlippedCard(a => [...a, index])

            await wait(1)
            
            const rightIndex = rightIndexes[index]


            setTries(t => t + 1)

            

            // check if right
            if (flippedCards[0] === rightIndex) {
                setRightCards((a) => [...a, flippedCards[0], index])

                
            }
            else {
                setFlippedCard([])
            }


        }
        else {
            setFlippedCard([index])
        }


        setCardsClickable(true)
    }

    const startAgain = () => {

        setFlippedCard([])
        setRightCards([])
        setWon(false)
        setLose(false)

        setCardsClickable(true)
        setTimerIsRunning(true)


    }

    const [lose, setLose] = useState(false)

    const declareLose = () => {
        setCardsClickable(false)
        setLose(true)
        setWon(false)
        setTimerIsRunning(false)
    }


    return (
        <div className='container'>

            <div className='center'>
                <h2>Game</h2>

                <div>
                    <h4>
                        Match all pairs
                    </h4>

                    {timerIsRunning ? <Timer initialTime={20} declareLose={declareLose} wonState={won} /> : <></>}
                    
                </div>
                <br />
                <br />
                <br />
                <br />

                {
                    lose ?  
                    <>
                        <h4 className='red-text'>You lost</h4>
                        <button className='btn' onClick={startAgain}>Start again</button>
                        <div style={{marginTop : '5px'}}><button onClick={goHome} className='btn'>Home</button></div>
                    </>
                    :
                    <></>
                }

                { won ? 
                    <div>
                        <h4 className='green-text'>You won</h4>
                        <button className='btn' onClick={startAgain}>Start again</button>
                        <div style={{marginTop : '5px'}}><button onClick={goHome} className='btn'>Home</button></div>
                    </div>
                    :   
                    <></>
                }

            </div>

             {
                rows.map(fi => (
                    <div className="card-wrapper">
                        {fi.map(index => (
                            <Card 
                                key={index} 
                                index={index} 
                                flipCard={flipCard} 
                                isFlipped={flippedCards.includes(index)} 
                                isRight={rightCards.includes(index)}
                                imageUrl={images[index]}
                            />
                        ))}

                    </div>
                ))

             }

        </div>
    )


}


export default Game

