import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";
import NotFound from "./404NotFound/NotFound";
import ProfilePage from './component/ProfilePage/ProfilePage';


function App() {
    return (
        <div>
            <Routes>
                {/* 홈 */}
                <Route path="/" element={<><TopMenu /><GNB /></>}>
                    <Route index element={<div className={"CONTENTS"}><HomePage/></div>} />
                    <Route path="/profile" element={<div className={"CONTENTS"}><ProfilePage/></div>} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
