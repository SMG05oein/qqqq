// app.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import GNB from "./NB/GNB";
import TopMenu from "./NB/TopMenu";
import HomePage from "./component/HomePage/HomePage";
import NotFound from "./component/404NotFound/NotFound";
import ProfilePage from './component/ProfilePage/ProfilePage';
import CheonanCardPage from './component/CheonanCardPage/CheonanCardPage';
import { useRef, useEffect, useContext, useState } from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import { LoginContext, LoginProvider } from "./State/LoginState";
import Login from "./component/User/Login";
import SignUp from "./component/User/SignUp";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Toss 결제 관련
import TossPaymentPage from './payments/TossPaymentPage';          // 💳 결제 요청
import TossPaymentCharge from './payments/TossPaymentCharge';      // ✅ 결제 승인 처리
import TossPaymentSuccess from './payments/TossPaymentSuccess';    // (선택) 성공 안내
import TossPaymentFail from './payments/TossPaymentFail';          // 실패 안내

// 기타
import QrPayPage from './component/qrpay/QrPayPage';
import Test from "./Test";

function App() {
  return (
    <LoginProvider>
      <MainApp />
    </LoginProvider>
  );
}

function MainApp() {
  const [isProfile, setIsProfile] = useState(false);
  const { login } = useContext(LoginContext);

  return (
    <div>
      <Routes>
        {/* 홈 페이지 및 GNB 포함 구조 */}
        <Route path="/" element={<><TopMenu /><GNB isProfile={isProfile} setIsProfile={setIsProfile} /></>}>
          <Route index element={<div className={"CONTENTS scroll-hidden"}><HomePage /></div>} />
          <Route path="/profile" element={
            <div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}>
              {login.isLogin ? <ProfilePage setIsProfile={setIsProfile} /> : <Login setIsProfile={setIsProfile} />}
            </div>} />
          <Route path="/cheonancard" element={<div className={"CONTENTS scroll-hidden"}><CheonanCardPage /></div>} />
          <Route path="/signUp" element={<div className={"CONTENTSP scroll-hidden justify-content-center align-content-center"}><SignUp setIsProfile={setIsProfile} /></div>} />
          <Route path="/map" element={<div className={"CONTENTS scroll-hidden"}><KakaoMap /></div>} />
        </Route>

        {/* 기타 라우트 */}
        <Route path="/test" element={<Test />} />
        <Route path="/pay" element={<QrPayPage />} />

        {/* Toss 결제 관련 라우트 (경로 중복 제거됨) */}
        <Route path="/payment" element={<TossPaymentPage />} />          {/* 결제 시작 버튼 */}
        <Route path="/charge" element={<TossPaymentCharge />} />         {/* 결제 승인 처리 */}
        <Route path="/payment-success" element={<TossPaymentSuccess />} />
        <Route path="/payment-fail" element={<TossPaymentFail />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
