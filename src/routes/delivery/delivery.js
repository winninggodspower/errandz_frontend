import Navbar from '../../components/Navbar/Navbar';
import './delivery.css';
import moneyIcon from '../../image/money.svg';
import walletIcon from '../../image/wallet.svg';
import dotIcon from '../../image/dot.svg';
import { UserContext } from '../../UserContext';
import { requestdata } from '../../Utils/useFetch';
import { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, MAPBOX_ACCESS_TOKEN } from '../../globalVariable';
import { getToken } from '../../Utils/LoginUtils';
import { AlertContext } from '../../UserContext';
import BottomNav from '../../components/BottomNav/BottomNav';
import mapboxgl from 'mapbox-gl';
import { AddressAutofill } from '@mapbox/search-js-react';

function Delivery() {
  const pickupInputRef = useRef();
  const deliveryInputRef = useRef();
  const mapRef = useRef();
  const porthHarcourtCoord = { lon: 7.233611, lat: 4.824167 };

  let [is_loading, setLoading] = useState(false);
  let [deliveryDetails, setDeliveryDetails] = useState({
    pickup_location: '',
    recipient_name: '',
    recipient_email: '',
    recipient_phone_number: '',
    delivery_location: '',
    recievers_name: '',
    receivers_email: '',
    receiver_phone_number: '',
    goods_description: '',
    delivery_distance: 3,
  });
  let [fieldErrors, setFieldError] = useState({});
  let { user } = useContext(UserContext);
  let navigate = useNavigate();
  let { addAlert } = useContext(AlertContext);

  const options = {
    componentRestrictions: { country: 'ng' },
    fields: ['address_components', 'place_id', 'geometry', 'icon', 'name'],
    // strictBounds: false,
    types: ['establishment'],
  };

  useEffect(() => {
    if (!getToken()) {
      return navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style:
        'https://api.maptiler.com/maps/streets-v2/style.json?key=Dfj7NWtA1Un77dTuyPEO', // style URL
      center: [porthHarcourtCoord.lon, porthHarcourtCoord.lat], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
  }, []);

  let calcRoute = () => {
    console.log('calc');
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let deliveryPath = '/api/make_delivery';
    let deliveryUrl = BASE_URL + deliveryPath;
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    };

    let response = requestdata(
      deliveryUrl,
      deliveryDetails,
      (headers = headers)
    );
    response
      .then((res) => {
        if (res.status === 400) {
          res.json().then((data) => {
            setFieldError(data);
            // console.log(data);
          });
        } else if (res.status === 201) {
          res.json().then((data) => {
            // console.log('Success: ', data);
            setFieldError({});
            window.location.replace(data.checkout_url);
          });
        }
      })
      .catch((error) => {
        addAlert('danger', `${error}`);
      });

    setLoading(false);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  return (
    <>
      <div>
        <Navbar transparent={false} />
        <div className="form-map bg-very-light">
          <div id="map" className="position-relative">
            <div style={{ width: '100%', height: '400px' }} ref={mapRef}></div>
            {/* <img src={mapIcon} alt="" width="100%" height="400px" style={{ objectFit: "cover" }} /> */}
            <div
              id="faded-circle"
              className="position-absolute bottom-0 w-100 bg-light rounded-top-up"
            ></div>
          </div>

          <div className="rounded-top-up " style={{ backgroundColor: 'white' }}>
            <div className="container pt-5">
              <div
                className="px-4 mx-auto"
                style={{ width: '600px', maxWidth: '100%' }}
              >
                <form method="post" onSubmit={handleSubmit} className="my-3">
                  <fieldset className="pb-1 pb-md-3">
                    <div id="grid-container" className="d-grid">
                      <div className="me-2" id="dot1-container">
                        <div id="dot1">
                          <img src={dotIcon} alt="" />
                        </div>
                      </div>
                      <div className="forms">
                        <legend className="mb-3 mb-md-4 text-uppercase ">
                          Pickup
                        </legend>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            value={deliveryDetails.recipient_name}
                            name="recipient_name"
                            id="pickup-name"
                            type="text"
                            placeholder="Name"
                            aria-label="godfred obot"
                            onChange={handleInputChange}
                          />
                          {fieldErrors.recipient_name &&
                            fieldErrors.recipient_name.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3">
                          <AddressAutofill accessToken={MAPBOX_ACCESS_TOKEN}>
                            <input
                              className="form-control"
                              list="pickuplist"
                              value={deliveryDetails.pickup_location}
                              name="pickup_location"
                              type="text"
                              placeholder="Location"
                              id="pickup-location"
                              autoComplete="address-line1"
                              onChange={handleInputChange}
                              aria-label="alakahia chaoba"
                            />
                          </AddressAutofill>

                          {fieldErrors.pickup_location &&
                            fieldErrors.pickup_location.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control"
                            value={deliveryDetails.recipient_phone_number}
                            onChange={handleInputChange}
                            name="recipient_phone_number"
                            type="text"
                            placeholder="Phone number"
                            aria-label="08123902721"
                          />
                          {fieldErrors.recipient_phone_number &&
                            fieldErrors.recipient_phone_number.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3 d-noee d-md-block">
                          <input
                            className="form-control"
                            value={deliveryDetails.recipient_email}
                            name="recipient_email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Email"
                            aria-label="godfredobot@gmail.com"
                          />
                          {fieldErrors.recipient_email &&
                            fieldErrors.recipient_email.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
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
                        <legend className="mb-3 mb-md-4 text-uppercase">
                          Delivery
                        </legend>

                        <div className="mb-3">
                          <input
                            className="form-control"
                            value={deliveryDetails.recievers_name}
                            name="recievers_name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            aria-label="godfred obot"
                          />
                          {fieldErrors.recievers_name &&
                            fieldErrors.recievers_name.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3">
                          <AddressAutofill accessToken={MAPBOX_ACCESS_TOKEN}>
                            <input
                              className="form-control"
                              list="deliverylist"
                              value={deliveryDetails.delivery_location}
                              name="delivery_location"
                              onChange={handleInputChange}
                              type="text"
                              placeholder="Location"
                              aria-label="alakahia chaoba"
                            />
                          </AddressAutofill>

                          {fieldErrors.delivery_location &&
                            fieldErrors.delivery_location.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3">
                          <input
                            className="form-control"
                            value={deliveryDetails.receiver_phone_number}
                            name="receiver_phone_number"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Phone number"
                            aria-label="08123902721"
                          />
                          {fieldErrors.receiver_phone_number &&
                            fieldErrors.receiver_phone_number.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3 d-noee d-md-block">
                          <input
                            className="form-control"
                            value={deliveryDetails.receivers_email}
                            name="receivers_email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Email"
                            aria-label="godfredobot@gmail.com"
                          />
                          {fieldErrors.receivers_email &&
                            fieldErrors.receivers_email.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>

                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            value={deliveryDetails.goods_description}
                            name="goods_description"
                            onChange={handleInputChange}
                            id="parcel description"
                            placeholder="parcel description"
                            rows="2"
                          ></textarea>
                          {fieldErrors.goods_description &&
                            fieldErrors.goods_description.map((error) => (
                              <p key={error} className="text-danger">
                                {error}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="pb-1 pb-md-3 d-none">
                    <div className="row">
                      <div className="col">
                        <button className="btn border border-2 w-100 py-2 text-dark">
                          {' '}
                          <img
                            src={moneyIcon}
                            style={{ width: '30px' }}
                            alt=" cash icon"
                          />{' '}
                          Cash
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn border border-2 w-100 py-2 text-dark">
                          {' '}
                          <img
                            src={walletIcon}
                            style={{ width: '30px' }}
                            alt="wallet icon"
                          />{' '}
                          Wallet
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div id="grid-container" className="d-grid">
                    <div className="me-2 opacity-0">
                      <div id="dot2">
                        <img src={dotIcon} alt="" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={is_loading}
                      className="btn btn-dark btn-lg w-100"
                    >
                      Request Delivery
                    </button>
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
  );
}

export default Delivery;
