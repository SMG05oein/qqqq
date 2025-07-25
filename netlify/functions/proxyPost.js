export async function proxyPost(event, context) {
    const response = await fetch('http://54.180.25.62:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 필요한 헤더 추가
        },
    });

    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
}
