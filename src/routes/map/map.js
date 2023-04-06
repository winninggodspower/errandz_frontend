import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// import $ from "jquery"


function Map() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZ29kZnJlZDEiLCJhIjoiY2xkMWI3d29kMDV4ejNvbGcydWZ4ajJsYyJ9.FDOnmjiwqXVI5SGfd8u5Ow";
    const mapboxMapContainer = useRef(null);
    const mapboxMap = useRef(null);
    const [lng, setlng] = useState(3.86);
    const [lat, setlat] = useState(9.93);
    const [zoom, setZoom] = useState(8);
    const start = [lng, lat];

    useEffect(() => {
        if (mapboxMap.current) return;
        mapboxMap.current = new mapboxgl.Map({
            container: mapboxMapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom

        });
        // $.ajax({
        //     url: "https://www.openstreetmap.org/api/0.6/way/260501602/full",
        //     dataType: "xml",
        //     success: function (xml) {
        //         var layer = new L.OSM.DataLayer(xml).addTo(mapboxMap);
        //         mapboxMap.fitBounds(layer.getBounds());
        //     }
        // });

        mapboxMap.current.on("move", () => {
            setlng(mapboxMap.current.getCenter().lng.toFixed(4));
            setlat(mapboxMap.current.getCenter().lat.toFixed(4));
            setZoom(mapboxMap.current.getZoom().toFixed(2));
        })
        route()
    }, [mapboxMap.current])

    const locate = () => {
        mapboxMap.current.addControl(
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
        mapboxMap.current.on("load", ()=> {
            mapboxMap.current.addLayer({
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

            mapboxMap.current.on('click', (event) => {
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
                if (mapboxMap.current.getLayer('end')) {
                  mapboxMap.current.getSource('end').setData(end);
                } else {
                  mapboxMap.current.addLayer({
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
                      'circle-color': '#f30'
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
        if (mapboxMap.current.getSource('route')) {
          mapboxMap.current.getSource('route').setData(geojson);
        }
        // otherwise, we'll make a new request
        else {
          mapboxMap.current.addLayer({
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

        const instructions = document.getElementById('instructions');
    const steps = data.legs[0].steps;

    console.log(data.distance)
  } 

    return (
        <div className="d-flex">
            <div ref={mapboxMapContainer} className="w-100 d-flex flex-fill vh-100"></div>
            
            <div className="position-absolute ">
                <input className="form-control" type="text" />
                <input className="form-control" type="text" />
            </div>


        </div>
    )
};

export default Map;