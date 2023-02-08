import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "90vw",
  height: "50vh",
};

const center = {
  lat: 39.7392,
  lng: -104.9903,
};

const Map = ({ rentals }) => {
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  console.log(rentals);
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {rentals.map((marker) => (
        <Marker
          id="marker"
          key={marker.address}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          animation={2}
          onClick={() => {
            setSelected(marker);
          }}
          icon={{
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
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
            <img src={selected.image} />
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
