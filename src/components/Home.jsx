import { wait } from "../utils";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [count, setCount] = useState('')


    const navigate = useNavigate();

    const startGame = async () => {   

        setIsButtonDisabled(true)

        for (let i = 0;i < 3; ++i) {
            setCount(`${i + 1}...`)
            await wait(1)
        }

        navigate('/game');
    }

    return (
        <>
            <div className="container">
                <div className="center">
                    <h3>Home</h3>

                    <h5>Last game score : {localStorage.getItem('lastScore')} tries</h5>
                    <h5>Best score : {localStorage.getItem('bestScore')} tries</h5>
                    <br />
                    {
                    isButtonDisabled ? 
                        <h3>{count}</h3>
                    :
                        <button className="btn btn-large" onClick={async() => await startGame()}>Start game</button>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Home