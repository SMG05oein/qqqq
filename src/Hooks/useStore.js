import { useState, useEffect } from "react";

export const useStore = (key) => {
    const [store, setStore] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            key = encodeURIComponent(key);
            // const url = `http://localhost:8080/store/map/search?keyword=${key}&centerY=36.84950309992622&centerX=127.15437257867464&minY=36.845258941966016&maxY=36.8530782657718&minX=127.14723334692333&maxX=127.16278946667573`;
            const url = `http://54.180.25.62:8080/store/map/search?keyword=${key}&centerY=36.84950309992622&centerX=127.15437257867464&minY=36.845258941966016&maxY=36.8530782657718&minX=127.14723334692333&maxX=127.16278946667573`;
            // console.log(url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setStore(data);
            } catch (error) {
                console.error("Fetch 실패:", error);
            }
        };

        fetchUser();
    }, [key]);

    return store;
};
