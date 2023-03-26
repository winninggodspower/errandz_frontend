import backArrow from "./../../image/backarrow.svg";
import { useNavigate } from "react-router-dom";
import './backnav.css'

function BackNav({ children }) {

    let navigate = useNavigate();


    return (
        <div className="d-flex justify-content-between">
            <img id="backNavIcon" src={backArrow} onClick={() => navigate(-1)} width={20} />

            <div>
                {children}
            </div>
        </div>
    )
}

export default BackNav;