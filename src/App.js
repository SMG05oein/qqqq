import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";
import NotFound from "./404NotFound/NotFound";
import ProfilePage from './component/ProfilePage/ProfilePage';
import CheonanCardPage from './component/CheonanCardPage/CheonanCardPage';
import {useContext, useState} from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import {LoginContext, LoginProvider} from "./Hooks/LoginState";
import Login from "./User/Login";
import SignUp from "./User/SignUp";

function App() {
    const [isProfile, setIsProfile] = useState(false);
    const { login } = useContext(LoginContext);
    return (
        <div>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<><TopMenu/><GNB isProfile={isProfile} setIsProfile={setIsProfile}/></>}>
                    <Route index element={<div className={"CONTENTS scroll-hidden"}><HomePage/></div>} />
                    <Route path="profile" element={
                        <div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}>
                            {login.isLogin ? <ProfilePage setIsProfile={setIsProfile}/>:<Login setIsProfile={setIsProfile}/>}
                        </div>} />
                    <Route path="cheonancard" element={<div className={"CONTENTS scroll-hidden"}><CheonanCardPage/></div>} />
                    <Route path="signUp" element={<div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}><SignUp setIsProfile={setIsProfile}/></div>} />
                    <Route path="map" element={<div className={"CONTENTS scroll-hidden"}><KakaoMap/></div>} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
