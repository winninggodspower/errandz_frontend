import map from "../../image/map.png"
import Location from "../../image/Location.png"
import Line5 from "../../image/Line5.png"
import Ellipse8 from "../../image/Ellipse8.png"
import { useNavigate, useParams } from "react-router-dom"
import { getDeliveryInfo } from "./getDeliveryInfo"
import { useLoaderData } from "react-router-dom"
import { requestdata } from "../../Utils/useFetch"
import { BASE_URL } from "../../globalVariable"
import { getToken } from "../../Utils/LoginUtils"
import { UserContext, AlertContext } from "../../UserContext"

import { useEffect, useContext } from "react"

export async function loader({ params }) {
    let deliveryInfo = await getDeliveryInfo(params.deliveryRef);
    return  {deliveryInfo}
  }


function AcceptRequest() {
    const { deliveryInfo } = useLoaderData();
    const { deliveryRef } = useParams();
    let navigate = useNavigate();
    let { user } = useContext(UserContext);
    let { addAlert } = useContext(AlertContext)

    let handleAcceptRequest = async ()=> {
        const acceptRequestPath = "/api/accept_delivery_request";
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`
        }
        let body = {
            delivery_ref: deliveryRef
        }
        
        let response = await requestdata(BASE_URL + acceptRequestPath, body, headers=headers)
        .then(res=>{
            if (res.status === "200") {
                addAlert('success', "successfully accepted delivery request")
                return navigate("/dashboard")
            }else{
                addAlert('danger', "request already accepted")
                return navigate("/dashboard")
            }
            return res.json()
        })
        .then(data=>{
            return data
        })

        console.log(response);

    }

    useEffect(() => {
        if (!user) {
            return navigate('/login');
        }
    }, [user, navigate])


    return (
        <>

            <div class="form-map bg-very-light">

                <div id="map" class="position-relative">
                    <img src={map} alt="" width="100%" height="400px" style={{ objectFit: "cover", objectPosition: "bottom" }} />
                </div>

                <div class="py-5 my-5">

                    <div class="text-center">
                        <img class="rounded-circle" src={deliveryInfo ? deliveryInfo.customer.account.profile_image : Ellipse8} width="50px" alt="" />
                    </div>

                    <div class="text-center mt-4 px-3">
                        <img src={Location} alt="location icon" width="20px" style={{ verticalAlign: "text-bottom" }} />
                        <span>{ deliveryInfo ? deliveryInfo.pickup_location :  "loading .."}</span>
                    </div>

                    <div class="text-center my-2">
                        <img src={Line5} alt="" />
                    </div>

                    <div class="text-center mb-5 px-3">
                        <img src={Location} alt="location icon" width="20px" style={{ verticalAlign: "text-bottom" }} />
                        <span>{ deliveryInfo ? deliveryInfo.delivery_location :  "loading .."}</span>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-dark" onClick={handleAcceptRequest} style={{ width: "150px", height: "45px" }}>Accept</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AcceptRequest;