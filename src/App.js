import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<><TopMenu/><GNB/></>}>
                    <Route index element={<div className={"CONTENTS"}><HomePage/></div>}/>
                </Route>
            </Routes>
        </div>
);
}

export default App;
