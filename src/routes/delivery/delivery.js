import mapIcon from "../../images/map.png"
import Navbar from "../../components/Navbar/Navbar";
import "./delivery.css"
import moneyIcon from "../../image/money.svg"
import walletIcon from "../../image/wallet.svg"
import dotIcon from "../../image/dot.svg"
import { useEffect, useRef } from "react";


function Delivery() {

    const autoCompletePickupRef = useRef();
    const autoCompleteDeliveryRef = useRef();
    const pickupInputRef = useRef();
    const deliveryInputRef = useRef();
    const mapRef = useRef();

    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();

    const options = {
        componentRestrictions: { country: "ng" },
        fields: ["address_components", "place_id", "geometry", "icon", "name"],
        // strictBounds: false,
        types: ["establishment"],
    };

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
        

        var chicago = new window.google.maps.LatLng(41.850033, -87.6500523);
        var mapOptions = {
          zoom:10,
          center: chicago
        }
        var map = new window.google.maps.Map(mapRef.current, mapOptions);
        directionsRenderer.setMap(map);
        

    }, [])
    

    
    let calcRoute = ()=> {
        var start = autoCompletePickupRef.current.getPlace();
        var end = autoCompletePickupRef.current.getPlace();
        var request = {
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


                                <form action="" method="post" className="my-3">
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
                                                    <input className="form-control" id="pickup-name" type="text" placeholder="Name"
                                                        aria-label="godfred obot" />
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" type="text" placeholder="Location" id="pickup-location" ref={pickupInputRef}
                                                        aria-label="alakahia chaoba" />
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" type="text" placeholder="Phone number"
                                                        aria-label="08123902721" />
                                                </div>

                                                <div className="mb-3 d-noee d-md-block">
                                                    <input className="form-control" type="text" placeholder="Email"
                                                        aria-label="godfredobot@gmail.com" />
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
                                                    <input className="form-control" type="text" placeholder="Name"
                                                        aria-label="godfred obot" />
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" type="text" placeholder="Location" ref={deliveryInputRef}
                                                        aria-label="alakahia chaoba" />
                                                </div>

                                                <div className="mb-3">
                                                    <input className="form-control" type="text" placeholder="Phone number"
                                                        aria-label="08123902721" />
                                                </div>

                                                <div className="mb-3 d-noee d-md-block">
                                                    <input className="form-control" type="text" placeholder="Email"
                                                        aria-label="godfredobot@gmail.com" />
                                                </div>

                                                <div className="mb-3">
                                                    <textarea className="form-control" id="parcel description"
                                                        placeholder="parcel description" rows="2"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>

                                    <fieldset className="pb-1 pb-md-3 d-none d-md-block">
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

                                    <button type="submit" className="btn btn-dark btn-lg w-100">Request Delivery</button>

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