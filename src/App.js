import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./NB/GNB";
import BottomBar from "./NB/BottomBar";
import KakaoMap from "./component/KakaoMap";

function App() {
  return (
    <Routes>
        <Route path="/" element={<GNB/>}>
            <Route index element={<><KakaoMap/><BottomBar/></>}/>
        </Route>
    </Routes>
  );
}

export default App;
