export async function handler(event) {
    console.log("proxyPost 실행됨");

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    const { pullAddress } = event.queryStringParameters || {};
    const apiUrl = `http://54.180.25.62:8080${pullAddress}`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: event.body,
        });

        const text = await response.text();
        let data;

        try {
            data = JSON.parse(text);
        } catch (error) {
            console.warn("JSON 파싱 실패:", error);
            return {
                statusCode: response.status,
                body: JSON.stringify({
                    error: "JSON 파싱 실패",
                    rawBody: text,
                }),
            };
        }

        return {
            statusCode: response.status,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("proxyPost 에러:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "POST 요청 실패", details: error.message }),
        };
    }
}