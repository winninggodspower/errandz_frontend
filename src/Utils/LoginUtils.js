
export let setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
}

export let getToken =() => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}

export let clearToken = () =>{
    if (getToken()){
        return sessionStorage.removeItem('token')
    }
    else{
        return null
    }
}