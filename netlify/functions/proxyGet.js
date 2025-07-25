export async function handler(event) {
    // console.log("proxyGet 실행됨", event.queryStringParameters);
    const query = event.queryStringParameters;

    // const { apiAddress,keyword, centerY, centerX, minY, maxY, minX, maxX } = query;
    const { pullAddress } = query;

    // const apiUrl = `http://54.180.25.62:8080${apiAddress}?keyword=${keyword}&centerY=${centerY}&centerX=${centerX}&minY=${minY}&maxY=${maxY}&minX=${minX}&maxX=${maxX}`;
    const apiUrl = `http://54.180.25.62:8080${pullAddress}`;

    // console.log("안녕: ",apiUrl);
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
