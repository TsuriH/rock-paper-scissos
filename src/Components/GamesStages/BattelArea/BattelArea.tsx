import { useEffect, useState } from "react";
import "./BattelArea.css";
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import { NavLink } from "react-router-dom";

interface PropsUserChoice {
    userChoice: string;
    changeTheScore: Function;
    score: number;
}

function BattelArea(props: PropsUserChoice): JSX.Element {

    const [displayResult, setDisplayResult] = useState<string>("")
    const [showDelayedComputerChoice, setShowDelayedComputerChoice] = useState<boolean>(false)
    const [showDelayedGameResult, setShowDelayedGameResult] = useState<boolean>(false)
    const [countDownNumber, setCountDownNumber] = useState<number>(3)


    const [userPlayerUi, setuserPlayerUi] = useState({
        userPlayerColor: "",
        userPlayerSign: "",
        boxShadow: "",
    })

    const [computerPlayerUi, setComputerPlayerUi] = useState({
        computerUserColor: "",
        computerSign: "",
        boxShadow: "",

    })


    useEffect(() => {

        switch (props.userChoice) {

            case "paper":
                setuserPlayerUi(() => ({
                    userPlayerColor: 'hsl(230, 89%, 65%)',
                    userPlayerSign: paper,
                    boxShadow: "-1px 8px 1px -1px hsl(230, 62%, 85%) inset, -1px 8px 1px -1px hsl(230, 55%, 50%)"
                }));

                break;

            case "rock":
                setuserPlayerUi(() => ({
                    userPlayerColor: 'hsl(349, 71%, 52%)',
                    userPlayerSign: rock,
                    boxShadow: "-1px 8px 1px hsl(349, 29%, 77%) inset, -1px 8px 1px -1px hsl(349, 55%, 44%)"
                }));

                break;

            case "scissors":
                setuserPlayerUi(() => ({
                    userPlayerColor: 'hsl(39, 89%, 49%)',
                    userPlayerSign: scissors,
                    boxShadow: "inset -1px 8px 1px -1px hsl(40, 9%, 79%), -1px 8px 1px -1px hsl(39, 87%, 38%)"
                }));

                break;

        }



    }, [])


    // user chosen player

    //computer choose player

    const createComputerUser = () => {

        const coinsArray = ["paper", "rock", "scissors"]

        const randomChoice = coinsArray[Math.floor(Math.random() * coinsArray.length)]
        switch (randomChoice) {

            case "paper":
                setComputerPlayerUi(() => ({
                    computerUserColor: 'hsl(230, 89%, 65%)',
                    computerSign: paper,
                    boxShadow: "-1px 8px 1px -1px hsl(230, 62%, 85%) inset, -1px 8px 1px -1px hsl(230, 55%, 50%)"
                }));

                break;

            case "rock":
                setComputerPlayerUi(() => ({
                    computerUserColor: 'hsl(349, 71%, 52%)',
                    computerSign: rock,
                    boxShadow: "-1px 8px 1px hsl(349, 29%, 77%) inset, -1px 8px 1px -1px hsl(349, 55%, 44%)"
                }));

                break;

            case "scissors":
                setComputerPlayerUi(() => ({
                    computerUserColor: 'hsl(39, 89%, 49%)',
                    computerSign: scissors,
                    boxShadow: "inset -1px 8px 1px -1px hsl(40, 9%, 79%), -1px 8px 1px -1px hsl(39, 87%, 38%)"
                }));

                break;

        }




    }

    //function that manage the countDown

    const countdown = () => {

        const countDownGenerator = setInterval(() => {
            if (countDownNumber !== 0) {
                setCountDownNumber(prevNumber => prevNumber - 1)
            }
            else {
                clearInterval(countDownGenerator)
            }
        }, 3000)
    }

    useEffect(() => {
        createComputerUser()

    }, [])

    useEffect(() => {
        if (userPlayerUi.userPlayerSign === scissors && computerPlayerUi.computerSign === paper ||
            userPlayerUi.userPlayerSign === paper && computerPlayerUi.computerSign === rock ||
            userPlayerUi.userPlayerSign === rock && computerPlayerUi.computerSign === scissors
        ) {
            setDisplayResult("you win")
            setTimeout(() => {
                props.changeTheScore("win")

            }, 3000)
        }

        else if (userPlayerUi.userPlayerSign === computerPlayerUi.computerSign) {
            setDisplayResult("it's a draw")

        }

        else {
            setDisplayResult("you lost")
            setTimeout(() => {
                props.changeTheScore("lost")

            }, 3000)

        }

    }, [userPlayerUi.userPlayerSign, userPlayerUi.userPlayerSign])

    //problem why do I need to add dependencies? 
    //after all, after the component is rendered I have the data and if I choose again a player the component is unmounted cause I move to another page
    //and then when I pick again a player it's mounted again so this useEffect is running again and get from the state

    useEffect(() => {

        setTimeout(() => {
            setShowDelayedComputerChoice(!showDelayedComputerChoice)
        }, 2500);
    }, [])

    useEffect(() => {

        setTimeout(() => {
            setShowDelayedGameResult(!showDelayedGameResult)
        }, 3000);
    }, [])

    useEffect(() => {
        countdown()
    }, [countDownNumber])



    // ****UI****

    return (

        <div className="BattelArea">

            <div className="coins-container">

                <div className="user-player-container">
                    <p>you picked</p>
                    <div className="user-player"
                        style={{

                            border: `20px solid ${userPlayerUi.userPlayerColor}`,
                            background: "white",
                            backgroundImage: `url(${userPlayerUi.userPlayerSign})`,
                            backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "70px",
                            boxShadow: `${userPlayerUi.boxShadow}`
                        }}>

                    </div>


                </div>

                {showDelayedGameResult &&
                    <div className="result-container">

                        <p className="for-space">12341</p>
                        <div className="end-game">
                            <div className="end-game-text">
                                <p>{displayResult}</p>
                                <NavLink to={"/"}> <button>play again</button></NavLink>
                            </div>
                        </div>
                    </div>


                }

                {showDelayedComputerChoice &&
                    <div className="computer-player-container">
                        <p className="house-pick">the house picked</p>
                        <div className="computer-player"

                            style={{

                                border: `20px solid ${computerPlayerUi.computerUserColor}`,
                                background: "white",
                                backgroundImage: `url(${computerPlayerUi.computerSign})`,
                                backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "70px",
                                boxShadow: `${computerPlayerUi.boxShadow}`
                            }}>

                        </div>
                    </div>

                }
                {!showDelayedComputerChoice &&
                    <div className="computer-player-container">
                        <p className="house-pick loading-state-text">the house picked</p>
                        <div className="shadowed-circle">

                        </div>
                        <p className="number-count-down">{countDownNumber}</p>

                    </div>
                }






            </div>

        </div >
    );
}

export default BattelArea;
