import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100vw",
  height: "83vh",
};

const center = {
  lat: 39.7392,
  lng: -104.9903,
};

const Map = ({ rentals }) => {
  const [selected, setSelected] = useState(null);

  const [apiKey, setApiKey] = useState("");

  const options = {
    method: "GET",
    url: "http://localhost:8000/map",
  };

  axios
    .request(options)
    .then((response) => {
      response.json(response.data);
    })
    .then((data) => setApiKey(data))
    .catch((error) => {
      console.error(error);
    });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {rentals.map((marker) => (
        <Marker
          id="marker"
          key={marker.address}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          animation={2}
          content={marker.price}
          className="marker-icon"
          onClick={() => {
            setSelected(marker);
          }}
          // icon={{
          //   scaledSize: new window.google.maps.Size(30, 30),
          //   origin: new window.google.maps.Point(0, 0),
          //   anchor: new window.google.maps.Point(15, 15),
          // }}
        />
      ))}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.latitude, lng: selected.longitude }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <img className="info-window-img" src={selected.images[0].url} />
            <p>${selected.price.toLocaleString("en-US")}</p>
            <p>
              {selected.bedrooms} bd, {selected.bathrooms} ba
            </p>
            <p>{selected.footage} sqft</p>
          </div>
        </InfoWindow>
      ) : null}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
