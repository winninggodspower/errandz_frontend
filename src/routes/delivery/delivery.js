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
import BottomNav from "../../components/BottomNav/BottomNav";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import $ from "jquery"




mapboxgl.accessToken = "pk.eyJ1IjoiZ29kZnJlZDEiLCJhIjoiY2xkMWI3d29kMDV4ejNvbGcydWZ4ajJsYyJ9.FDOnmjiwqXVI5SGfd8u5Ow";

function Delivery() {

    
    const pickupInputRef = useRef();
    const deliveryInputRef = useRef();
    const mapRef = useRef();
    const mapContainerRef = useRef(null)
    const [lng, setlng] = useState(3.86);
    const [lat, setlat] = useState(9.93);
    const [zoom, setZoom] = useState(8);
    const [start, setStart] = useState([lng , lat])

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

    
    useEffect(()=> {
        if (!getToken()) {
            return navigate('/login');
        }
    }, [navigate, getToken])
    

    useEffect(()=>{
        if (mapRef.current) return;
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom

        });
        
        mapRef.current.on("move", () => {
            setlng(mapRef.current.getCenter().lng.toFixed(4));
            setlat(mapRef.current.getCenter().lat.toFixed(4));
            setZoom(mapRef.current.getZoom().toFixed(2));
        })
        route()
    }, [mapRef.current]) 

    const locate = () => {
        mapRef.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
                style: {
                    right :10,
                    top: 10
                },
                position: "bottom-left",
                showUserHeading: true,
            })
        );
    }

    const route = () =>{
        locate();
        mapRef.current.on("load", ()=> {
            mapRef.current.addLayer({
                id:"point",
                type: "circle", 
                source: {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                type: "Feature",
                                properties: {},
                                geometry: {
                                    type: "point",
                                    coordinates: start
                                }
                            }
                        ]
                    }
                },
                paint: {
                    "circle-radius": 10,
                    "circle-color": "#3887be"
                }
            });

            mapRef.current.on('click', (event) => {
                const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
                const end = {
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      properties: {},
                      geometry: {
                        type: 'Point',
                        coordinates: coords
                      }
                    }
                  ]
                };
                if (mapRef.current.getLayer('end')) {
                  mapRef.current.getSource('end').setData(end);
                } else {
                  mapRef.current.addLayer({
                    id: 'end',
                    type: 'circle',
                    source: {
                      type: 'geojson',
                      data: {
                        type: 'FeatureCollection',
                        features: [
                          {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                              type: 'Point',
                              coordinates: coords
                            }
                          }
                        ]
                      }
                    },
                    paint: {
                      'circle-radius': 10,
                      'circle-color': '#1a1a1a'
                    }
                  });
                }
                getRoute(coords);
              });
        })
    }

    async function getRoute(end) {
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        // if the route already exists on the map, we'll reset it using setData
        if (mapRef.current.getSource('route')) {
          mapRef.current.getSource('route').setData(geojson);
        }
        // otherwise, we'll make a new request
        else {
          mapRef.current.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: geojson
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }

    console.log({json})
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
                        <div style={{width: "100vw", height: "400px"}} ref={mapContainerRef}></div>
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

                                    <div id="grid-container" className="d-grid">
                                        <div className="me-2 opacity-0">
                                            <div id="dot2">
                                                <img src={dotIcon} alt="" />
                                            </div>
                                        </div>
                                        <button type="submit" disabled={is_loading} className="btn btn-dark btn-lg w-100">Request Delivery</button>
                                    </div>

                                </form>
                                <br className="mb-5 pb-5" />
                                <br className="mb-5 pb-5" />
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            
            <BottomNav />
        </>
    )
}

export default Delivery;