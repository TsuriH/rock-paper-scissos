import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import ChooseCoin from "../../GamesStages/ChooseCoin/ChooseCoin";
import BattelArea from "../../GamesStages/BattelArea/BattelArea";

interface CoinProps {
    setUserChoice: Function;
    userChoice: string;
    changeTheScore: Function;
    score: number;
}

function Routing(props: CoinProps): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<ChooseCoin setUserChoice={props.setUserChoice} />} />
                <Route path="/battle" element={<BattelArea userChoice={props.userChoice} changeTheScore={props.changeTheScore} score={props.score} />} />
            </Routes>
        </div>
    );
}

export default Routing;
