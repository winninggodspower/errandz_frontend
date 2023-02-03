
export async function requestdata(url, data, headers={'Content-Type': 'application/json'}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
    });
    return response
}
