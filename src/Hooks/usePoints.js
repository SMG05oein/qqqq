import { useState, useEffect } from "react";

export const usePoints = (str) => {
    const [point, setPoint] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const url = `http://54.180.25.62:8080/api/users/me/points/${str}`;
            // console.log(url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPoint(data);
            } catch (error) {
                console.error("Fetch 실패:", error);
            }
        };

        fetchUser();
    }, [str]);

    return point;
};
