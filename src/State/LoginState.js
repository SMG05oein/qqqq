// src/State/LoginState.js
import { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const savedToken = localStorage.getItem("accessToken");
    const savedId = localStorage.getItem("userId");

    const [login, setLogin] = useState({
        isLogin: !!savedToken,       // 토큰이 있으면 로그인 상태 true
        id: savedId || null,         // 저장된 사용자 ID
        token: savedToken || null    // 저장된 토큰
    });

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
