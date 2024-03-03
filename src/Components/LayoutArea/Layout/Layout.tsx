
import { useEffect, useState } from "react";
import "./Layout.css";
import logo from "../../images/logo.svg"
import rules from "../../images/image-rules.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {

    const [userChoice, setUserChoice] = useState<string>("")
    const [score, setScore] = useState<number>(0)
    const [rulesIsOpen, setRulesIsOpen] = useState<boolean>(false)


    function changeTheScore(gameResult: string) {
        console.log(gameResult)
        if (gameResult === "win") {
            setScore(prevScore => prevScore + 1)
        }
        else if (gameResult === "lost") {
            setScore(prevScore => prevScore - 1)

        }


    }


    const openRules = () => {
        setRulesIsOpen(!rulesIsOpen)
    }
    return (
        <div className="Layout">

            <div className="score-container">
                <img src={logo} alt="" />

                <div className="points-box">
                    <p className="score">score</p>
                    <span><p>{score}</p></span>
                </div>
            </div>

            <main>
                <Routing setUserChoice={setUserChoice} userChoice={userChoice} changeTheScore={changeTheScore} score={score} />
            </main>

            <button className="rules-btn" onClick={() => openRules()}>rules</button>

            {/* rulles: */}

            {rulesIsOpen && <div className="rules-image">

                <div className="rules-header">

                    <p>rules</p>
                    <FontAwesomeIcon className="faxmark" icon={faXmark} />

                </div>
                <img src={rules} alt="" />

            </div>}

        </div>
    );
}

export default Layout;
