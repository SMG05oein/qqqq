// netlify/functions/proxyPost.js
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const { pullAddress } = event.queryStringParameters || {};

  if (!pullAddress) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "pullAddress 파라미터가 필요합니다." }),
    };
  }

  const apiUrl = `http://54.180.25.62:8080${pullAddress}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": event.headers.authorization || "",
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
        statusCode: 500,
        body: JSON.stringify({ error: "JSON 파싱 실패", rawBody: text }),
      };
    }

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API 호출 실패", details: err.message }),
    };
  }
}
