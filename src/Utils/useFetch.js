
export async function requestdata(url, data, headers={'Content-Type': 'application/json'}, method="POST") {
    console.log(method);
    console.log(headers);

    let params = {
        method: method,
        mode: 'cors',
        headers: headers,   
    }

    if (method === "POST") {
        params = {...params,body: JSON.stringify(data) };
    }
    const response = await fetch(url, params);
    return response
}
