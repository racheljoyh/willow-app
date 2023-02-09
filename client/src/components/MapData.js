import Marker from "./Marker";
import { useState } from "react";
import { InfoWindow, GoogleMap } from "@react-google-maps/api";

function MapData({ rentals, map }) {
  const [selected, setSelected] = useState();

  console.log(selected);

  return (
    <>
      {rentals.map((marker) => {
        return (
          <Marker
            key={marker.id}
            map={map}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            <div
              onMouseEnter={() => {
                setSelected(marker);
              }}
              className="marker"
            >
              <p>${marker.price}</p>
            </div>
          </Marker>
        );
      })}
      <GoogleMap>
        {selected ? (
          <InfoWindow
            position={{ lat: selected.latitude, lng: selected.longitude }}
            onCloseClick={() => {
              setSelected("test");
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
      </GoogleMap>
    </>
  );
}

export default MapData;
