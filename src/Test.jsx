import {Link} from "react-router-dom";
import {usePoints} from "./Hooks/usePoints";
import {useEffect, useState} from "react";

const Test = () => {
    const [str, setStr] = useState("");
    const WhatIsThis = ["balance", "transactions", "cancel", "charge", "pay"];
    const points = usePoints(str);
    const TestShift = (num) => {
        let localStr;
        if(num === 1) {localStr = WhatIsThis[0]}
        if(num === 2) {localStr = WhatIsThis[1]}
        // if(num === 3) {localStr = WhatIsThis[2]} post인데 get요청 때리고 있었네ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
        // if(num === 4) {localStr = WhatIsThis[3]}
        // if(num === 5) {localStr = WhatIsThis[4]}
        setStr(localStr);
    };

    useEffect(() => {
        console.log("points:", points);
    }, [points]);

    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center"}>
                <Link to="/">홈</Link>
            </div>
            <div className={"btn-group d-flex justify-content-center align-items-center"}>
                <button className={"btn btn-primary"} onClick={() => {TestShift(1)}}>Bal<br/>잔액</button>
                <button className={"btn btn-secondary"} onClick={() => {TestShift(2)}}>Tra<br/>내역</button>
                <button className={"btn btn-success"} onClick={() => {TestShift(3)}}>Can<br/>취소</button>
                <button className={"btn btn-dark"} onClick={() => {TestShift(4)}}>Charge<br/>충천</button>
                <button className={"btn btn-danger"} onClick={() => {TestShift(5)}}>Pay<br/>결제</button>
            </div>
        </div>
    );
};

export default Test;