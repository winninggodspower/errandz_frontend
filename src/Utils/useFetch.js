
export async function requestdata(url, data, headers={'Content-Type': 'application/json'}, method="POST") {
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


export async function logJSONData(lng, lat) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
    const jsonData = await response.json();
    return jsonData;
  }