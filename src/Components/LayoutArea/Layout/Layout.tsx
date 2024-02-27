
import { useState } from "react";
import "./Layout.css";
import ChooseCoin from "../../GamesStages/ChooseCoin/ChooseCoin";
import logo from "../../images/logo.svg"
function Layout(): JSX.Element {

    const [score, setScore] = useState<number>(13)

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
                <ChooseCoin />

            </main>

        </div>
    );
}

export default Layout;
