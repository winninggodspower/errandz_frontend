import { BASE_URL } from '../../globalVariable'

export async function getDeliveryInfo(deliveryRef) {
    let deliveryPath = `/api/get_delivery_details/${deliveryRef}`;
    let deliveryUrl = BASE_URL.concat(deliveryPath)
    let response = await fetch(deliveryUrl)
        .then((res)=>res.json())
        .then(data=>{
            return data
        })
    return response
  
}
