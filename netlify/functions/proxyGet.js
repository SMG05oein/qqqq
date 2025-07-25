export async function handler(event) {
    const query = event.queryStringParameters;

    const { keyword, centerY, centerX, minY, maxY, minX, maxX } = query;

    const apiUrl = `http://54.180.25.62:8080/store/map/search?keyword=${keyword}&centerY=${centerY}&centerX=${centerX}&minY=${minY}&maxY=${maxY}&minX=${minX}&maxX=${maxX}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return {
            statusCode: response.status,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("프록시 에러:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "API 호출 실패", details: error.message }),
        };
    }
}
