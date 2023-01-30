import google from "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgJOrM6dfBuMJjAw5yW97Dc74xZ2oiRP8&libraries=places&callback=initMap";

const center = { lat: 50.064192, lng: -130.605469 };
// Create a bounding box with sides ~10km away from the center point
const defaultBounds = {
  north: center.lat + 0.1,
  south: center.lat - 0.1,
  east: center.lng + 0.1,
  west: center.lng - 0.1,
};

const input = document.getElementById("pickup-location");
const options = {
  bounds: defaultBounds,
  componentRestrictions: { country: "ng" },
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ["establishment"],
};
const autocomplete = new google.maps.places.Autocomplete(input, options);
