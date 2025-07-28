import { useState, useEffect } from "react";

export const useStore = (key, coordinates) => {
    const [store, setStore] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchStore = async () => {
            setIsLoading(true); // 요청 시작

            const encodedKey = encodeURIComponent(key);
            let pullAddress = "";

            if (coordinates.length === 0) {
                pullAddress =
                    `/store/map/search?keyword=${encodedKey}&centerY=36.84950309992622&centerX=127.15437257867464&minY=36.845258941966016&maxY=36.8530782657718&minX=127.14723334692333&maxX=127.16278946667573`;
            } else {
                const minX = coordinates[0].La;
                const minY = coordinates[0].Ma;
                const maxX = coordinates[1].La;
                const maxY = coordinates[1].Ma;

                pullAddress =
                    `/store/map/search?keyword=${encodedKey}&centerY=36.84950309992622&centerX=127.15437257867464&minY=${minY}&maxY=${maxY}&minX=${minX}&maxX=${maxX}`;
            }

            const url = `/.netlify/functions/proxyGet?pullAddress=${encodeURIComponent(pullAddress)}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setStore(data);
            } catch (error) {
                console.error("Fetch 실패:", error);
            } finally {
                setIsLoading(false); // 요청 완료
            }
        };

        fetchStore();
    }, [key]);

    return { store, isLoading };
};
