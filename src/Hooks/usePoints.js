import { useState, useEffect } from "react";

export const usePoints = (str) => {
    const [point, setPoint] = useState([]);

    useEffect(() => {
        const fetchPoint = async () => {
            const currentUrl = window.location.href;
            const url = `http${currentUrl.includes("localhost")?"":"s"}://54.180.25.62:8080/api/users/me/points/${str}`;
            // console.log(url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPoint(data);
            } catch (error) {
                console.error("Fetch 실패:", error);
            }
        };

        fetchPoint();
    }, [str]);

    return point;
};
