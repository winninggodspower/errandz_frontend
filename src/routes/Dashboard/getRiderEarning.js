import { BASE_URL } from "../../globalVariable";
import { getToken } from "../../Utils/LoginUtils";


export default async function getRiderEarning(user) {
    let todaysEarning = 0;
    let totalEarning = 0;

    // checking if user is a rider
    if(!user && user.account.user_type != "rider") throw "user is not set";
    let earningData = await FetchEarning()

    // summing all the earning and saving to the totalEarning variable
    earningData.map(earning=>{
        totalEarning += earning.amount;
    })

    // filtering out todaysEarning
    let todaysEarningData = earningData.filter(data=>{
        return isToday(new Date(data.date_created));
    })
    todaysEarningData.map(earning=>{
        todaysEarning += earning.amount;
    })

    return {todaysEarning, totalEarning};
}

async function FetchEarning(){
    let path = "/api/get_rider_earning";
    let url = BASE_URL + path

    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`,
        }
    })
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        return data
    })
    .catch(error=>{
        console.log(error);
    })

    return response
}

function isToday(date) {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
      return true;
    }
  
    return false;
  }
  