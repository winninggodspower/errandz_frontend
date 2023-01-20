export async function useFetch(url, options){
    return fetch(url, options).then(res=>res.json)
}
