import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";
import NotFound from "./404NotFound/NotFound";
import ProfilePage from './component/ProfilePage/ProfilePage';
import CheonanCardPage from './component/CheonanCardPage/CheonanCardPage';
import {useState} from "react";



function App() {
    const [isProfile, setIsProfile] = useState(false);
    return (
        <div>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<><TopMenu /><GNB isProfile={isProfile} setIsProfile={setIsProfile}/></>}>
                    <Route index element={<div className={"CONTENTS"}><HomePage/></div>} />
                    <Route path="profile" element={<div className={"CONTENTS"}><ProfilePage setIsProfile={setIsProfile}/></div>} />
                    <Route path="cheonancard" element={<div className={"CONTENTS"}><CheonanCardPage/></div>} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
