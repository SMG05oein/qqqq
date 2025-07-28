export async function handler(event) {
    console.log("proxyGet 실행됨", event.queryStringParameters);
    const query = event.queryStringParameters;
    const { pullAddress } = query;

    const apiUrl = `http://54.180.25.62:8080${pullAddress}`;
    console.log("수정됨: ",event.headers);
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": event.headers.authorization || "",
            },
        });

        const text = await response.text();

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
