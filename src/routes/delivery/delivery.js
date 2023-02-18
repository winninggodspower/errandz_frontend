import Navbar from "../../components/Navbar/Navbar";
import "./delivery.css";
import moneyIcon from "../../image/money.svg";
import walletIcon from "../../image/wallet.svg";
import dotIcon from "../../image/dot.svg";
import { UserContext } from "../../UserContext";
import { requestdata } from '../../Utils/useFetch'
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../globalVariable"
import { getToken } from "../../Utils/LoginUtils";
import { AlertContext } from "../../UserContext";
import { places, look_up, prices } from "../../components/mapFile";

function Delivery() {

    const autoCompletePickupRef = useRef();
    const autoCompleteDeliveryRef = useRef();
    const pickupInputRef = useRef();
    const deliveryInputRef = useRef();
    const mapRef = useRef();

    let [is_loading, setLoading] = useState(false);
    let [deliveryDetails, setDeliveryDetails] = useState({ 
        pickup_location: '', recipient_name: '', recipient_email: '', recipient_phone_number: '',
        delivery_location: '',  recievers_name: '', receivers_email: '', receiver_phone_number: '', 
        goods_description: '', delivery_distance: 3    
    });
    let [fieldErrors, setFieldError] = useState({});
    let { user} = useContext(UserContext)
    let navigate = useNavigate();
    let { addAlert } = useContext(AlertContext)

    let directionsService = new window.google.maps.DirectionsService();
    let directionsRenderer = new window.google.maps.DirectionsRenderer();

    const options = {
        componentRestrictions: { country: "ng" },
        fields: ["address_components", "place_id", "geometry", "icon", "name"],
        // strictBounds: false,
        types: ["establishment"],
    };

    useEffect(() => {
        if (!getToken()) {
            return navigate('/login');
        }
    }, [user, navigate])

    useEffect(()=>{

        autoCompletePickupRef.current = new window.google.maps.places.Autocomplete(
            pickupInputRef.current,
            options
            );
        autoCompletePickupRef.current.addListener('place_changed',()=> handlePlaceChanged(autoCompletePickupRef, pickupInputRef))
        
        autoCompleteDeliveryRef.current = new window.google.maps.places.Autocomplete(
            deliveryInputRef.current,
            options
            );
        autoCompleteDeliveryRef.current.addListener('place_changed',()=> handlePlaceChanged(autoCompleteDeliveryRef, deliveryInputRef))
        

        let chicago = new window.google.maps.LatLng(41.850033, -87.6500523);
        let mapOptions = {
          zoom:10,
          center: chicago
        }
        let map = new window.google.maps.Map(mapRef.current, mapOptions);
        directionsRenderer.setMap(map);
        
    }, [])
    

    let calcRoute = ()=> {
        let start = autoCompletePickupRef.current.getPlace();
        let end = autoCompletePickupRef.current.getPlace();
        let request = {
            origin: start,
            destination: end,
            travelMode: 'BICYCLING'
        };

        directionsService.route(request, function(result, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
    }
    

    let handlePlaceChanged = async (autocomplete, input)=>{
        const place = await autocomplete.current.getPlace();
        console.log(place)

        if (!place.geometry){
            // user did not select a prediction; reset input field
            input.placeholder = 'Enter a place';
        } else {
            // display details about the valid place
            alert(place.name);

            // plot map direction
            calcRoute();
        }

      }

    let handleSubmit = (e)=>{
        e.preventDefault()
        setLoading(true);
        let deliveryPath = '/api/make_delivery';
        let deliveryUrl = BASE_URL + deliveryPath
        let headers={
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`
        }

        let response = requestdata(deliveryUrl, deliveryDetails, headers=headers);
        response.then(res=>{
            if (res.status === 400) {
                res.json()
                .then((data )=>{
                    setFieldError(data)
                    console.log(data)
                })
            }
            else if (res.status === 201){
                res.json()
                .then((data)=>{
                    console.log('Success: ', data);
                    setFieldError({})
                    window.location.replace(data.checkout_url)
                })
            }
        })
        .catch((error)=>{
            addAlert('danger', `${error}`)
        })
            
            
        setLoading(false);

    }

    

    
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log(value)
        console.log(name)
        
        
        setDeliveryDetails({ ...deliveryDetails, [name]: e.target.value })

        if(name === "pickup_location" && value){
            
            if (deliveryDetails.delivery_location){
                
                var pickup = look_up[value].id
                var delivery = look_up[deliveryDetails.delivery_location].id

                console.log(pickup)
                console.log(delivery)
               
                var int_delivery1 = parseInt(delivery) -1
                var abs_price1 = prices[pickup]
                var abs_cash1 = abs_price1[int_delivery1] 
                console.log(abs_cash1)
                setDeliveryDetails((d)=>{
                    return {...d, "delivery_distance":abs_cash1}
                })
                


            }}
        if(name === "delivery_location" && value){
            
                if (deliveryDetails.pickup_location){

                var delivery1 = look_up[value].id
                var pickup2 = look_up[deliveryDetails.pickup_location].id

                console.log(pickup2)
                console.log(delivery1)
                var int_delivery = parseInt(delivery1) -1
                var abs_price = prices[pickup2]
                var abs_cash = abs_price[int_delivery]
                console.log(abs_cash)
                setDeliveryDetails((d)=>{
                    return {...d, "delivery_distance":abs_cash}
                })
                
                }}
    }

    return (
        <>

            <div>
                <Navbar transparent={false} />
                <div className="form-map bg-very-light">


                    <div id="map" className="position-relative">
                        <div style={{width: "100%", height: "400px"}} ref={mapRef}></div>
                        {/* <img src={mapIcon} alt="" width="100%" height="400px" style={{ objectFit: "cover" }} /> */}
                        <div id="faded-circle" className="position-absolute bottom-0 w-100 bg-light rounded-top-up">

                        </div>
                    </div>

                    <div className="rounded-top-up " style={{ backgroundColor: "white" }}>
                        <div className="container pt-5">

                            <div className="px-4 mx-auto" style={{ width: "600px", maxWidth: "100%" }}>


                                <form method="post" onSubmit={handleSubmit} className="my-3">
                                    <fieldset className="pb-1 pb-md-3">
                                        <div id="grid-container" className="d-grid">
                                            <div className="me-2" id="dot1-container">
                                                <div id="dot1">
                                                    <img src={dotIcon} alt="" />
                                                </div>
                                            </div>
                                            <div className="forms">
                                                <legend className="mb-3 mb-md-4 text-uppercase ">Pickup</legend>
                                                <div className="mb-3">
                                                    <input className="form-control" value={deliveryDetails.recipient_name} name="recipient_name" id="pickup-name" type="text" placeholder="Name"
                                                    aria-label="godfred obot" onChange={handleInputChange} />
                                                    {fieldErrors.recipient_name && fieldErrors.recipient_name.map(error => <p key={error} className='text-danger'>{error}</p>)}
                          
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" list="pickuplist" value={deliveryDetails.pickup_location} name="pickup_location" type="text" placeholder="Location" id="pickup-location" onChange={handleInputChange}
                                                        aria-label="alakahia chaoba" />
                                                    <datalist id="pickuplist">
                                                    
                                                        {places.map((place)=> <option value={place[0]} name={place[1]} />)}
                                                    </datalist>
                                                    {fieldErrors.pickup_location && fieldErrors.pickup_location.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" value={deliveryDetails.recipient_phone_number} onChange={handleInputChange} name="recipient_phone_number"  type="text" placeholder="Phone number"
                                                        aria-label="08123902721" />
                                                    {fieldErrors.recipient_phone_number && fieldErrors.recipient_phone_number.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3 d-noee d-md-block">
                                                    <input className="form-control" value={deliveryDetails.recipient_email} name="recipient_email" onChange={handleInputChange} type="text" placeholder="Email"
                                                        aria-label="godfredobot@gmail.com" />
                                                    {fieldErrors.recipient_email && fieldErrors.recipient_email.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>
                                        </div>
                                            </div>
                                    </fieldset>

                                    <fieldset className="pb-1 pb-md-3">
                                        <div id="grid-container" className="d-grid">
                                            <div className="me-2">
                                                <div id="dot2">
                                                    <img src={dotIcon} alt="" />
                                                </div>
                                            </div>

                                            <div>
                                                <legend className="mb-3 mb-md-4 text-uppercase">Delivery</legend>

                                                <div className="mb-3">
                                                    <input className="form-control" value={deliveryDetails.recievers_name} name="recievers_name" onChange={handleInputChange} type="text" placeholder="Name"
                                                        aria-label="godfred obot" />
                                                    {fieldErrors.recievers_name && fieldErrors.recievers_name.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" list="deliverylist" value={deliveryDetails.delivery_location} name="delivery_location" onChange={handleInputChange} type="text" placeholder="Location"
                                                        aria-label="alakahia chaoba" />

                                                <datalist id="deliverylist">
                                                    
                                                    {places.map((place)=> <option >{place[0]}</option>)}
                                                </datalist>
                                                    {fieldErrors.delivery_location && fieldErrors.delivery_location.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" value={deliveryDetails.receiver_phone_number} name="receiver_phone_number" onChange={handleInputChange} type="text" placeholder="Phone number"
                                                        aria-label="08123902721" />
                                                    {fieldErrors.receiver_phone_number && fieldErrors.receiver_phone_number.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3 d-noee d-md-block">
                                                    <input className="form-control" value={deliveryDetails.receivers_email} name="receivers_email" onChange={handleInputChange} type="text" placeholder="Email"
                                                        aria-label="godfredobot@gmail.com" />
                                                    {fieldErrors.receivers_email && fieldErrors.receivers_email.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>

                                                <div className="mb-3">
                                                    <textarea className="form-control" value={deliveryDetails.goods_description} name="goods_description" onChange={handleInputChange} id="parcel description"
                                                        placeholder="parcel description" rows="2"></textarea>
                                                    {fieldErrors.goods_description && fieldErrors.goods_description.map(error => <p key={error} className='text-danger'>{error}</p>)}
                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>

                                    <fieldset className="pb-1 pb-md-3 d-none">
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn border border-2 w-100 py-2 text-dark"> <img src={moneyIcon}
                                                    style={{ width: "30px" }} alt=" cash icon" /> Cash</button>
                                            </div>
                                            <div className="col">
                                                <button className="btn border border-2 w-100 py-2 text-dark"> <img src={walletIcon}
                                                    style={{ width: "30px" }} alt="wallet icon" /> Wallet</button>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <button type="submit" disabled={is_loading} className="btn btn-dark btn-lg w-100">Request Delivery</button>

                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Delivery;