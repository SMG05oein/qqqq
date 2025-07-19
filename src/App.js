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
                <Route
                    path="/"
                    element={
                        <>
                            <TopMenu />
                            <GNB />
                            <div className="CONTENTS">
                                <HomePage />
                            </div>
                        </>
                    }
                />

                {/* 프로필 */}
                <Route
                    path="/profile"
                    element={
                        <>
                            <TopMenu />
                            <GNB />
                            <div className="CONTENTS">
                                <ProfilePage />
                            </div>
                        </>
                    }
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
