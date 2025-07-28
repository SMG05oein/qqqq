import { createContext, useState } from 'react';
export const KakaoMapLngLatContext = createContext();

export const KaKaoMapProvider = ({ children }) => {
    const [login, setLogin] = useState({ isLogin: false, idx: 0 });

    return (
        <KakaoMapLngLatContext.Provider value={{ login, setLogin }}>
            {children}
        </KakaoMapLngLatContext.Provider>
    );
};

export default KaKaoMapProvider;
