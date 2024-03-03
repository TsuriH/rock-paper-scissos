import "./ChooseCoin.css";
import triangle from "../../images/bg-triangle.svg"
import { NavLink } from "react-router-dom";

interface CoinProps {
    setUserChoice: Function
}

function ChooseCoin(props: CoinProps): JSX.Element {



    return (
        <div className="ChooseCoin">

            <div className="coins-container">
                <div className="first-row-container">

                    <NavLink to={"/battle"}>
                        <div className="coin paper" onClick={() => props.setUserChoice("paper")}></div>
                    </NavLink>

                    <NavLink to={"/battle"}>
                        <div className="coin scissors" onClick={() => props.setUserChoice("scissors")}></div>
                    </NavLink>

                </div>
                
                <div className="rock-container">

                    <NavLink to={"/battle"}>
                        <div className="coin rock" onClick={() => props.setUserChoice("rock")}></div>
                    </NavLink>
                </div>


            </div>

        </div>
    );
}

export default ChooseCoin;
