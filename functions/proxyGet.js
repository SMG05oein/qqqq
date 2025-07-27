import path from "path";

export async function handler(event) {
    console.log("proxyGet 실행됨", event.queryStringParameters);
    const query = event.queryStringParameters;
    const { pullAddress } = query;

    const apiUrl = `http://54.180.25.62:8080${pullAddress}`;

    try {
        const response = await fetch(apiUrl);
        const text = await response.text(); // JSON이 아닐 수도 있어서 텍스트로 먼저 파싱

        let data = null;
        try {
            data = JSON.parse(text);
        } catch (parseError) {
            console.warn("JSON 파싱 실패:", parseError);
            console.log("응답 원문:", text);

            return {
                statusCode: response.status,
                body: JSON.stringify({
                    error: "JSON 파싱 실패",
                    statusCode: response.status,
                    rawBody: text,
                }),
            };
        }

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
