import React, {useContext} from 'react';
import"../NB.style.css"
import {LoginContext} from "../../State/LoginState";
import GNBPayingBarLoginF from "./GNBPayingBarLoginF";
import GNBPayingBarLoginT from "./GNBPayingBarLoginT";

const GnbPayingBar = ({setIsOpen, isOpen}) => {
    const { login } = useContext(LoginContext);
    // console.log(login);
    return (
        <div className={"OnePayingBar"}>
            <div style={{cursor:"pointer", boxShadow:`${isOpen ? '0 10px 0 #0EB4FC': 'none'}`}}
                onClick={()=>{{setIsOpen(!isOpen)}}} className="PayingBar">
                <div className={"Paying"}>{isOpen ? "닫기" : "결재바"}</div>
            </div>
            <div className={`PayingUnderBar d-flex justify-content-center align-content-center ${isOpen ? 'open' : ''}`} style={{display:`${isOpen ? 'block' : 'none'}`}}>
                {login.idx===0 || login.idx===undefined?
                    <GNBPayingBarLoginF isOpen={isOpen}/>
                    :
                    <GNBPayingBarLoginT isOpen={isOpen}/>
                }
            </div>
        </div>
);
};

export default GnbPayingBar;