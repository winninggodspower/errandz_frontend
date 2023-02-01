


import React, {useEffect, useCallback} from 'react'

function MapTest() {
  useEffect(() => {
    renderMap();
  
  }, [renderMap])
  const renderMap = () => {
    send()
  };

  const send = useCallback(
    () => {
      window.initMap = initMap;
    window.initMap()
    },
    [],
  )
  

  const initMap = () => {
    let latitude = 40.674;
    let longitude = -73.945;
    const map = new window.google.maps.Map(
      document.getElementById("google-map"),
      {
        center: new window.google.maps.LatLng(latitude, longitude),
        zoom: 10,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        draggable: true,
        gestureHandling: "cooperative"
      }
    );
    return null
  };
  
  return (
    <div>
      <section className="map-wrapper-container">
        <div className="map-top-container">
          <h2>Google Map</h2>
          <span>Location at your fingertips</span>
        </div>
        <div className="map-wrapper">
          <div className="map-container" id="google-map"></div>
          
         
          
        </div>
      </section>
    </div>
  )
}

export default MapTest
