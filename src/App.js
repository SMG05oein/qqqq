import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";
import NotFound from "./component/404NotFound/NotFound";
import ProfilePage from './component/ProfilePage/ProfilePage';
import CheonanCardPage from './component/CheonanCardPage/CheonanCardPage';
import {useRef, useEffect,useContext, useState} from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import {LoginContext, LoginProvider} from "./State/LoginState";
import Login from "./component/User/Login";
import SignUp from "./component/User/SignUp";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentSuccess from './payments/PaymentSuccess';
import PaymentFail from './payments/PaymentFail';
import TossPaymentPage from './payments/TossPaymentPage';




//qr
import { Html5QrcodeScanner } from "html5-qrcode";
import { PayingBarOpenContext } from './State/PayingBarOpenState';
import Test from "./Test";




function App() {
    const [isProfile, setIsProfile] = useState(false);
    const { login } = useContext(LoginContext);
    return (
        <div>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<><TopMenu/><GNB isProfile={isProfile} setIsProfile={setIsProfile}/></>}>
                    <Route index element={<div className={"CONTENTS scroll-hidden"}><HomePage/></div>} />
                    <Route path="/profile" element={
                        <div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}>
                            {login.isLogin ? <ProfilePage setIsProfile={setIsProfile}/>:<Login setIsProfile={setIsProfile}/>}
                        </div>} />
                    <Route path="/cheonancard" element={<div className={"CONTENTS scroll-hidden"}><CheonanCardPage/></div>} />
                    <Route path="/signUp" element={<div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}><SignUp setIsProfile={setIsProfile}/></div>} />
                    <Route path="/map" element={<div className={"CONTENTS scroll-hidden"}><KakaoMap/></div>} />
                </Route>
                <Route path="/test" element={<Test/>}/>
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-fail" element={<PaymentFail />} />
                <Route path="/charge" element={<TossPaymentPage />} />
            </Routes>
        </div>
    );
}

export default App;
