import "./ChooseCoin.css";
import triangle from "../../images/bg-triangle.svg"
function ChooseCoin(): JSX.Element {



    return (
        <div className="ChooseCoin">

			<div className="coins-container">

                <div className="coin paper"></div>
                <div className="coin scissors"></div>
                <div className="coin rock"></div>
                <img src={triangle} alt="" />
                
            </div>
            
        </div>
    );
}

export default ChooseCoin;
