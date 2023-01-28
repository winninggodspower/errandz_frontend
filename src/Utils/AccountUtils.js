import { BASE_URL } from "../globalVariable";
import { getToken } from "./LoginUtils";

export async function getUserDetails() {
    let user = await fetch(BASE_URL + '/api/account/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${getToken()} `
      }
    })
    return user.json();
  }